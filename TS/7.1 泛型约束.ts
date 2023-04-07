/*
 * @Author: hly
 * @Description: 泛型约束
 * @Date: 2022-09-23 18:24:36
 * @LastEditTime: 2022-11-25 16:38:18
 * @FilePath: /Vue-demo/TS/7.1 泛型约束.ts
 */

// 1. 使用接口约束泛型
interface Person {
  name: string,
  age: number
}


// let student = function <T>(arg: T): T {
//   console.log('arg: ', arg.name);
//   return arg
// }

let student = function <T extends Person>(arg: T): T {
  console.log('arg: ', arg.name);
  return arg
}


// student({ name: 'lili' });//类型 "{ name: string; }" 中缺少属性 "age"，但类型 "Person" 中需要该属性
// student({ name: "lili", age: '11' });//不能将类型“string”分配给类型“number”
student({ name: "lili", age: 11, run: ()=> {} });


