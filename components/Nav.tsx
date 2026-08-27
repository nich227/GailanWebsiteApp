"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const REPO = "https://github.com/nich227/Gailan";
const HUB = "https://github.com/nich227/GailanHub";

const LINKS = [
  { href: "#what", label: "What it is" },
  { href: "#write", label: "Writing widgets" },
  { href: "#glass", label: "Glass" },
  { href: "#specs", label: "Specs" },
  { href: HUB, label: "Widgets" },
];

/**
 * The bar is always there. Over the hero it is flat and transparent, and once you
 * scroll past it collects into a pill with a background behind it, which keeps the
 * hero uncluttered without taking the navigation away.
 */
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // a link tap should close the menu, not leave it hanging over the section
  useEffect(() => {
    if (!menuOpen) return;

    const close = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".nav")) setMenuOpen(false);
    };
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("click", close);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("click", close);
      document.removeEventListener("keydown", onEscape);
    };
  }, [menuOpen]);

  return (
    <div className={`nav-wrap${scrolled ? " nav-scrolled" : ""}`}>
      <nav className="nav">
        <a className="wordmark" href="#top">
          <Image
            className="nav-icon"
            src="/gailan-icon.png"
            alt=""
            width={26}
            height={26}
            priority
          />
          GAILAN
        </a>

        <div className="nav-links">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="nav-right">
          <a className="pill" href={`${REPO}/releases`}>
            Download
          </a>

          <button
            className="nav-burger"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="nav-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {/* three rules that become a cross, which needs no icon font */}
            <span className={menuOpen ? "burger-bar burger-top-x" : "burger-bar"} />
            <span className={menuOpen ? "burger-bar burger-hidden" : "burger-bar"} />
            <span
              className={menuOpen ? "burger-bar burger-bottom-x" : "burger-bar"}
            />
          </button>
        </div>

        <div className="nav-menu" id="nav-menu" hidden={!menuOpen}>
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
}
