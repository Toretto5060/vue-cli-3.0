module.exports = {
  root: true,
  env: {
    node: true
  },
  // extends: ["plugin:vue/essential", "@vue/prettier"],
  //关闭eslint验证
  extends: ["plugin:vue/essential"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
