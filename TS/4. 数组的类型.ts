/*
 * @Author: hly
 * @Description: 数组的类型
 * @Date: 2022-10-27 11:23:01
 * @LastEditTime: 2022-11-03 10:54:54
 * @FilePath: /Vue-demo/TS/4. 数组的类型.ts
 */

// 在 TypeScript 中，数组类型有多种定义方式，比较灵活。

// 1. 「类型 + 方括号」表示法
let fibonacci: number[] = [1, 1, 2, 3, 5];

// 2. 数组泛型
let arr: Array<number> = [1, 1, 2, 3, 5];

// 3. 用接口表示数组
interface NumberArray {
  [index: number]: number;
}
let numberArray: NumberArray = [1, 1, 2, 3, 5];

// 类数组
// 类数组（Array-like Object）不是数组类型，比如 arguments：

function sum() {
  let args: number[] = arguments;
}
// 类数组不是数据就不能使用数组来描述 使用接口
function sum2() {
  let args: {
      [index: number]: number;
      length: number;
      callee: Function;
  } = arguments;
}

// any 在数组中的应用§
// 一个比较常见的做法是，用 any 表示数组中允许出现任意类型：
let list: any[] = ['xcatliu', 25, { website: 'http://xcatliu.com' }];