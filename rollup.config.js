import resolve from "@rollup/plugin-node-resolve";
// import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";

// import { terser } from "rollup-plugin-terser";
const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        dir: "dist",
        format: "esm",
        sourcemap: true
      }
    ],
    preserveModules: true,
    plugins: [
      peerDepsExternal(),
      resolve(),
      // commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss({
        modules: true,
        extensions: ["module.css"]
      }),
      postcss({
        extensions: [".css"]
      })
    ],
    external: ["react", "react-dom"]
  },
  {
    input: "dist/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/]
  }
];
