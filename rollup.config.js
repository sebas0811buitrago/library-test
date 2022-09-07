import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";

export default [
  {
    input: "src/index.ts",

    output: [
      {
        file: "build/index.js",
        format: "esm",
        sourcemap: true
      }
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss({
        modules: true,
        extensions: ["module.css"]
      }),
      postcss({
        extensions: [".css"]
      })
    ]
  },

  {
    input: "build/index.d.ts",
    output: [{ file: "build/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/]
  }
];
