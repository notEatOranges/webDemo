/*
 * @Author: hly
 * @Description: 
 * @Date: 2023-02-10 10:54:55
 * @LastEditTime: 2023-02-10 11:27:49
 * @FilePath: /vue2/.eslintrc.js
 */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },
  // rules: {
  //   "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
  //   "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  // },
  rules: {
    "no-var": 2,
    "no-async-promise-executor":2
  }
};
