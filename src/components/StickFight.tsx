"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./StickFight.module.scss";

// Limb angles are absolute degrees: 0 points straight down, positive swings toward the opponent.
// Torso angle: 0 is upright, positive leans toward the opponent.
type Pose = {
  x: number; // lunge toward the opponent
  lift: number; // extra height, for lying poses
  torso: number;
  frontArm: [number, number];
  backArm: [number, number];
  frontLeg: [number, number];
  backLeg: [number, number];
  // Rubber-hose stretch: strikes overextend, landings squash
  armReach?: number; // front arm length multiplier
  legReach?: number; // front leg length multiplier
  stretch?: number; // torso length multiplier
};

type Who = "a" | "b";
type Point = [number, number];

const LEN = { torso: 26, head: 7, upperArm: 14, forearm: 13, thigh: 16, shin: 16 };
const GROUND = 100;
const GRAVITY = 900; // scene units / s²
const FRICTION = 500; // ground deceleration, scene units / s²
const DIR: Record<Who, 1 | -1> = { a: 1, b: -1 };

const POSES = {
  guard: { x: 0, lift: 0, torso: 8, frontArm: [35, 155], backArm: [15, 150], frontLeg: [22, 2], backLeg: [-18, -8] },
  bounce: { x: 0, lift: 0, torso: 10, frontArm: [38, 158], backArm: [18, 152], frontLeg: [28, -8], backLeg: [-12, -30] },
  windup: { x: -4, lift: 0, torso: -8, frontArm: [-35, 95], backArm: [30, 160], frontLeg: [35, -15], backLeg: [-30, -40], armReach: 0.8, stretch: 0.9 },
  // Same wind-up, but the arm whips a full turn on the way in
  windmill: { x: -4, lift: 0, torso: -8, frontArm: [-395, -265], backArm: [30, 160], frontLeg: [35, -15], backLeg: [-30, -40], armReach: 1.2, stretch: 0.9 },
  dash: { x: 0, lift: 0, torso: 32, frontArm: [-70, -40], backArm: [-55, -30], frontLeg: [60, -10], backLeg: [-55, -95], armReach: 0.85, stretch: 1.15 },
  punch: { x: 8, lift: 0, torso: 24, frontArm: [92, 90], backArm: [-30, 40], frontLeg: [40, 10], backLeg: [-35, -25], armReach: 1.45, stretch: 1.1 },
  uppercut: { x: 6, lift: 0, torso: 12, frontArm: [130, 160], backArm: [-40, 20], frontLeg: [15, 0], backLeg: [-30, -40], armReach: 1.15, stretch: 1.1 },
  crouch: { x: 0, lift: 0, torso: 25, frontArm: [-60, -40], backArm: [-50, -30], frontLeg: [80, -20], backLeg: [30, -60], stretch: 0.8 },
  tuck: { x: 0, lift: 0, torso: 35, frontArm: [70, 150], backArm: [50, 140], frontLeg: [125, 20], backLeg: [105, 0], stretch: 0.85 },
  flyKick: { x: 0, lift: 0, torso: -30, frontArm: [-70, -100], backArm: [120, 165], frontLeg: [58, 58], backLeg: [-10, 70], legReach: 1.35, stretch: 1.1 },
  axeUp: { x: 0, lift: 0, torso: -10, frontArm: [-100, -60], backArm: [90, 150], frontLeg: [175, 178], backLeg: [20, -60], legReach: 1.2, stretch: 1.1 },
  axeDown: { x: 0, lift: 0, torso: 25, frontArm: [-80, -40], backArm: [100, 130], frontLeg: [75, 72], backLeg: [0, -70], legReach: 1.45, stretch: 1.1 },
  land: { x: 0, lift: 0, torso: 30, frontArm: [100, 85], backArm: [-80, -60], frontLeg: [85, -30], backLeg: [20, -75], stretch: 0.75 },
  block: { x: -3, lift: 0, torso: -2, frontArm: [70, 172], backArm: [55, 168], frontLeg: [20, 4], backLeg: [-22, -10] },
  hit: { x: -6, lift: 0, torso: -18, frontArm: [70, 130], backArm: [-45, -10], frontLeg: [12, 0], backLeg: [-28, -12] },
  hitHead: { x: -6, lift: 0, torso: -35, frontArm: [110, 140], backArm: [-100, -120], frontLeg: [18, 0], backLeg: [-20, -5], stretch: 1.15 },
  tumble: { x: 0, lift: 0, torso: -40, frontArm: [-140, -170], backArm: [150, 120], frontLeg: [60, 95], backLeg: [30, 70], armReach: 1.25 },
  down: { x: 0, lift: 2, torso: -80, frontArm: [-150, -110], backArm: [-75, -60], frontLeg: [118, 55], backLeg: [88, 92] },
  kipPrep: { x: 0, lift: 2, torso: -80, frontArm: [-170, -150], backArm: [-165, -140], frontLeg: [160, 60], backLeg: [150, 50] },
  victory: { x: 4, lift: 0, torso: 0, frontArm: [160, 178], backArm: [20, 30], frontLeg: [15, 0], backLeg: [-15, 0], armReach: 1.3 },
} satisfies Record<string, Pose>;

type PoseName = keyof typeof POSES;
// "snap" arrives fast and settles (strikes), the default eases in and out (wind-ups, recoveries)
type PoseKey = [t: number, pose: PoseName, ease?: "snap"];

const SCENE_LOOP = 7.7;

const MOVES: Record<Who, PoseKey[]> = {
  a: [
    [0, "guard"], [0.3, "bounce"], [0.55, "guard"],
    // dash punch
    [0.75, "windup"], [0.86, "dash", "snap"], [0.98, "punch", "snap"], [1.2, "punch"], [1.45, "guard"],
    // block the flying kick
    [2.05, "guard"], [2.25, "block"], [2.35, "block"], [2.41, "hit", "snap"], [2.65, "guard"],
    // uppercut, chase into the air, axe kick, backflip off
    [3.1, "guard"], [3.2, "windup"], [3.3, "dash", "snap"], [3.45, "uppercut", "snap"], [3.51, "crouch"],
    [3.57, "tuck", "snap"], [3.75, "axeUp"], [3.87, "axeDown", "snap"], [3.97, "tuck", "snap"], [4.4, "tuck"],
    [4.49, "land", "snap"], [4.7, "guard"], [4.9, "victory"], [5.8, "victory"], [6.0, "guard"],
    // clash
    [6.3, "windmill"], [6.45, "dash", "snap"], [6.52, "punch", "snap"], [6.6, "hit", "snap"], [6.9, "guard"],
  ],
  b: [
    [0, "guard"], [0.3, "bounce"], [0.55, "guard"],
    [0.98, "guard"], [1.02, "hitHead", "snap"], [1.3, "hit"], [1.55, "guard"],
    // jump, flying kick, backflip away
    [1.7, "crouch"], [1.85, "tuck", "snap"], [2.15, "tuck"], [2.27, "flyKick", "snap"], [2.35, "flyKick"],
    [2.42, "tuck", "snap"], [2.9, "tuck"], [2.96, "land", "snap"], [3.15, "guard"],
    // launched, spiked, bounces, kips up
    [3.45, "guard"], [3.49, "hitHead", "snap"], [3.6, "tumble"], [3.95, "tumble"], [4.0, "down", "snap"],
    [5.1, "down"], [5.22, "kipPrep"], [5.3, "tuck", "snap"], [5.6, "guard"], [5.86, "land", "snap"], [6.05, "guard"],
    // clash
    [6.3, "windmill"], [6.45, "dash", "snap"], [6.52, "punch", "snap"], [6.6, "hit", "snap"], [6.9, "guard"],
  ],
};

// Velocities are in the fighter's frame: positive vx is toward the opponent, positive vy is up.
// Spin is in degrees, positive is a front flip; "settle" rotates back to upright by landing.
// Blink teleports to x in a single frame, keeping any momentum.
type RootEvent =
  | { t: number; glide: number; dur: number }
  | { t: number; blink: number }
  | { t: number; launch: [number, number]; spin?: number | "settle"; spinDur?: number; bounce?: number };

const ROOT: Record<Who, { home: number; events: RootEvent[] }> = {
  a: {
    home: 115,
    events: [
      { t: 0.55, glide: 88, dur: 0.2 },
      { t: 0.86, blink: 122 },
      { t: 1.45, glide: 115, dur: 0.35 },
      { t: 2.35, launch: [-110, 0] },
      { t: 2.75, glide: 115, dur: 0.3 },
      { t: 3.3, blink: 140 },
      { t: 3.57, launch: [40, 380], spin: 360, spinDur: 0.2 },
      { t: 3.74, blink: 168 },
      { t: 3.87, launch: [-45, 160], spin: -360, spinDur: 0.3 },
      { t: 4.75, glide: 115, dur: 0.45 },
      { t: 6.1, glide: 70, dur: 0.25 },
      { t: 6.45, blink: 90.5 },
      { t: 6.52, launch: [-120, 90] },
      { t: 6.95, glide: 115, dur: 0.5 },
    ],
  },
  b: {
    home: 185,
    events: [
      { t: 0.98, launch: [-110, 50] },
      { t: 1.5, glide: 190, dur: 0.3 },
      { t: 1.85, launch: [62, 315] },
      { t: 2.35, launch: [-60, 200], spin: -360, spinDur: 0.28 },
      { t: 3.0, glide: 185, dur: 0.2 },
      { t: 3.45, launch: [-40, 330], spin: -360, spinDur: 0.35 },
      { t: 3.87, launch: [-20, -400], spin: "settle", bounce: 0.35 },
      { t: 5.3, launch: [0, 260] },
      { t: 6.1, glide: 230, dur: 0.25 },
      { t: 6.45, blink: 209.5 },
      { t: 6.52, launch: [-120, 90] },
      { t: 6.95, glide: 185, dur: 0.5 },
    ],
  },
};

type Impact = { t: number; who: Who; limb: "hand" | "foot"; power: 1 | 2 | 3 };

const IMPACTS: Impact[] = [
  { t: 0.98, who: "a", limb: "hand", power: 1 },
  { t: 2.35, who: "b", limb: "foot", power: 2 },
  { t: 3.45, who: "a", limb: "hand", power: 2 },
  { t: 3.87, who: "a", limb: "foot", power: 3 },
  { t: 6.52, who: "a", limb: "hand", power: 2 },
];
const HIT_STOP = { 1: 0.06, 2: 0.1, 3: 0.2 };
// Slow motion windows in scene time, rate is scene seconds per real second
const SLOW_MO = [
  { from: 3.72, to: 3.87, rate: 0.3 },
  { from: 3.87, to: 4.02, rate: 0.25 },
];

// Piecewise map from real time to scene time: freezes for hit-stops, stretches for slow motion
type Segment = { real: number; scene: number; rate: number };
const SEGMENTS: Segment[] = [];
const IMPACT_REAL: number[] = [];
let REAL_LOOP = 0;
{
  const cuts = [...new Set([0, SCENE_LOOP, ...IMPACTS.map((i) => i.t), ...SLOW_MO.flatMap((w) => [w.from, w.to])])].sort(
    (p, q) => p - q,
  );
  for (const [i, t] of cuts.slice(0, -1).entries()) {
    for (const [index, impact] of IMPACTS.entries()) {
      if (impact.t !== t) continue;
      IMPACT_REAL[index] = REAL_LOOP;
      SEGMENTS.push({ real: REAL_LOOP, scene: t, rate: 0 });
      REAL_LOOP += HIT_STOP[impact.power];
    }
    const rate = SLOW_MO.find((w) => t >= w.from && t < w.to)?.rate ?? 1;
    SEGMENTS.push({ real: REAL_LOOP, scene: t, rate });
    REAL_LOOP += (cuts[i + 1] - t) / rate;
  }
}

const lerp = (p: number, q: number, k: number) => p + (q - p) * k;
const smooth = (k: number) => (k < 0.5 ? 2 * k * k : 1 - (-2 * k + 2) ** 2 / 2);
const snap = (k: number) => 1 - (1 - k) ** 4;
const whip = (k: number) => (k < 0.5 ? 8 * k ** 4 : 1 - (-2 * k + 2) ** 4 / 2);
const rad = (deg: number) => (deg * Math.PI) / 180;

// Physics: integrate each fighter's root (feet position, height, rotation) once at 240Hz
const STEP = 1 / 240;
type Landing = { t: number; x: number; speed: number };
type Blink = { t: number; from: number; to: number };
type Track = { x: Float32Array; y: Float32Array; rot: Float32Array; landings: Landing[]; blinks: Blink[] };

function simulate(who: Who): Track {
  const dir = DIR[who];
  const { home, events } = ROOT[who];
  const n = Math.ceil(SCENE_LOOP / STEP) + 1;
  const track: Track = { x: new Float32Array(n), y: new Float32Array(n), rot: new Float32Array(n), landings: [], blinks: [] };

  let x = home;
  let y = 0;
  let vx = 0;
  let vy = 0;
  let rot = 0;
  let spin: { from: number; to: number; start: number; dur: number } | null = null;
  let airborne = false;
  let bounce = 0;
  let glide: { from: number; to: number; start: number; dur: number } | null = null;
  let next = 0;

  for (let i = 0; i < n; i++) {
    const t = i * STEP;
    while (next < events.length && events[next].t <= t + 1e-9) {
      const event = events[next++];
      if ("glide" in event) {
        glide = { from: x, to: event.glide, start: event.t, dur: event.dur };
        vx = 0;
      } else if ("blink" in event) {
        track.blinks.push({ t, from: x, to: event.blink });
        x = event.blink;
        glide = null;
      } else {
        glide = null;
        vx = event.launch[0] * dir;
        vy = event.launch[1];
        airborne = true;
        bounce = event.bounce ?? 0;
        const flight = (vy + Math.sqrt(vy * vy + 2 * GRAVITY * y)) / GRAVITY;
        const dur = event.spinDur ?? flight;
        const target = event.spin === "settle" ? Math.round(rot / 360) * 360 : rot + (event.spin ?? 0);
        spin = { from: rot, to: target, start: event.t, dur };
      }
    }

    track.x[i] = x;
    track.y[i] = y;
    track.rot[i] = rot;

    if (glide) {
      const k = Math.min(1, (t + STEP - glide.start) / glide.dur);
      x = lerp(glide.from, glide.to, 1 - (1 - k) ** 3);
      if (k >= 1) glide = null;
    } else if (airborne) {
      vy -= GRAVITY * STEP;
      x += vx * STEP;
      y += vy * STEP;
      // Flips whip around fast in the middle and settle at the ends
      if (spin) rot = lerp(spin.from, spin.to, whip(Math.min(1, (t + STEP - spin.start) / spin.dur)));
      if (y <= 0) {
        y = 0;
        track.landings.push({ t: t + STEP, x, speed: -vy });
        rot = Math.round(rot / 360) * 360;
        spin = null;
        if (bounce && -vy > 120) {
          vy = -vy * bounce;
          vx *= 0.6;
        } else {
          airborne = false;
          vy = 0;
        }
      }
    } else if (vx) {
      const dv = FRICTION * STEP;
      x += vx * STEP;
      vx = Math.abs(vx) <= dv ? 0 : vx - Math.sign(vx) * dv;
    }
  }
  return track;
}

const TRACKS: Record<Who, Track> = { a: simulate("a"), b: simulate("b") };

function rootAt(who: Who, t: number) {
  const track = TRACKS[who];
  const f = Math.min(Math.max(t, 0) / STEP, track.x.length - 1);
  const i = Math.floor(f);
  const j = Math.min(i + 1, track.x.length - 1);
  const k = f - i;
  return { x: lerp(track.x[i], track.x[j], k), y: lerp(track.y[i], track.y[j], k), rot: lerp(track.rot[i], track.rot[j], k) };
}

function poseAt(who: Who, t: number): Pose {
  const keys = MOVES[who];
  let i = keys.length - 1;
  while (keys[i][0] > t) i--;
  const [t0, from] = keys[i];
  const [t1, to, ease] = keys[i + 1] ?? [SCENE_LOOP, keys[0][1], keys[0][2]];
  const k = (ease === "snap" ? snap : smooth)((t - t0) / (t1 - t0));
  const p: Pose = POSES[from];
  const q: Pose = POSES[to];
  const pair = (u: [number, number], v: [number, number]): [number, number] => [lerp(u[0], v[0], k), lerp(u[1], v[1], k)];
  return {
    x: lerp(p.x, q.x, k),
    lift: lerp(p.lift, q.lift, k),
    torso: lerp(p.torso, q.torso, k),
    frontArm: pair(p.frontArm, q.frontArm),
    backArm: pair(p.backArm, q.backArm),
    frontLeg: pair(p.frontLeg, q.frontLeg),
    backLeg: pair(p.backLeg, q.backLeg),
    armReach: lerp(p.armReach ?? 1, q.armReach ?? 1, k),
    legReach: lerp(p.legReach ?? 1, q.legReach ?? 1, k),
    stretch: lerp(p.stretch ?? 1, q.stretch ?? 1, k),
  };
}

type Body = {
  hip: Point;
  neck: Point;
  head: Point;
  frontArm: Point[];
  backArm: Point[];
  frontLeg: Point[];
  backLeg: Point[];
};

function figure(who: Who, t: number): Body {
  const dir = DIR[who];
  const pose = poseAt(who, t);
  const root = rootAt(who, t);

  const limb = (from: Point, [upper, lower]: [number, number], l1: number, l2: number, reach = 1): Point[] => {
    l1 *= reach;
    l2 *= reach;
    const mid: Point = [from[0] + Math.sin(rad(upper)) * l1 * dir, from[1] + Math.cos(rad(upper)) * l1];
    const end: Point = [mid[0] + Math.sin(rad(lower)) * l2 * dir, mid[1] + Math.cos(rad(lower)) * l2];
    return [from, mid, end];
  };
  const drop = ([upper, lower]: [number, number], reach = 1) =>
    (Math.cos(rad(upper)) * LEN.thigh + Math.cos(rad(lower)) * LEN.shin) * reach;

  // The lowest foot sits at the physics height
  const hipY = GROUND - Math.max(drop(pose.frontLeg, pose.legReach), drop(pose.backLeg), 0) - pose.lift - root.y;
  const torso = LEN.torso * (pose.stretch ?? 1);
  const hip: Point = [root.x + pose.x * dir, hipY];
  const lean = rad(pose.torso);
  const neck: Point = [hip[0] + Math.sin(lean) * torso * dir, hip[1] - Math.cos(lean) * torso];
  const head: Point = [
    neck[0] + Math.sin(lean) * (LEN.head + 2) * dir,
    neck[1] - Math.cos(lean) * (LEN.head + 2),
  ];
  const body: Body = {
    hip,
    neck,
    head,
    frontArm: limb(neck, pose.frontArm, LEN.upperArm, LEN.forearm, pose.armReach),
    backArm: limb(neck, pose.backArm, LEN.upperArm, LEN.forearm),
    frontLeg: limb(hip, pose.frontLeg, LEN.thigh, LEN.shin, pose.legReach),
    backLeg: limb(hip, pose.backLeg, LEN.thigh, LEN.shin),
  };

  if (!root.rot) return body;
  // Flip around the middle of the torso
  const angle = rad(root.rot * dir);
  const [cx, cy] = [(hip[0] + neck[0]) / 2, (hip[1] + neck[1]) / 2];
  const turn = ([px, py]: Point): Point => [
    cx + (px - cx) * Math.cos(angle) - (py - cy) * Math.sin(angle),
    cy + (px - cx) * Math.sin(angle) + (py - cy) * Math.cos(angle),
  ];
  return {
    hip: turn(body.hip),
    neck: turn(body.neck),
    head: turn(body.head),
    frontArm: body.frontArm.map(turn),
    backArm: body.backArm.map(turn),
    frontLeg: body.frontLeg.map(turn),
    backLeg: body.backLeg.map(turn),
  };
}

const IMPACT_POINTS = IMPACTS.map((impact) => {
  const body = figure(impact.who, impact.t);
  return (impact.limb === "hand" ? body.frontArm : body.frontLeg)[2];
});

function clock(real: number) {
  const r = real % REAL_LOOP;
  let segment = SEGMENTS[0];
  for (const s of SEGMENTS) if (s.real <= r) segment = s;
  const scene = segment.scene + (r - segment.real) * segment.rate;

  // Effects age in real time through the freeze, then at scene speed so they linger in slow motion
  let last: { index: number; age: number } | null = null;
  for (const [index, impact] of IMPACTS.entries()) {
    if (r < IMPACT_REAL[index]) break;
    last = { index, age: Math.min(r - IMPACT_REAL[index], HIT_STOP[impact.power]) + (scene - impact.t) };
  }
  return { scene, last };
}

// Deterministic jitter so effects look hand-drawn but identical every loop
const noise = (seed: number) => {
  const s = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
  return s - Math.floor(s);
};

const INK = "var(--neutral-on-background-strong)";
const ACCENT = "var(--brand-on-background-medium)";
const PAPER = "var(--page-background)";

function Fighter({ body, color, opacity = 1 }: { body: Body; color: string; opacity?: number }) {
  const path = (points: Point[]) => `M${points.map((p) => p.join(" ")).join("L")}`;
  return (
    <g stroke={color} fill="none" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" opacity={opacity}>
      <path d={path(body.backArm)} opacity={0.6} />
      <path d={path(body.backLeg)} opacity={0.6} />
      <path d={path([body.hip, body.neck])} />
      <path d={path(body.frontLeg)} />
      <path d={path(body.frontArm)} />
      <circle cx={body.head[0]} cy={body.head[1]} r={LEN.head} />
    </g>
  );
}

// Faint copies of where the body just was, only while it moves fast
function Trail({ who, t, color }: { who: Who; t: number; color: string }) {
  if (t < 0.06 || TRACKS[who].blinks.some((blink) => t >= blink.t && t < blink.t + 0.08)) return null;
  const now = figure(who, t);
  const before = figure(who, t - 0.06);
  const ends = (b: Body) => [b.hip, b.head, b.frontArm[2], b.frontLeg[2]];
  const speed = Math.max(...ends(now).map((p, i) => Math.hypot(p[0] - ends(before)[i][0], p[1] - ends(before)[i][1])));
  if (speed < 7) return null;
  const opacity = Math.min(0.35, (speed - 7) / 30);
  return (
    <>
      <Fighter body={before} color={color} opacity={opacity * 0.5} />
      <Fighter body={figure(who, t - 0.03)} color={color} opacity={opacity} />
    </>
  );
}

// Blink: afterimages left along the path, a crackle of streaks, and a color-split glitch on arrival
function Blinks({ who, t, color }: { who: Who; t: number; color: string }) {
  const life = 0.32;
  const blink = TRACKS[who].blinks.find((b) => t >= b.t && t < b.t + life);
  if (!blink) return null;
  const age = t - blink.t;
  const fade = 1 - age / life;
  const body = figure(who, blink.t);
  const shift = (b: Body, dx: number): Body => {
    const move = ([px, py]: Point): Point => [px + dx, py];
    return {
      hip: move(b.hip),
      neck: move(b.neck),
      head: move(b.head),
      frontArm: b.frontArm.map(move),
      backArm: b.backArm.map(move),
      frontLeg: b.frontLeg.map(move),
      backLeg: b.backLeg.map(move),
    };
  };
  const gap = blink.from - blink.to;
  const seed = blink.t * 100;
  const streak = (y: number, i: number) =>
    Array.from({ length: 7 }, (_, j) => {
      const k = j / 6;
      return `${blink.to + gap * k},${y + (j % 2 ? 1 : -1) * noise(seed + i * 7 + j) * 3}`;
    }).join(" ");
  const now = figure(who, t);
  const split = age < 0.1 ? 3 * (1 - age / 0.1) : 0;

  return (
    <g>
      {[0, 0.33, 0.66].map((k) => (
        <Fighter key={k} body={shift(body, gap * (1 - k))} color={color} opacity={fade * (0.12 + 0.3 * k)} />
      ))}
      <g fill="none" stroke={color} strokeWidth={1} strokeLinejoin="round" opacity={fade * 0.8}>
        {[body.head[1], body.neck[1] + 6, body.hip[1]].map((y, i) => (
          <polyline key={y} points={streak(y, i)} />
        ))}
      </g>
      {split > 0 && (
        <>
          <Fighter body={shift(now, split)} color={ACCENT} opacity={0.6} />
          <Fighter body={shift(now, -split)} color={INK} opacity={0.6} />
        </>
      )}
    </g>
  );
}

function Dust({ t }: { t: number }) {
  const life = 0.45;
  return (
    <g fill="none" stroke="var(--neutral-on-background-weak)" strokeWidth={1.2}>
      {(["a", "b"] as const).flatMap((who) =>
        TRACKS[who].landings
          .filter((landing) => landing.speed > 150 && t >= landing.t && t < landing.t + life)
          .flatMap((landing) => {
            const age = t - landing.t;
            const size = Math.min(landing.speed / 450, 1.5);
            return [-1, 1].flatMap((side) =>
              [0, 1, 2].map((j) => (
                <circle
                  key={`${who}-${landing.t}-${side}-${j}`}
                  cx={landing.x + side * (3 + age * (30 + j * 14) * size)}
                  cy={GROUND - 1 - age * (4 + j * 4) * size}
                  r={(1.2 + age * 7) * size * (1 - j * 0.2)}
                  opacity={0.7 * (1 - age / life)}
                />
              )),
            );
          }),
      )}
    </g>
  );
}

function HitEffects({ index, age, inverted }: { index: number; age: number; inverted: boolean }) {
  const { power } = IMPACTS[index];
  const [x, y] = IMPACT_POINTS[index];
  const stop = HIT_STOP[power];
  const lineLife = 0.4;
  const ringLife = 0.35;

  // Anime hit spark: a jagged star that pops during the freeze
  const sparkGrow = Math.min(age / 0.04, 1);
  const sparkR = (6 + 4 * power) * (0.5 + 0.7 * sparkGrow);
  const spark = Array.from({ length: 14 }, (_, i) => {
    const angle = (i / 14) * Math.PI * 2 + noise(index * 31 + i) * 0.3;
    const r = i % 2 ? sparkR * 0.38 : sparkR * (0.75 + noise(index * 17 + i) * 0.5);
    return `${x + Math.cos(angle) * r},${y + Math.sin(angle) * r}`;
  }).join(" ");

  return (
    <g strokeLinecap="round">
      {age < ringLife && (
        <circle
          cx={x}
          cy={y}
          r={4 + age * (60 + 30 * power)}
          fill="none"
          stroke={inverted ? PAPER : ACCENT}
          strokeWidth={0.4 + 2.5 * (1 - age / ringLife)}
          opacity={1 - age / ringLife}
        />
      )}
      {age < lineLife &&
        Array.from({ length: 18 }, (_, i) => {
          const angle = (i / 18) * Math.PI * 2 + noise(index * 13 + i) * 0.35;
          const r1 = 10 + age * 90 + noise(index * 7 + i) * 6;
          const r2 = r1 + (10 + noise(index * 3 + i) * 18) * power * (1 - age / lineLife);
          return (
            <line
              key={i}
              x1={x + Math.cos(angle) * r1}
              y1={y + Math.sin(angle) * r1}
              x2={x + Math.cos(angle) * r2}
              y2={y + Math.sin(angle) * r2}
              stroke={inverted ? PAPER : INK}
              strokeWidth={1.4}
              opacity={1 - age / lineLife}
            />
          );
        })}
      {age < stop + 0.08 && (
        <polygon
          points={spark}
          fill={inverted ? PAPER : INK}
          stroke={ACCENT}
          strokeWidth={1.5}
          strokeLinejoin="round"
          opacity={age < stop ? 1 : 1 - (age - stop) / 0.08}
        />
      )}
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

  const { scene, last } = clock(time);
  const a = figure("a", scene);
  const b = figure("b", scene);

  // Camera: shake and punch-in on the latest impact
  let camera = "";
  let inverted = false;
  if (last && last.age < 0.6) {
    const { power } = IMPACTS[last.index];
    const [px, py] = IMPACT_POINTS[last.index];
    const decay = Math.exp(-last.age * 9);
    const amp = [0, 1.2, 2.5, 4.5][power] * decay;
    const zoom = 1 + 0.05 * (power - 1) * Math.exp(-last.age * 12);
    camera = `translate(${amp * Math.sin(last.age * 90)} ${amp * 0.6 * Math.cos(last.age * 70)}) translate(${px} ${py}) scale(${zoom}) translate(${-px} ${-py})`;
    // Impact frame: the big hit flips the colors for a beat
    inverted = power === 3 && last.age < 0.12;
  }
  const [flashX, flashY] = last ? IMPACT_POINTS[last.index] : [0, 0];

  return (
    <svg ref={ref} className={styles.fight} viewBox="40 -40 230 150" role="img" aria-label="Two stick figures fighting">
      <defs>
        <radialGradient id="stick-fight-flash">
          <stop offset="0.55" stopColor="var(--neutral-on-background-strong)" />
          <stop offset="1" stopColor="var(--neutral-on-background-strong)" stopOpacity={0} />
        </radialGradient>
      </defs>
      <g transform={camera}>
        {inverted && <circle cx={flashX} cy={flashY} r={110} fill="url(#stick-fight-flash)" />}
        <line
          x1={50}
          x2={260}
          y1={GROUND + 1.5}
          y2={GROUND + 1.5}
          stroke={inverted ? PAPER : "var(--neutral-alpha-medium)"}
          strokeWidth={1}
          strokeLinecap="round"
        />
        <Dust t={scene} />
        <Blinks who="a" t={scene} color={INK} />
        <Blinks who="b" t={scene} color={ACCENT} />
        <Trail who="a" t={scene} color={INK} />
        <Trail who="b" t={scene} color={ACCENT} />
        <Fighter body={a} color={inverted ? PAPER : INK} />
        <Fighter body={b} color={inverted ? PAPER : ACCENT} />
        {last && last.age < 0.6 && <HitEffects index={last.index} age={last.age} inverted={inverted} />}
      </g>
    </svg>
  );
}
