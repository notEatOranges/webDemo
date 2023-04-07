/*
 * @Author: hly
 * @Description: 对象 - 接口
 * @Date: 2022-10-27 10:23:04
 * @LastEditTime: 2022-10-31 14:14:20
 * @FilePath: /Vue-demo/TS/3. 对象 - 接口 interface.ts
 */

// 在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型。

interface Person {
  name: string;
  age: number;
}

let tom: Person = {
  name: 'Tom',
  age: 25
};
// 我们定义了一个接口 Person，接着定义了一个变量 tom，它的类型是 Person。这样，我们就约束了 tom 的形状必须和接口 Person 一致。
// 定义的变量比接口少了一些属性是不允许的
// 多一些属性也是不允许的
// tom = {
//   name: 'Tom',
// }

// tom = {
//   name: 'Tom',
//   age: 26,
//   action: '你管我'
// }


// 可选属性
interface Person2 {
  name: string;
  age: number;
  action?: string
}

let jerry: Person2 = {
  name: 'jerry',
  age: 18,
}


// 任意属性
// 有时候我们希望一个接口允许有任意的属性，可以使用如下方式：

interface Person3 {
  name: string;
  age?: number;
  [propName: string]: any;
}

let tom2: Person3 = {
  name: 'Tom',
  gender: 'male',
  run: () => { }
};