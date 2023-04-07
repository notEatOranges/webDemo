/*
 * @Author: hly
 * @Description: 原始数据类型
 * @Date: 2022-10-26 18:16:07
 * @LastEditTime: 2022-11-17 09:34:33
 * @FilePath: /Vue-demo/TS/1. 原始数据类型.ts
 */

// 布尔值 boolean
// 最基础的数据类型，在 TypeScript 中，使用 boolean 定义布尔值类型：
let isDone: boolean = false;
// 编译通过
// 后面约定，未强调编译错误的代码片段，默认为编译通过

// ts语法有数据类型校验 给变量赋值不同类型的数据时会报错
// isDone = '90'


// 数值 number
let num: number = 6;


// 字符串 string 
let str: string = 'string'


// 空值
// JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的
// 函数：
function alertName(): void {
  alert('My name is Tom');
}


// Null 和 Undefined
// 在 TypeScript 中，可以使用 null 和 undefined 来定义这两个原始数据类型：
let u: undefined = undefined;
let n: null = null;
// 与 void 的区别是，undefined 和 null 是所有类型的子类型。非严格模式下 undefined 类型的变量，可以赋值给 number 类型的变量：

// 这样不会报错
let num3: number = null;
// 这样也不会报错
let u2: undefined;
let num4: number = u;
// 而 void 类型的变量不能赋值给 number 类型的变量：

let u3: void;
let num5: number = u3;
// Type 'void' is not assignable to type 'number'.


// 未声明类型的变量§
// 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：

let something;
something = 'seven';
something = 7;

something.setName('Tom');
// 等价于
let something2: any;
something2 = 'seven';
something2 = 7;
something2.setName('Tom');


// 类型推论 
// 如果没有明确的指定类型，那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型。
// 如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查：

/**
 *      参数                含义          默认都是true
 * noImplicitAny  不允许变量或者函数参数具有隐式any类型

  noImplicitThis  不允许this上下文隐式定义

  strictNullChecks  不允许出现null或者undefined的可能性

  strictPropertyInitialization  验证构造函数内部初始化前后已定义的属性

  strictFunctionTypes  对函数参数进行严格逆变比较
 */