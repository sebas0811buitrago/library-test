import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";

export default [
  {
    input: ["src/index.ts", "src/components/atoms/Button/index.ts"],

    output: [
      {
        dir: "build",
        format: "esm",
        sourcemap: true,
        preserveModules: true
      }
    ],
    // preserveModules: true,

    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss({
        inject: true,

        modules: true,
        // autoModules: true
        extensions: ["module.css"]
      }),
      postcss({
        inject: true,

        extensions: [".css"]
      })
    ],

    external: ["node_modules", "src"]
  }
];
