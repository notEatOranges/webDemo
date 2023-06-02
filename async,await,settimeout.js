/*
 * @Description:
 * @Date: 2023-03-22 11:19:18
 * @LastEditors: huangly
 * @LastEditTime: 2023-06-02 23:27:56
 * @FilePath: /vue-demo/async,await,settimeout.js
 */

async function test() {
  await new Promise((res, rej) => {
    setTimeout(() => {
      console.log("定时器里: ==>");
      res();
    }, 3000);
  });
  console.log("你好");
}
test();

function setTime() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("  定时器里: ==>");
      res();
    }, 3000);
  });
}

async function test() {
  await setTime();
  console.log("你好");
}
test();

function setTime2() {
  return setTimeout(async () => {
    console.log("定时器里: ==>");
  }, 3000);
}
