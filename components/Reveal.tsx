"use client";

import { useEffect } from "react";

/**
 * Fades the hero in when the page opens and each section in as it comes into view.
 *
 * The hiding is done in CSS, keyed off a flag the layout sets before anything is
 * painted, so nothing is ever visible and then snatched away. Without JavaScript the
 * flag is never set, so the page is simply a page.
 *
 * A machine asked for less movement gets none: the media query in the stylesheet
 * leaves everything visible, and this still runs, which costs nothing and keeps the
 * two from disagreeing.
 */
export default function Reveal() {
  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal")
    );
    if (!targets.length) return;

    const show = (el: HTMLElement) => el.classList.add("reveal-in");

    // the hero is already where you are looking
    const hero = targets.find((el) => el.classList.contains("hero"));
    if (hero) {
      // a frame later, so the transition has a state to move from
      requestAnimationFrame(() => show(hero));
    }

    const rest = targets.filter((el) => el !== hero);

    if (!("IntersectionObserver" in window)) {
      rest.forEach(show);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          show(entry.target as HTMLElement);
          // once it has arrived it stays: this is a welcome, not an effect
          observer.unobserve(entry.target);
        });
      },
      // a little before it reaches the bottom of the window, so it is already
      // arriving rather than appearing after the fact
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 }
    );

    rest.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
