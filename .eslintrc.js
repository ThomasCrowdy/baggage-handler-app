module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },

  plugins: ["@typescript-eslint", "react-hooks", "prettier", "html"],
  extends: [
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb",
    "prettier/react"
  ],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true
  },
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "arrow-body-style": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/prop-types": "off",
    "no-use-before-define": [0],
    "@typescript-eslint/no-use-before-define": [1],
    "no-param-reassign": ["off"],
    "no-nested-ternary": ["off"],
    camelcase: ["off"],
    "prettier/prettier": ["error", { printWidth: 120 }],
    "object-property-newline": ["off"],
    "no-else-return": ["off"],
    "import/prefer-default-export": ["off"],
    "jsx-a11y/href-no-hash": ["off"],
    "jsx-a11y/label-has-for": [
      2,
      {
        required: {
          some: ["nesting", "id"]
        }
      }
    ],
    "react/jsx-wrap-multilines": ["off"],
    "react/jsx-props-no-spreading": ["off"],
    "react/require-default-props": ["off"],
    "react/forbid-prop-types": ["off"],
    "react/jsx-filename-extension": ["warn", { extensions: [".js", ".jsx", ".ts", ".tsx"] }],
    "react/jsx-boolean-value": ["off"],
    "react/no-array-index-key": ["off"],
    "react/button-has-type": ["off"],
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "no-plusplus": ["off"],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never"
      }
    ]
  },
  overrides: [
    {
      files: ["*.ts"],
      rules: {
        "@typescript-eslint/explicit-module-boundary-types": ["error"]
      }
    }
  ],
  settings: {
    react: {
      pragma: "React",
      version: "detect"
    },
    "import/resolver": {
      webpack: {
        config: "webpack/webpack.base.js"
      }
    }
  }
};
