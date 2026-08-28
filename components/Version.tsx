"use client";

import { useEffect, useState } from "react";

/**
 * The latest release, asked of GitHub when the page opens rather than baked in at
 * build time, so it is right without anyone redeploying this site.
 *
 * "none" is the honest answer until there is one, and it is also what a failed or
 * rate-limited request leaves behind: GitHub allows sixty unauthenticated calls an
 * hour per address, and a version that quietly stops updating is better than a
 * number that might be wrong.
 *
 * The starting value is the same on the server and in the browser, so there is
 * nothing to reconcile when this hydrates.
 */
export default function Version() {
  const [version, setVersion] = useState("none");

  useEffect(() => {
    let alive = true;

    fetch("https://api.github.com/repos/nich227/Gailan/releases/latest", {
      headers: {accept: "application/vnd.github+json"},
    })
      .then((response) => {
        // 404 is what GitHub says when a repository has no releases at all
        if (!response.ok) throw new Error(String(response.status));
        return response.json();
      })
      .then((release) => {
        const tag = String(release.tag_name || "").replace(/^v/, "");
        if (alive && tag) setVersion(tag);
      })
      .catch(() => {
        /* none, then */
      });

    return () => {
      alive = false;
    };
  }, []);

  return <span className="label">Latest: {version}</span>;
}
