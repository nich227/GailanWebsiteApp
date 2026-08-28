import Image from "next/image";

import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";

const REPO = "https://github.com/nich227/Gailan";
const HUB = "https://github.com/nich227/GailanHub";

/* Both marks are drawn rather than pulled from an icon font, so they inherit the
   button's color and need nothing loaded. */
function AppleMark() {
  return (
    <svg
      className="pill-mark"
      viewBox="0 0 384 512"
      width="13"
      height="13"
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-36.8-2.8-77 21.3-91.7 21.3-15.5 0-51.1-20.3-79.1-20.3C56.7 141.2 4 184.5 4 272.1c0 25.9 4.7 52.7 14.2 80.2 12.6 36.2 29.4 70.5 50.3 102.8 18 27.8 32.7 41.7 44.3 41.7 17.4 0 30.9-11.4 55.9-11.4 24.6 0 34.1 11.1 55.9 11.1 11.8 0 25.9-13.6 42.3-40.7 25-41.3 38.1-73.9 39.3-97.8-33.8-16-50.7-45.2-50.8-89.3zM260.8 87.4C277 67.7 285 46.6 285 24c0-3.1-.2-6.4-.7-9.8-15.2 .9-31.2 8.5-47.9 22.9-16.7 14.4-27.3 30.6-31.8 48.6 15.6 1.2 29.9-4.5 42.9-17.1 4.5-4.4 8.9-8.6 13.3-12.6z" />
    </svg>
  );
}

function GitHubMark() {
  return (
    <svg
      className="pill-mark"
      viewBox="0 0 16 16"
      width="14"
      height="14"
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.42 7.42 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A7.995 7.995 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}

const FEATURES = [
  {
    title: "Anything you want to see",
    body: "The weather, your calendar, how full the disk is, what the trains are doing. A widget is a small thing that shows you something, and you decide which ones you keep.",
  },
  {
    title: "On the desktop, out of the way",
    body: "Widgets sit on your wallpaper, behind whatever you are working in. They are there when you clear your screen and gone the moment you open something over them.",
  },
  {
    title: "Yours to arrange",
    body: "Move them where you like, choose which screens they appear on, and change what each one shows in its own settings. Turn one off without deleting it.",
  },
  {
    title: "It looks like part of the Mac",
    body: "Widgets can ask the system to frost the wallpaper behind them, and they follow light and dark as you switch, so they belong on the desktop rather than sitting on top of it.",
  },
  {
    title: "Ask it from anywhere",
    body: "Refresh a widget from the Shortcuts app, from Siri, or from a script, without going near the app itself.",
  },
  {
    title: "It stays on your machine",
    body: "Nothing signs in, nothing is uploaded, and nothing else on your network can reach it. What your widgets read stays where it was read.",
  },
];


function Code() {
  return (
    <div className="code">
      <div className="code-bar">
        <span>widgets/clock/index.tsx</span>
        <span>tsx</span>
      </div>
      <pre>
        <code>
          <span className="k">import</span>{" { styled } "}
          <span className="k">from</span> <span className="s">&quot;gailan&quot;</span>
          {"\n\n"}
          <span className="k">export const</span> command ={" "}
          <span className="s">&quot;date &apos;+%H:%M&apos;&quot;</span>
          {"\n"}
          <span className="k">export const</span> refreshFrequency = 10000
          {"\n\n"}
          <span className="k">const</span> Time = styled(
          <span className="s">&quot;div&quot;</span>)`{"\n"}
          {"  font-variant-numeric: tabular-nums;\n"}
          {"`"}
          {"\n\n"}
          <span className="k">export const</span> render = ({"{ output }"}) =&gt; (
          {"\n"}
          {"  <Time>{output.trim()}</Time>"}
          {"\n)"}
        </code>
      </pre>
    </div>
  );
}

// The desktop itself, taken with the template in GailanHub, so what the page shows is
// what the widgets in the hub actually look like on a Mac.
function Shot() {
  return (
    <figure className="shot">
      <img
        src="/desktop.jpg"
        width={1920}
        height={1200}
        alt="A Mac desktop with three Gailan widgets down the right: the time on a dot matrix, memory in use on a scale, and what is playing with its cover."
      />
    </figure>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <Reveal />

      <main className="page" id="top">
        <header className="hero reveal">
          <h1>
            Your desktop,
            <br />
            the way you want it.
          </h1>

          <p className="hero-sub">
            Gailan hosts widgets on your Mac&apos;s desktop. Infinitely
            customizable and open source.
          </p>

          <div className="hero-actions">
            <a className="pill" href={`${REPO}/releases`}>
              <AppleMark />
              Download for Mac
            </a>
            <a className="pill pill-ghost" href={REPO}>
              <GitHubMark />
              GitHub
            </a>
          </div>

          <div className="hero-meta">
            <span className="label">macOS 13.5+</span>
          </div>

          <Shot />
        </header>

        <section id="features" className="reveal">
          <div className="section-head">
            <span className="section-number dots">01</span>
            <div>
              <h2>Features</h2>
              <p className="section-lede">
                Gailan puts small, useful things on your wallpaper: the time, the
                weather, what your machine is doing, whatever you care to watch.
                They stay behind your windows until you want them, and you decide
                what appears and where.
              </p>
            </div>
          </div>

          <div className="features">
            {FEATURES.map((feature, index) => (
              <div className="feature" key={feature.title}>
                <span className="feature-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="develop" className="reveal">
          <div className="section-head">
            <span className="section-number dots">02</span>
            <div>
              <h2>Developing</h2>
              <p className="section-lede">
                If you want to make one, a widget is a single file in a folder. You
                write down what to run, how often, and what to show. Save the file
                and it is on your desktop.
              </p>
            </div>
          </div>

          <div className="split">
            <Code />
            <div>
              <h3 style={{ marginBottom: 12 }}>Three things to fill in</h3>
              <p style={{ marginBottom: 18 }}>
                A <strong>command</strong> is anything you could type into
                Terminal. Gailan runs it for you and hands you whatever it printed.
                The example asks the Mac for the time.
              </p>
              <p style={{ marginBottom: 18 }}>
                <strong>How often</strong> is a number in milliseconds. A clock
                wants every second; the weather is happy every ten minutes.
              </p>
              <p style={{ marginBottom: 18 }}>
                <strong>What to show</strong> is the shape of it, written the way a
                web page is written. If you have ever changed a page&apos;s colours
                or spacing, this is the same work.
              </p>
              <p>
                There is nothing to set up first and nothing to compile. Gailan
                watches the folder, and when you save, the widget on your desktop
                changes. If you get something wrong, it says what and points at the
                line.
              </p>
            </div>
          </div>
        </section>

        <section id="widgets" className="reveal">
          <div className="section-head">
            <span className="section-number dots">03</span>
            <div>
              <h2>Widget Hub</h2>
              <p className="section-lede">
                A gallery of widgets other people have made. Each one shows you
                what it looks like and says what it does, and downloading it gives
                you a folder to drop in. Nothing to sign up for, and you can read
                every one before you run it.
              </p>
            </div>
          </div>

          <div className="section-actions">
            <a className="pill" href="/hub">
              Browse widgets
            </a>
            <a className="pill pill-ghost" href={`${HUB}/blob/main/CONTRIBUTING.md`}>
              Share yours
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="page footer-inner">
          <div>
            <div className="wordmark" style={{ marginBottom: 12 }}>
              <Image
                className="nav-icon"
                src="/gailan-icon.png"
                alt=""
                width={26}
                height={26}
              />
              GAILAN
            </div>
            <p className="footer-note">
              Gailan is a fork of Übersicht by Felix Hageloh. © 2026 Kevin
              Chen, GPL-3.0-or-later.
            </p>
          </div>
          <div className="footer-links">
            <a className="label" href={REPO}>
              GitHub
            </a>
            <a className="label" href={`${REPO}/releases`}>
              Releases
            </a>
            <a className="label" href="/hub">
              Widgets
            </a>
            <a className="label" href="https://tracesof.net/uebersicht">
              Übersicht
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
