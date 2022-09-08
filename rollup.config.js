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
      "src/**/index.ts",
      "src/**/**/index.ts",
      "src/**/**/**/index.ts"
    ],

    output: [
      {
        dir: "build",
        format: "esm",
        sourcemap: true,
        preserveModules: true
      }
    ],
    plugins: [
      multi(),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss({
        // inject: true,

        // modules: true,
        autoModules: true
        // extensions: ["module.css"]
      })
      // postcss({
      //   inject: true,

      //   extensions: [".css"]
      // })
    ],

    external: ["react", "react-dom"]
  }
];
