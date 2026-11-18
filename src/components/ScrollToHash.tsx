"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function ScrollToHash() {
  const router = useRouter();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    // Ids made from titles can contain spaces, which arrive percent-encoded in the hash
    const element = document.getElementById(decodeURIComponent(hash.slice(1)));
    if (!element) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    element.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
  }, [router]);

  return null;
}
