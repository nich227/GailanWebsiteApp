"use client";

import { useEffect, useState } from "react";

const REPO = "nich227/GailanHub";
const BRANCH = "main";
const RAW = `https://raw.githubusercontent.com/${REPO}/${BRANCH}`;
const HUB = `https://github.com/${REPO}`;

type Widget = {
  name: string;
  title: string;
  description: string;
  author: string;
  license: string;
  version: string;
  tags: string[];
  path: string;
  screenshot: string;
  homepage: string | null;
  files: { path: string; bytes: number }[];
};

type Status = "loading" | "ready" | "failed";

/**
 * GailanHub is the only copy of these widgets. Nothing is mirrored here: the list
 * is read from the repository when the page opens, so a widget that landed an hour
 * ago is on this page without anything being rebuilt.
 *
 * GitHub cannot serve a single folder as an archive, only a whole repository, so
 * Download reads that widget's files and builds the zip in your browser. The index
 * lists them, so this costs no API request and no rate limit. JSZip is pulled in on
 * the first click rather than with the page.
 */
export default function Hub() {
  const [widgets, setWidgets] = useState<Widget[]>([]);
  const [status, setStatus] = useState<Status>("loading");
  const [busy, setBusy] = useState<string | null>(null);
  const [tag, setTag] = useState<string>("all");

  useEffect(() => {
    let alive = true;

    fetch(`${RAW}/index.json`, { cache: "no-store" })
      .then((response) => {
        if (!response.ok) throw new Error(String(response.status));
        return response.json();
      })
      .then((index) => {
        if (!alive) return;
        setWidgets(index.widgets || []);
        setStatus("ready");
      })
      .catch(() => alive && setStatus("failed"));

    return () => {
      alive = false;
    };
  }, []);

  async function download(widget: Widget) {
    setBusy(widget.name);
    try {
      const { default: JSZip } = await import("jszip");

      const zip = new JSZip();
      const folder = zip.folder(widget.name);

      await Promise.all(
        (widget.files || []).map(async (file) => {
          const response = await fetch(`${RAW}/${widget.path}/${file.path}`);
          if (!response.ok) throw new Error(file.path);
          folder?.file(file.path, await response.arrayBuffer());
        })
      );

      const blob = await zip.generateAsync({ type: "blob" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${widget.name}.zip`;
      link.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      // the browser could not reach GitHub, so send them where the files are
      window.open(`${HUB}/tree/${BRANCH}/${widget.path}`, "_blank");
    } finally {
      setBusy(null);
    }
  }

  const tags = ["all", ...new Set(widgets.flatMap((w) => w.tags || []))];
  const shown =
    tag === "all" ? widgets : widgets.filter((w) => (w.tags || []).includes(tag));

  return (
    <>
      <div className="section-head">
        <span className="section-number dots">HUB</span>
        <div>
          <h2>Widgets for Gailan</h2>
          <p className="section-lede">
            Every widget in{" "}
            <a className="link" href={HUB}>
              GailanHub
            </a>
            , read straight from the repository. Download one, unzip it into your
            widgets folder, and it appears on your desktop.
          </p>
        </div>
      </div>

      {status === "loading" && (
        <p className="label">Reading the hub…</p>
      )}

      {status === "failed" && (
        <div className="hub-empty">
          <h3>Could not reach the hub</h3>
          <p>
            GitHub did not answer. The widgets are all still at{" "}
            <a className="link" href={HUB}>
              github.com/{REPO}
            </a>
            .
          </p>
        </div>
      )}

      {status === "ready" && widgets.length === 0 && (
        <div className="hub-empty">
          <h3>No widgets yet</h3>
          <p>
            The first one can be yours:{" "}
            <a className="link" href={`${HUB}/blob/main/CONTRIBUTING.md`}>
              how to contribute
            </a>
            .
          </p>
        </div>
      )}

      {status === "ready" && widgets.length > 0 && (
        <>
          {tags.length > 2 && (
            <div className="hub-tags">
              {tags.map((name) => (
                <button
                  key={name}
                  type="button"
                  className={`hub-tag${tag === name ? " hub-tag-on" : ""}`}
                  onClick={() => setTag(name)}
                >
                  {name}
                </button>
              ))}
            </div>
          )}

          <div className="hub-grid">
            {shown.map((widget) => (
              <article className="hub-card" key={widget.name}>
                <div className="hub-shot">
                  {/* straight from the repository, not copied here */}
                  <img
                    src={`${RAW}/${widget.screenshot}`}
                    alt={`${widget.title} on a desktop`}
                    loading="lazy"
                  />
                </div>

                <div className="hub-body">
                  <h3>{widget.title}</h3>
                  <p>{widget.description}</p>

                  <div className="hub-meta">
                    <span className="label">{widget.author}</span>
                    <span className="label">{widget.license}</span>
                    <span className="label">v{widget.version}</span>
                  </div>

                  <div className="hub-actions">
                    <button
                      type="button"
                      className="pill"
                      onClick={() => download(widget)}
                      disabled={busy === widget.name}
                    >
                      {busy === widget.name ? "Zipping…" : "Download"}
                    </button>
                    <a
                      className="pill pill-ghost"
                      href={`${HUB}/tree/${BRANCH}/${widget.path}`}
                    >
                      Source
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </>
      )}

      <div className="hub-footnote">
        <p className="label">
          Widgets are their authors&apos; work, under the license each one names.
          They are given to you as they are, with no warranty: if one goes wrong,
          neither its author nor Gailan is liable for what follows.
        </p>
      </div>
    </>
  );
}
