import { rollup } from "rollup";
import resolve from "@rollup/plugin-node-resolve";

export default {
  input: ["./js/animation.js", "./js/calculator.js"],
  output: {
    dir: "./public/",
    format: "es",
    sourcemap: true,
  },
  plugins: [resolve()],
  watch: {
    clearScreen: false,
  },
};
