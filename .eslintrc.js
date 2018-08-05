module.exports = {
  extends: ["airbnb", "prettier", "prettier/react", "eslint:recommended"],
  env: {
    browser: true,
    es6: true
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: "module"
  },
  plugins: [
    "react",
    "jsx-a11y",
    "import",
    "prettier", // using this, you don"t have to install plugins on the editor
  ],
  rules: {
    indent: [2, "tab", { SwitchCase: 1, VariableDeclarator: 1 }],
    "prettier/prettier": [1, {
      "trailingComma": "es5",
      "semi":true,
      "printWidth": 100,
      "useTabs": true,
    }],
    "comma-dangle": [2, "always-multiline"],
    "no-constant-condition": 1,
    "no-unused-vars": 1,
    "no-tabs": 0,
    "no-console": 0,
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/prop-types": 0,
    "react/jsx-indent": [2, "tab"],
    "react/jsx-indent-props": [2, "tab"],
    "react/destructuring-assignment": 0,
    "react/jsx-tag-spacing": [2, {
      "beforeSelfClosing": "always"
    }],
    "react/prefer-stateless-function": 1,
    "import/no-dynamic-require": 0,
    "react/jsx-no-bind": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/label-has-for": 0,
    "import/prefer-default-export": 1,
    "import/no-cycle": 1, // later check
    "jsx-a11y/no-noninteractive-tabindex": 1, // later (userbubble)
    "jsx-a11y/anchor-is-valid": 1, //when cards have links, should be disaled
    "padded-blocks": [2, "never"],
    "lines-between-class-members": [2, "always"],
    "no-debugger": 1,
  }
};
