import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";

export default [
  {
    input: ["src/index.ts", "src/components/atoms/Button/index.ts"],

    output: [
      {
        dir: "build",
        format: "esm",
        sourcemap: true,
        preserveModules: true,
        preserveModulesRoot: "src"
      }
    ],

    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss({
        autoModules: true
      })
    ]
  }
];
