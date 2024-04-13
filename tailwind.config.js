// const { nextui } = require("@nextui-org/react");
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Work Sans", "system-ui"],
        monospace: [
          "Fira Code",
          "Consolas",
          "Menlo",
          "Courier New",
          "DejaVu Sans",
        ],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
