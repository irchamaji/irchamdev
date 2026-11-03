"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./StickFight.module.scss";

// Limb angles are absolute degrees: 0 points straight down, positive swings toward the opponent.
// Torso angle: 0 is upright, positive leans toward the opponent.
type Pose = {
  x: number; // offset toward the opponent
  lift: number; // height above the ground
  torso: number;
  frontArm: [number, number];
  backArm: [number, number];
  frontLeg: [number, number];
  backLeg: [number, number];
};

const LEN = { torso: 26, head: 7, upperArm: 14, forearm: 13, thigh: 16, shin: 16 };
const GROUND = 100;
const HOME = { a: 118, b: 182 };

const POSES = {
  guard: {
    x: 0, lift: 0, torso: 8,
    frontArm: [35, 155], backArm: [15, 150],
    frontLeg: [22, 2], backLeg: [-18, -8],
  },
  bounce: {
    x: 0, lift: 0, torso: 10,
    frontArm: [38, 158], backArm: [18, 152],
    frontLeg: [28, -8], backLeg: [-12, -30],
  },
  punch: {
    x: 8, lift: 0, torso: 20,
    frontArm: [92, 90], backArm: [20, 160],
    frontLeg: [32, 12], backLeg: [-30, -18],
  },
  kick: {
    x: 14, lift: 0, torso: -22,
    frontArm: [40, 150], backArm: [-35, 140],
    frontLeg: [100, 92], backLeg: [-4, -4],
  },
  block: {
    x: -3, lift: 0, torso: -2,
    frontArm: [70, 172], backArm: [55, 168],
    frontLeg: [20, 4], backLeg: [-22, -10],
  },
  hit: {
    x: -8, lift: 0, torso: -18,
    frontArm: [70, 130], backArm: [-45, -10],
    frontLeg: [12, 0], backLeg: [-28, -12],
  },
  flying: {
    x: -22, lift: 14, torso: -55,
    frontArm: [120, 150], backArm: [-120, -150],
    frontLeg: [60, 40], backLeg: [40, 10],
  },
  down: {
    x: -30, lift: 2, torso: -80,
    frontArm: [-150, -110], backArm: [-75, -60],
    frontLeg: [118, 55], backLeg: [88, 92],
  },
  crouch: {
    x: -30, lift: 0, torso: -5,
    frontArm: [60, 40], backArm: [-20, 10],
    frontLeg: [75, -15], backLeg: [-40, -5],
  },
  victory: {
    x: 4, lift: 0, torso: 0,
    frontArm: [160, 178], backArm: [20, 30],
    frontLeg: [15, 0], backLeg: [-15, 0],
  },
} satisfies Record<string, Pose>;

type PoseName = keyof typeof POSES;
type Spark = { who: "a" | "b"; limb: "hand" | "foot" };
type Keyframe = { t: number; a: PoseName; b: PoseName; spark?: Spark };

const TIMELINE: Keyframe[] = [
  { t: 0, a: "guard", b: "guard" },
  { t: 0.35, a: "bounce", b: "bounce" },
  { t: 0.7, a: "guard", b: "guard" },
  { t: 0.95, a: "punch", b: "hit", spark: { who: "a", limb: "hand" } },
  { t: 1.35, a: "guard", b: "guard" },
  { t: 1.7, a: "bounce", b: "bounce" },
  { t: 2.0, a: "block", b: "kick", spark: { who: "b", limb: "foot" } },
  { t: 2.4, a: "guard", b: "guard" },
  { t: 2.65, a: "hit", b: "punch", spark: { who: "b", limb: "hand" } },
  { t: 3.0, a: "guard", b: "bounce" },
  { t: 3.3, a: "bounce", b: "guard" },
  { t: 3.55, a: "punch", b: "block", spark: { who: "a", limb: "hand" } },
  { t: 3.85, a: "guard", b: "guard" },
  { t: 4.1, a: "kick", b: "guard", spark: { who: "a", limb: "foot" } },
  { t: 4.3, a: "kick", b: "flying" },
  { t: 4.6, a: "guard", b: "down" },
  { t: 5.1, a: "victory", b: "down" },
  { t: 6.0, a: "victory", b: "down" },
  { t: 6.5, a: "guard", b: "crouch" },
  { t: 7.1, a: "guard", b: "guard" },
];
const LOOP = 7.6;
const SPARK_TIME = 0.25;

const ease = (k: number) => (k < 0.5 ? 2 * k * k : 1 - (-2 * k + 2) ** 2 / 2);
const lerp = (p: number, q: number, k: number) => p + (q - p) * k;

function blend(p: Pose, q: Pose, k: number): Pose {
  const pair = (u: [number, number], v: [number, number]): [number, number] => [
    lerp(u[0], v[0], k),
    lerp(u[1], v[1], k),
  ];
  return {
    x: lerp(p.x, q.x, k),
    lift: lerp(p.lift, q.lift, k),
    torso: lerp(p.torso, q.torso, k),
    frontArm: pair(p.frontArm, q.frontArm),
    backArm: pair(p.backArm, q.backArm),
    frontLeg: pair(p.frontLeg, q.frontLeg),
    backLeg: pair(p.backLeg, q.backLeg),
  };
}

function poseAt(time: number): { a: Pose; b: Pose } {
  const t = time % LOOP;
  let i = TIMELINE.length - 1;
  while (TIMELINE[i].t > t) i--;
  const from = TIMELINE[i];
  const to = TIMELINE[i + 1] ?? { ...TIMELINE[0], t: LOOP };
  const k = ease((t - from.t) / (to.t - from.t));
  return {
    a: blend(POSES[from.a], POSES[to.a], k),
    b: blend(POSES[from.b], POSES[to.b], k),
  };
}

function sparkAt(time: number): { spark: Spark; age: number } | null {
  const t = time % LOOP;
  for (const frame of TIMELINE) {
    if (frame.spark && t >= frame.t && t < frame.t + SPARK_TIME) {
      return { spark: frame.spark, age: (t - frame.t) / SPARK_TIME };
    }
  }
  return null;
}

type Point = [number, number];

function skeleton(pose: Pose, home: number, dir: 1 | -1) {
  const limb = (from: Point, [upper, lower]: [number, number], l1: number, l2: number) => {
    const rad = (deg: number) => (deg * Math.PI) / 180;
    const mid: Point = [from[0] + Math.sin(rad(upper)) * l1 * dir, from[1] + Math.cos(rad(upper)) * l1];
    const end: Point = [mid[0] + Math.sin(rad(lower)) * l2 * dir, mid[1] + Math.cos(rad(lower)) * l2];
    return [from, mid, end] as const;
  };
  const drop = ([upper, lower]: [number, number]) =>
    Math.cos((upper * Math.PI) / 180) * LEN.thigh + Math.cos((lower * Math.PI) / 180) * LEN.shin;

  // Keep the lower foot planted on the ground
  const hipY = GROUND - Math.max(drop(pose.frontLeg), drop(pose.backLeg), 0) - pose.lift;
  const hip: Point = [home + pose.x * dir, hipY];
  const t = (pose.torso * Math.PI) / 180;
  const neck: Point = [hip[0] + Math.sin(t) * LEN.torso * dir, hip[1] - Math.cos(t) * LEN.torso];
  const head: Point = [
    neck[0] + Math.sin(t) * (LEN.head + 2) * dir,
    neck[1] - Math.cos(t) * (LEN.head + 2),
  ];

  return {
    hip,
    neck,
    head,
    frontArm: limb(neck, pose.frontArm, LEN.upperArm, LEN.forearm),
    backArm: limb(neck, pose.backArm, LEN.upperArm, LEN.forearm),
    frontLeg: limb(hip, pose.frontLeg, LEN.thigh, LEN.shin),
    backLeg: limb(hip, pose.backLeg, LEN.thigh, LEN.shin),
  };
}

type Skeleton = ReturnType<typeof skeleton>;

function Fighter({ body, color }: { body: Skeleton; color: string }) {
  const path = (points: readonly Point[]) => `M${points.map((p) => p.join(" ")).join("L")}`;
  return (
    <g stroke={color} fill="none" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
      <path d={path(body.backArm)} opacity={0.6} />
      <path d={path(body.backLeg)} opacity={0.6} />
      <path d={path([body.hip, body.neck])} />
      <path d={path(body.frontLeg)} />
      <path d={path(body.frontArm)} />
      <circle cx={body.head[0]} cy={body.head[1]} r={LEN.head} />
    </g>
  );
}

function Burst({ at, age }: { at: Point; age: number }) {
  const reach = 4 + age * 8;
  return (
    <g stroke="var(--brand-on-background-strong)" strokeWidth={2} strokeLinecap="round" opacity={1 - age}>
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
        const r = (deg * Math.PI) / 180;
        return (
          <line
            key={deg}
            x1={at[0] + Math.cos(r) * reach * 0.5}
            y1={at[1] + Math.sin(r) * reach * 0.5}
            x2={at[0] + Math.cos(r) * reach}
            y2={at[1] + Math.sin(r) * reach}
          />
        );
      })}
    </g>
  );
}

export function StickFight() {
  const ref = useRef<SVGSVGElement>(null);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let start = 0;
    let visible = true;
    const tick = (now: number) => {
      if (!start) start = now;
      setTime((now - start) / 1000);
      frame = requestAnimationFrame(tick);
    };

    // Only animate while the fight is on screen
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !visible) frame = requestAnimationFrame(tick);
      if (!entry.isIntersecting) cancelAnimationFrame(frame);
      visible = entry.isIntersecting;
    });
    if (ref.current) observer.observe(ref.current);
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  const pose = poseAt(time);
  const a = skeleton(pose.a, HOME.a, 1);
  const b = skeleton(pose.b, HOME.b, -1);
  const burst = sparkAt(time);
  const burstAt = burst && (burst.spark.who === "a" ? a : b)[burst.spark.limb === "hand" ? "frontArm" : "frontLeg"][2];

  return (
    <svg
      ref={ref}
      className={styles.fight}
      viewBox="40 20 220 90"
      role="img"
      aria-label="Two stick figures sparring"
    >
      <line
        x1={60}
        x2={240}
        y1={GROUND + 1.5}
        y2={GROUND + 1.5}
        stroke="var(--neutral-alpha-medium)"
        strokeWidth={1}
        strokeLinecap="round"
      />
      <Fighter body={a} color="var(--neutral-on-background-strong)" />
      <Fighter body={b} color="var(--brand-on-background-medium)" />
      {burst && burstAt && <Burst at={burstAt} age={burst.age} />}
    </svg>
  );
}
