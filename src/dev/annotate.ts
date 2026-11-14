// Annotation toolbar (Agentation), loaded by the dev-only integration in
// astro.config.mjs. Nothing in src/ imports this file, so it never reaches a build.
// React is mounted by hand, so the Astro React integration isn't needed.
import { createElement } from "react";
import { createRoot } from "react-dom/client";
import { Agentation } from "agentation";

const host = document.createElement("div");
document.body.append(host);
createRoot(host).render(createElement(Agentation, { appName: "Love&Hate AI" }));
