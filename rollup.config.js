import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import multi from "@rollup/plugin-multi-entry";

export default [
  {
    input: [
      "src/index.ts",
      "src/components/atoms/Button/index.ts"
      // "src/**/**/index.ts",
      // "src/**/**/**/index.ts",
      // "src/**/**/**/**/index.ts"
    ],

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
      // multi({ entryFileName: "index.js" }),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss({
        autoModules: true
      })
    ],

    external: ["react", "react-dom", "node_modules"]
  }
];
