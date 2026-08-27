"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const REPO = "https://github.com/nich227/Gailan";
const HUB = "https://github.com/nich227/GailanHub";

/**
 * The bar stays out of the way until you have started reading, then slides in,
 * which is how the wedding site handles it. The hero is centered and needs the
 * space more than the navigation does.
 */
export default function Nav() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    // roughly one screen: far enough that the hero has been read
    const threshold = () => Math.min(window.innerHeight * 0.6, 520);

    const onScroll = () => setShown(window.scrollY > threshold());
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className={`nav-wrap${shown ? " nav-shown" : ""}`} aria-hidden={!shown}>
      <nav className="nav">
        <a className="wordmark" href="#top">
          GAILAN
        </a>

        <div className="nav-links">
          <a href="#what">What it is</a>
          <a href="#write">Writing widgets</a>
          <a href="#glass">Glass</a>
          <a href="#specs">Specs</a>
          <a href={HUB}>Widgets</a>
        </div>

        <div className="nav-right">
          <Image
            className="nav-icon"
            src="/gailan-icon.png"
            alt="Gailan"
            width={28}
            height={28}
            priority
          />
          <a className="pill" href={`${REPO}/releases`}>
            Download
          </a>
        </div>
      </nav>
    </div>
  );
}
