import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";
import url from "rollup-plugin-url";
import svgr from "@svgr/rollup";

import pkg from "./package.json";

const outputGlobals = {
  react: "React",
  "react-dom": "ReactDOM",
  "prop-types": "PropTypes",
  "styled-components": "styled",
};

const extensions = [".js", ".jsx", ".ts", ".tsx"];

const commonjsOptions = {
  include: "node_modules/**",
  // left-hand side can be an absolute path, a path
  // relative to the current directory, or the name
  // of a module in node_modules
  namedExports: {
    "node_modules/react/index.js": [
      "cloneElement",
      "createContext",
      "Component",
      "createElement",
    ],
    "node_modules/react-dom/index.js": ["render", "hydrate"],
    "node_modules/react-is/index.js": [
      "isElement",
      "isValidElementType",
      "ForwardRef",
      "Memo",
      "isFragment",
    ],
  },
};

export default {
  input: "src/index.js",
  external: ["react", "react-dom", "prop-types", "styled-components"],
  output: [
    {
      file: pkg.main,
      format: "umd",
      name: "neurondao",
      sourcemap: true,
      globals: outputGlobals,
    },
    {
      file: "./dist/index.esm.js",
      format: "es",
      name: "neurondao",
      sourcemap: true,
      globals: outputGlobals,
    },
  ],
  plugins: [
    external(),
    url(),
    svgr({
      ref: true,
      icon: true,
    }),
    babel({
      exclude: "node_modules/**",
    }),
    resolve({mainFields: ["module", "main", "jsnext:main", "browser"], extensions}),
    commonjs(commonjsOptions),
  ],
};
