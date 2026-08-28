import type { Metadata } from "next";

import Hub from "@/components/Hub";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Widget Hub: widgets for Gailan",
  description:
    "Every widget in GailanHub, read from the repository. Download one, unzip it into your widgets folder, and it appears on your desktop.",
};

export default function HubPage() {
  return (
    <>
      <Nav />
      <main className="page hub-page" id="top">
        <Hub />
      </main>

      <footer>
        <div className="page footer-inner">
          <p className="footer-note">
            Gailan is a fork of Übersicht by Felix Hageloh. © 2026 Kevin Chen,
            GPL-3.0-or-later.
          </p>
          <div className="footer-links">
            <a className="label" href="/">
              Home
            </a>
            <a className="label" href="https://github.com/nich227/Gailan">
              GitHub
            </a>
            <a className="label" href="https://github.com/nich227/GailanHub">
              Hub source
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
