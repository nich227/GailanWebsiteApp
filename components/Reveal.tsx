"use client";

import { useEffect } from "react";

/**
 * Fades the hero in when the page opens and each section in as it comes into view.
 *
 * The hiding is done in CSS, keyed off a flag the layout sets before anything is
 * painted, so nothing is ever visible and then snatched away. Without JavaScript the
 * flag is never set, so the page is simply a page.
 *
 * This sweeps on scroll rather than watching for intersections. An observer looks
 * like the right tool until a jump straight down the page skips a section without
 * ever reporting it, and that section then sits invisible with nothing to bring it
 * back. Checking where things are is duller and always right.
 *
 * A machine asked for less movement gets none: the stylesheet leaves everything
 * visible under that query, and this still runs, which costs nothing and keeps the
 * two from disagreeing.
 */
export default function Reveal() {
  useEffect(() => {
    let pending = false;

    const sweep = () => {
      pending = false;
      const targets = document.querySelectorAll<HTMLElement>(
        ".reveal:not(.reveal-in)"
      );
      if (!targets.length) return;

      // a little short of the bottom, so a section is arriving rather than
      // appearing once it is already there
      const line = window.innerHeight * 0.92;
      targets.forEach((el) => {
        if (el.getBoundingClientRect().top < line) el.classList.add("reveal-in");
      });
    };

    const onScroll = () => {
      if (pending) return;
      pending = true;
      requestAnimationFrame(sweep);
    };

    // the hero is already where you are looking: a frame later, so the transition
    // has a state to move from
    requestAnimationFrame(sweep);

    window.addEventListener("scroll", onScroll, {passive: true});
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return null;
}
