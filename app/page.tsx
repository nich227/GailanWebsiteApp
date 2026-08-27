import Nav from "@/components/Nav";

const REPO = "https://github.com/nich227/Gailan";
const HUB = "https://github.com/nich227/GailanHub";

const FEATURES = [
  {
    title: "Widgets are TypeScript",
    body: "A widget is a module exporting a command, a refresh interval and a render. Types are stripped when it bundles, so annotate as much or as little as suits you.",
  },
  {
    title: "esbuild, not Babel",
    body: "Save a file and it rebuilds in single-digit milliseconds, then pushes over a socket. No dev server to start, no watcher to configure.",
  },
  {
    title: "Glass drawn by macOS",
    body: "A widget marks a rectangle and the system frosts your wallpaper behind it. Real Liquid Glass on macOS 26, a vibrancy material before that.",
  },
  {
    title: "Shortcuts and AppleScript",
    body: "Refresh a widget, reload one, hide it, choose its screens. From the Shortcuts app with a widget picker, from a script, or from Siri.",
  },
  {
    title: "Locked to your machine",
    body: "The server binds to localhost, checks the origin, and takes a per-launch token handed over on stdin. Nothing else on your network can reach it.",
  },
  {
    title: "Übersicht widgets still run",
    body: "The classic object-literal API is intact, and importing uebersicht still resolves. Rename the file to .js and it works.",
  },
];

const SPECS: [string, string][] = [
  ["Requires", "macOS 13.5 or later, Apple silicon or Intel"],
  ["Widget languages", ".tsx  .jsx  .ts  .js"],
  ["Bundler", "esbuild 0.25, shipped inside the app"],
  ["Runtime", "Node 24 LTS, bundled; nothing to install"],
  ["Styling", "Emotion 11, css and styled"],
  ["Automation", "App Intents and AppleScript"],
  ["Updates", "Sparkle, signed with EdDSA"],
  ["License", "GPL-3.0-or-later"],
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
          <span className="c">{"// the desktop is frosted behind this one"}</span>
          {"\n"}
          <span className="k">export const</span> render = ({"{ output }"}) =&gt; (
          {"\n"}
          {"  <Time data-gailan-desktop-glass={12}>"}
          {"\n"}
          {"    {output.trim()}"}
          {"\n"}
          {"  </Time>"}
          {"\n)"}
        </code>
      </pre>
    </div>
  );
}

function Mock() {
  return (
    <div className="mock" aria-hidden="true">
      <div className="mock-bar">
        <span className="mock-light" />
        <span className="mock-light" />
        <span className="mock-light" />
      </div>
      <div className="mock-body">
        <div className="mock-widget">
          <div className="mock-widget-big">14:32</div>
          <div className="mock-widget-line">Thu 27 Aug</div>
          <div className="mock-widget-line">day 239 of 365</div>
        </div>
        <div className="mock-widget">
          <div className="mock-widget-big">62%</div>
          <div className="mock-widget-line">memory in use</div>
        </div>
        <div className="mock-widget" style={{ minWidth: 190 }}>
          <div className="mock-widget-line">now playing</div>
          <div style={{ fontSize: 13, marginTop: 6 }}>A Love Supreme</div>
          <div className="mock-widget-line">John Coltrane</div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Nav />

      <main className="page" id="top">
        <header className="hero">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            <span className="label label-ink">A fork of Übersicht, rebuilt</span>
          </span>

          <h1>
            Your desktop,
            <br />
            under version control.
          </h1>

          <p className="hero-sub">
            Gailan runs widgets on your macOS desktop. They are TypeScript files
            in a folder: save one and it is on screen before you have switched
            windows.
          </p>

          <div className="hero-actions">
            <a className="pill" href={`${REPO}/releases`}>
              Download for Mac
            </a>
            <a className="pill pill-ghost" href={REPO}>
              Source
            </a>
          </div>

          <div className="hero-meta">
            <span className="label">macOS 13.5+</span>
            <span className="label">GPL-3.0</span>
            <span className="label">No account</span>
          </div>

          <Mock />
        </header>

        <section id="what">
          <div className="section-head">
            <span className="section-number dots">01</span>
            <div>
              <h2>A folder of files, on your wallpaper</h2>
              <p className="section-lede">
                There is no widget store and no editor to learn. Gailan watches a
                directory, compiles what it finds, and draws it behind your
                windows. Delete the file and the widget is gone.
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

        <section id="write">
          <div className="section-head">
            <span className="section-number dots">02</span>
            <div>
              <h2>Three exports and you are done</h2>
              <p className="section-lede">
                A command to run, how often to run it, and what to draw with the
                output. Everything else is optional.
              </p>
            </div>
          </div>

          <div className="split">
            <Code />
            <div>
              <h3 style={{ marginBottom: 12 }}>What you get for free</h3>
              <p style={{ marginBottom: 18 }}>
                Emotion&apos;s <code>css</code> and <code>styled</code> are
                exported from the <code>gailan</code> module, and generated class
                names carry the component they came from, so the inspector reads{" "}
                <code>css-1a2b3c-Time</code> rather than a hash on its own.
              </p>
              <p style={{ marginBottom: 18 }}>
                Widgets see the system appearance through{" "}
                <code>prefers-color-scheme</code> and an attribute on the
                document, so light and dark are a media query rather than a
                setting to read.
              </p>
              <p>
                When a widget fails, the error appears where the widget was, with
                the line from your source and the column marked. The stack is
                mapped back through the bundle, so it points at the file you
                wrote.
              </p>
            </div>
          </div>
        </section>

        <section id="glass">
          <div className="section-head">
            <span className="section-number dots">03</span>
            <div>
              <h2>Glass the system draws</h2>
              <p className="section-lede">
                A page cannot see what is behind its own window, which is why
                CSS has never been able to frost a wallpaper. So the widget marks
                a rectangle and the app asks macOS to put its material there.
              </p>
            </div>
          </div>

          <div className="split">
            <div>
              <h3 style={{ marginBottom: 12 }}>One attribute</h3>
              <p style={{ marginBottom: 18 }}>
                Add <code>data-gailan-desktop-glass</code> to an element with the
                radius you want. Give it an <code>id</code> and the same pane of
                glass follows it as the widget re-renders.
              </p>
              <p>
                On macOS 26 this is Liquid Glass, with a style and a tint in
                Preferences. Before that it is the closest vibrancy material.
                Keep your own background thin or it covers the glass it asked
                for.
              </p>
            </div>
            <div className="spec">
              <div className="spec-row">
                <div className="spec-key label label-ink">Frost</div>
                <div className="spec-value">On by default</div>
              </div>
              <div className="spec-row">
                <div className="spec-key label label-ink">Style</div>
                <div className="spec-value">Regular / Clear</div>
              </div>
              <div className="spec-row">
                <div className="spec-key label label-ink">Tint</div>
                <div className="spec-value">Any color, or none</div>
              </div>
              <div className="spec-row">
                <div className="spec-key label label-ink">Drawn by</div>
                <div className="spec-value">NSGlassEffectView</div>
              </div>
            </div>
          </div>
        </section>

        <section id="specs">
          <div className="section-head">
            <span className="section-number dots">04</span>
            <div>
              <h2>Specifications</h2>
            </div>
          </div>

          <div className="spec">
            {SPECS.map(([key, value]) => (
              <div className="spec-row" key={key}>
                <div className="spec-key label label-ink">{key}</div>
                <div className="spec-value">{value}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="widgets">
          <div className="section-head">
            <span className="section-number dots">05</span>
            <div>
              <h2>Widgets, by pull request</h2>
              <p className="section-lede">
                GailanHub is one repository of widgets. Every one is a folder with
                a manifest, a readme saying what it runs, and a screenshot. Adding
                yours means opening a pull request; CI compiles it before anyone
                looks.
              </p>
            </div>
          </div>

          <div className="hero-actions" style={{ justifyContent: "flex-start" }}>
            <a className="pill" href={HUB}>
              Browse widgets
            </a>
            <a className="pill pill-ghost" href={`${HUB}/blob/main/CONTRIBUTING.md`}>
              Contribute one
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="page footer-inner">
          <div>
            <div className="wordmark" style={{ marginBottom: 12 }}>
              <span className="wordmark-dot" />
              GAILAN
            </div>
            <p className="footer-note">
              Gailan is a fork of Übersicht by Felix Hageloh, whose work the
              widget system is. © 2026 Kevin Chen, GPL-3.0-or-later.
            </p>
          </div>
          <div className="footer-links">
            <a className="label" href={REPO}>
              GitHub
            </a>
            <a className="label" href={`${REPO}/releases`}>
              Releases
            </a>
            <a className="label" href={HUB}>
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
