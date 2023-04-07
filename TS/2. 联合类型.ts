/*
 * @Author: hly
 * @Description: 联合类型
 * @Date: 2022-10-27 09:26:00
 * @LastEditTime: 2022-10-27 09:28:51
 * @FilePath: /Vue-demo/TS/2. 联合类型.ts
 */

// 联合类型（Union Types）表示取值可以为多种类型中的一种。
// 联合类型使用 | 分隔每个类型。

// 简单的例子
let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
// 这里的 let myFavoriteNumber: string | number 的含义是，允许 myFavoriteNumber 的类型是 string 或者 number，但是不能是其他类型。

// 访问联合类型的属性或方法
// 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法：
function getLength(something: string | number): number {
  return something.length;
}
