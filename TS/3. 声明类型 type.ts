/*
 * @Author: hly
 * @Description: 声明类型 type
 * @Date: 2022-09-22 20:59:31
 * @LastEditTime: 2022-11-04 09:00:05
 * @FilePath: /Vue-demo/TS/3. 声明类型 type.ts
 */

// 在 TS 中，type 和 interface相似，都可以给类型命名并通过该名字来引用表示的类型。不过它们之间是存在一些差别的，我们在使用时也需要注意一些特殊场景。

// type
// type关键字是声明类型别名的关键字。它的语法如下：

type AliasName = number // Type;

// type：声明类型别名的关键字
// AliasName：类型别名的名称
// Type：类型别名关联的具体类型

/**
 * @descripttion: interface
 * 通过关键字 interface可以定义一个接口类型。它能合并众多类型声明至一个类型声明。
 * 接口声明只存在于编译阶段，在编译后生成的 JS 代码中不包含任何接口代码。
 * 语法如下：
 */

interface InterfaceName {
  TypeMember: number;
  TypeMember2: string;
}

/**
 * @descripttion: type interface 异同点
 * @return {*}
 */

// 不同点
// 1. type 在声明类型别名之后实际上是一个赋值操作，它需要将别名与类型关联起来。也就是说类型别名不会创建出一种新的类型，它只是给已有类型命名并直接进行引用。interface是定义了一个接口类型。
// 2. type 能够表示非对象类型， 而 interface 则只能表示对象类型。
// 3. interface可以继承其他的接口、类等对象类型， type 不支持继承。 (对于类型别名来说，它可以借助交叉类型来实现继承的效果。而且这种方法也只适用于表示对象类型的类型别名，对于非对象类型是无法使用的。)
type Shape = { name: string }
type Circle = Shape & { radius: number }
function foo(circle: Circle) {
  const name = circle.name
  const radius = circle.radius
}
// 4. interface接口名总是会直接显示在编译器的诊断信息和代码编辑器的智能提示中，而 type 的名字只在特定情况下才会显示出来——只有当类型别名表示数组类型、元组类型以及类或者接口的泛型实例类型时才展示。
// 5. interface具有声明合并的行为，而 type不会，这也意味着我们可以通过声明合并的方式给 interface定义的类型进行属性扩展。
// 6. type可以通过 typeof来获取实例的类型从而进行赋值操作

// 相同点
// 都可以用来定义 对象 或者 函数 的结构，而严谨的来说，type 是引用，而 interface是定义。

// 总结
// 对于 type来说，更多的是对类型的一种复用，比如在项目中需要用到一些比较复杂的或者书写起来很长的类型。我们可以使用 type来直接引用该类型：
// type FType = boolean | string | number;
// 而对于 interface来说，它是正儿八经的用来定义接口类型（约束数类型和属性）的，且接口类型是支持继承和声明合并的。
// 所以在对于对象结构的类型定义上，建议尽可能的使用 interface，而在合适的场景使用 type。



// void 类型的返回值  f返回值为空值
function fnHan(): void {
  return undefined
}
// never 类型的返回值
function fn2(): never {
  throw new Error("报错了!");
}

/**
 * @descripttion: object 类型
 * @return {*}
 */
let a: object
a = {}

// {}用来指定包含那些属性值
// 语法: { 属性名: 属性类型, 属性名?: 属性类型 }
// 属性名后面加上一个问号表示改属性可选
let b: { name?: string };
b = {
  name: ''
}

// [propName: string]: any 表示任意类型的属性
let c: { name: string, sex: string, [propName: string]: string }
c = {
  name: '90',
  sex: '男',
  newPropName: '233',
}
console.log('c: ==>', c);
// let cc: { name: string, sex: string, [propName: number]: number, }
// cc = {
//   name: '90',
//   sex: '男',
//   233: 233
// }
// console.log('c: ==>', c);


// 设置函数结构类型
let d: (a: number, b: number) => number
d = function (a: number, b: number) {
  return a + b
}

/**
 * 数组类型声明: 
 *    类型[]
 *    Array<类型>
 */
// array类型
let e: string[]
// e = [123,123,12] // 不能将number类型赋值给string类型
e = ['1', '2', '3']

// 或者使用 Array<number> 方式声明
let f: Array<number>
f = [1, 2, 3]

/**
 * 元组, 长度固定的数组
 *  语法: [类型, 类型, 类型]
 */
let h: [string, number]
h = ['hello', 123456]


/**
 * enum 枚举
 * 
 */

enum Gender {
  Male = 0,
  Female = 1,
  Secrecy = 2
}

let i: { name: string, gender: Gender }
i = {
  name: '悟空',
  gender: Gender.Male,
}
console.log(i.gender === 0, i.gender === Gender.Male);


