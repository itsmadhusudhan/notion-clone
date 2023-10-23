import type { Config } from "tailwindcss";

const config: Config = {
  presets: [require("notion-ui/tailwind.config.ts")],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/notion-ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};
export default config;
