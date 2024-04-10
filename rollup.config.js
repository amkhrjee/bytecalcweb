import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";

export default {
  input: ["./js/animation.js", "./js/calculator.js", "./js/material.js"],
  output: {
    dir: "./public/js",
    format: "esm",
    sourcemap: false,
  },
  plugins: [terser(), resolve()],
  watch: {
    clearScreen: false,
  },
};
