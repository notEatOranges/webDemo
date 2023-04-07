/*
 * @Author: hly
 * @Description: 重载的3种写法
 * @Date: 2022-09-26 18:18:54
 * @LastEditTime: 2022-11-08 16:15:25
 * @FilePath: /Vue-demo/TS/5.1 重载.ts
 */

//重载: 方法一 函数的重载 
function double(val: number): number;
function double(val: string): string;
function double(val: string | number) {
  if (typeof val === 'number') {
    return val * 2
  } else {
    return val + val
  }
}
console.log('double(2): ==>', double(2));
console.log("double('1'): ==>", double('1'));
// double(true)  //加上上面两句之后这里如果传布尔值就会报错, 也即函数的重载

// 重载
function padding(all: number): object;
function padding(topAndBottom: number, leftAndRight: number): object;
function padding(top: number, right: number, bottom: number, left: number): object;
// Actual implementation that is a true representation of all the cases the function body needs to handle
function padding(a: number, b?: number, c?: number, d?: number): object {
  if (b === undefined && c === undefined && d === undefined) {
    b = c = d = a;
  } else if (c === undefined && d === undefined) {
    c = a;
    d = b;
  }
  return {
    top: a,
    right: b,
    bottom: c,
    left: d
  };
}

console.log('padding: ==>', padding(1));

const aaa = {
  b: 123
}

console.log(aaa?.b === 1234);



// 方法二  函数声明
type Padding1 = {
  (a: number): object
}
type Padding2 = (a: number) => object

// 两种声明方式都可
// 但是想用重载的话就只能用第一种
type Padding = {
  (a: number): object,
  (a: number, b: number): object,
  (a: number, b: number, c: number, d: number): object,
}
let padding2: Padding = function (a: number, b?: number, c?: number, d?: number) {
  if (b === undefined && c === undefined && d === undefined) {
    b = c = d = a;
  } else if (c === undefined && d === undefined) {
    c = a;
    d = b;
  }
  return {
    top: a,
    right: b,
    bottom: c,
    left: d
  };
}

console.log('Padding: ==>', padding2(1, 2, 3, 4));




// 方法三 & 符号重载(使用联合数据类型)
// 条件类型中的类型推断
type Name = { 23: 'wu' } | { name: 'han' }

type UnionToIntersection<U> =
  // (U extends U ? (x: U) => unknown : never) extends (x: infer R) => unknown ? R : never
  (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never

// type res = UnionToIntersection<((a: string) => void) | ((a: number) => void)>
type res = UnionToIntersection<Name>

type Weird = UnionToIntersection<string | number | boolean>

// 条件类型中的类型推断
type Param<T> = T extends (arg: infer U) => void ? U : never
// type Param<T> = [T] extends [(arg: infer U) => void] ? U : never
type InferredParams = Param<((a: string) => void) | ((a: number) => void)>

type TTuple = [string, number, true, number[]];
type Res = TTuple[number]; // string | number


// 以下示例演示了协变位置中同一类型变量的多个候选者如何导致推断联合类型：
type Foo<T> = T extends { a: infer U, b: infer U } ? U : never;
type T10 = Foo<{ a: string, b: string }>;  // string
type T11 = Foo<{ a: string, b: number }>;  // string | number

// 同样，同一类型变量在逆变位置的多个候选会导致推断出交集类型：
type Bar<T> = T extends { a: (x: infer U) => void, b: (x: infer U) => void } ? U : never;
type T20 = Bar<{ a: (x: string) => void, b: (x: string) => void }>;  // string
type T21 = Bar<{ a: (x: string) => void, b: (x: number) => void }>;  // string & number
