"use client";

import { useEffect, useRef } from "react";

/**
 * Apple's own glyph, U+F8FF, with the six stripes on hover.
 *
 * A gradient clipped to text is positioned against the line box, and the apple fills
 * only part of that box, so bands spread over the whole of it put green above the
 * glyph and blue below it. Those metrics belong to whichever font drew it, so this
 * asks the browser where the ink actually is and hands the answer to the stylesheet.
 *
 * `measureText` reports the ink either side of the baseline and the font's own ascent,
 * which is enough to say where the apple starts and how tall it is. If any of that is
 * unavailable the stylesheet keeps its fallback and the stripes cover the whole box,
 * which is what it did before and is no worse.
 */
export default function AppleMark() {
  const glyph = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = glyph.current;
    if (!el) return;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const style = getComputedStyle(el);
    const size = parseFloat(style.fontSize) || 16;
    ctx.font = `${size}px ${style.fontFamily}`;

    const metrics = ctx.measureText("\uF8FF");
    const inkAscent = metrics.actualBoundingBoxAscent;
    const inkDescent = metrics.actualBoundingBoxDescent;
    const fontAscent = metrics.fontBoundingBoxAscent;

    if (
      !Number.isFinite(inkAscent) ||
      !Number.isFinite(inkDescent) ||
      !Number.isFinite(fontAscent)
    ) {
      return;
    }

    const height = inkAscent + inkDescent;
    // a glyph that measured as nothing is a glyph this system has not got
    if (height <= 0) return;

    // where the ink begins inside a line box the height of one em, and how tall it is
    el.style.setProperty("--ink-top", `${((fontAscent - inkAscent) / size).toFixed(4)}em`);
    el.style.setProperty("--ink-height", `${(height / size).toFixed(4)}em`);
  }, []);

  return (
    <span className="pill-mark pill-mark-apple" ref={glyph} aria-hidden="true">
      {"\uF8FF"}
    </span>
  );
}
