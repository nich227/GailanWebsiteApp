import Image from "next/image";

import Nav from "@/components/Nav";
import AppleMark from "@/components/AppleMark";
import Reveal from "@/components/Reveal";
import Version from "@/components/Version";

const REPO = "https://github.com/nich227/Gailan";
const HUB = "https://github.com/nich227/GailanHub";

/* Both marks are drawn rather than pulled from an icon font, so they inherit the
   button's color and need nothing loaded. */
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
    title: "Change nearly all of it",
    body: "A widget can offer its own settings, and Gailan turns them into real controls: a switch, a menu, a number, a color picker. Pick the clock's face, set how often something checks, choose the color it draws in, without opening a file. Move a widget where you want it, put it on one screen or all of them, turn it off without deleting it.",
  },
  {
    title: "Anything you want to see",
    body: "The weather, your calendar, how full the disk is, what the trains are doing. A widget is a small thing that shows you something, and you decide which ones you keep. If nothing does quite what you want, the ones you have are files you can change.",
  },
  {
    title: "Behind your windows, or in front",
    body: "By default widgets sit on the wallpaper, waiting for you to clear your screen. If you would rather one stayed in front of everything, there is a switch for that. You pick which screens each widget appears on, so the one you want in the corner of the big monitor stays there.",
  },

  {
    title: "It fits right into your Mac",
    body: "Widgets can ask the system to frost the wallpaper behind them, and they follow light and dark as you switch, so they belong on the desktop rather than sitting on top of it.",
  },
  {
    title: "It answers to Shortcuts",
    body: "Gailan hands its actions to the Shortcuts app. Refresh one widget or all of them, reload one, show or hide one, send it behind your windows or in front, choose its screens, change one of its own settings, open its file, keep every widget in front, or draw them light or dark. Put those in a shortcut with anything else your Mac can do. Fetch the forecast and refresh the weather widget so it is current before you look at it. Hide the music widget and show the calendar when you sit down to work, then swap them back at six. Switch the clock to its analog face for the evening. Ask Siri to refresh your widgets, or drive the same things from Automator and AppleScript if that is more your speed.",
  },
  {
    title: "As private or as connected as you want",
    body: "Gailan asks you for nothing: no account, no sign-in, and nothing leaves your Mac of its own accord. Past that it is your call. Plenty of widgets only ever read what is already here, the time, the battery, how full the disk is. One you write can reach anything you hand it the keys to, so a widget that signs in to your broker and shows what your portfolio did today is a widget you can have, as long as they publish an API for it. Either way the keys sit in your keychain and the request goes straight out from your machine.",
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

const CLOCK_FILES: [string, string, string][] = [
  ["index.tsx", "13 KB", "The widget itself: what to run, and what to draw with it"],
  ["widget.json", "1 KB", "Its name, its version, and the settings it offers you"],
  ["README.md", "1 KB", "What it does, for anyone who opens the folder"],
  ["preview.jpg", "123 KB", "The picture GailanHub shows in its gallery"],
  ["settings.json", "1 KB", "Written by Gailan when you change one of its settings"],
];

/* Drawn rather than photographed: it stays sharp at any size, follows light and dark,
   and a screen reader can read it out. The right column is the annotation. */
function FinderWindow() {
  return (
    <figure className="finder" aria-label="The clock widget's folder, file by file">
      <div className="finder-bar">
        <span className="finder-light" />
        <span className="finder-light" />
        <span className="finder-light" />
        <span className="finder-title">clock</span>
      </div>

      <div className="finder-head">
        <span>Name</span>
        <span>Size</span>
        <span>What it is</span>
      </div>

      <ul className="finder-list">
        {CLOCK_FILES.map(([name, size, note]) => (
          <li className="finder-row" key={name}>
            <span className="finder-name">
              <svg
                className="finder-doc"
                viewBox="0 0 12 14"
                aria-hidden="true"
                fill="none"
              >
                <path
                  d="M1 .5h6.5L11 4v9.5H1z"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <path d="M7.5.5V4H11" stroke="currentColor" strokeWidth="1" />
              </svg>
              {name}
            </span>
            <span className="finder-size">{size}</span>
            <span className="finder-note">{note}</span>
          </li>
        ))}
      </ul>
    </figure>
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
        alt="A Mac desktop with three Gailan widgets down the right, in their light style: the time on a dot matrix, memory in use on a scale, and what is playing with its cover and a progress bar."
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
            <Version />
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
                Then it gets out of the way of how you want them. What appears,
                where it sits, what it shows, how big it is, which screen it appears
                on, all of it is yours to change, and every widget is a file you
                can open and rewrite.
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
                A widget is a folder. One file in it does the work, and the rest are
                there to describe it: what it is called, what it can be told to
                change, what it looks like. You write down what to run, how often,
                and what to show. Save the file and it is on your desktop.
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
                web page is written. If you have ever changed a page&apos;s colors
                or spacing, this is the same work.
              </p>
              <p>
                You set nothing up and compile nothing. Gailan
                watches the folder, and when you save, the widget on your desktop
                changes. If you get something wrong, it says what and points at the
                line.
              </p>
            </div>
          </div>

          <h3 className="finder-caption">Anatomy of a widget</h3>
          <p className="finder-lede">
            This is the clock from the hub. Only the first file is the widget; the
            others say what it is called, what you are allowed to change, and what it
            looks like. A widget of your own needs no more than that first file.
          </p>
          <FinderWindow />
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
