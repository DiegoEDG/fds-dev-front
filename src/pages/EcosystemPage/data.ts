import engine from "../../assets/ecosystem/⛭.png";
import stream from "../../assets/ecosystem/🛰️.png";
import lab from "../../assets/ecosystem/🔬.png";
import bluePrint from "../../assets/ecosystem/📜.png";
import codex from "../../assets/ecosystem/📒.png";
import elements from "../../assets/ecosystem/🧩.png";
import skyline from "../../assets/ecosystem/🛸.png";
import sparks from "../../assets/ecosystem/⚡️.png";

export const data = [
  {
    name: "Fuel Engine",
    icon: engine,
    description:
      "The core NPM package powering all Fuel layers. Provides utilities, tokens, and shared logic.",
    objective:
      "Centralize configuration and ensure consistent behavior across applications.",
    technologies: ["javascript", "css", "tailwindcss", "npm", "typescript"],
    status: "In Progress",
  },
  {
    name: "Fuel Stream",
    icon: stream,
    description: "Global CDN serving design tokens, assets, and resources.",
    objective: "Deliver resources worldwide with minimal latency.",
    technologies: ["vercel", "gcp", "git", "tailwindcss", "javascript", "css"],
    status: "In Progress",
  },
  {
    name: "Fuel Lab",
    icon: lab,
    description: "Sandbox environment for testing and previewing components.",
    objective:
      "Enable experimentation and visual validation before production merges.",
    technologies: ["tailwindcss", "javascript", "html", "css", "stenciljs"],
    status: "In Progress",
  },
  {
    name: "Fuel Blueprint",
    icon: bluePrint,
    description: "The official documentation platform for Fuel Design System.",
    objective:
      "Provide clear guides for designers, developers, and contributors.",
    technologies: ["Confluence", "Markdown", "Figma"],
    status: "In Progress",
  },
  {
    name: "Fuel Codex",
    icon: codex,
    description:
      "Internal knowledge base and pattern library for deep technical guidance.",
    objective:
      "Act as a long-term source of truth for architecture and standards.",
    technologies: [
      "React",
      "MDX",
      "Vercel",
      "Markdown",
      "tailwindcss",
      "Typescript",
      "html",
      "css",
    ],
    status: "Production",
  },
  {
    name: "Fuel Elements",
    icon: elements,
    description:
      "Collection of reusable, framework-agnostic UI components built with Stencil.",
    objective: "Ensure consistent design across frameworks and apps.",
    technologies: [
      "Stencil",
      "Javascript",
      "TailwindCSS",
      "Fuel Stream",
      "Fuel Engine",
    ],
    status: "Frozen",
  },
  {
    name: "Fuel Skyline",
    icon: skyline,
    description: "Cloud infrastructure for deployment and CI/CD.",
    objective: "Guarantee reliability, scalability, and global access.",
    technologies: ["Vercel", "GCP", "Docker", "GitHub Actions", "Yml"],
    status: "Production",
  },
  {
    name: "Fuel Sparks",
    icon: sparks,
    description:
      "Set of VSCode/Windsurf snippets and shortcuts for faster development.",
    objective: "Boost productivity and maintain code consistency.",
    technologies: ["VSCode", "Windsurf", "Custom CLI", "Yml", "Cloudfront"],
    status: "In Progress",
  },
];
