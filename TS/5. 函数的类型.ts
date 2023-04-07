/*
 * @Author: hly
 * @Description: 函数的类型
 * @Date: 2022-10-27 11:41:52
 * @LastEditTime: 2022-11-25 16:42:11
 * @FilePath: /Vue-demo/TS/5. 函数的类型.ts
 */

// 在 JavaScript 中，有两种常见的定义函数的方式: 
// 函数声明（Function Declaration）和函数表达式（Function Expression）：

// 函数声明（Function Declaration）
function sum(x: any, y: any):any {
  return x + y;
}

// 函数表达式（Function Expression）
let mySum = function (x: any, y: any) {
  return x + y;
};

// 函数声明的类型定义较简单：
function sum(x: number, y: number): number {
  return x + y;
}

// 函数表达式
let mySum2 = function (x: number, y: number): number {
  return x + y;
};

// 上面的代码只对等号右侧的匿名函数进行了类型定义，而等号左边的 mySum，是通过赋值操作进行类型推论而推断出来的。如果需要我们手动给 mySum 添加类型，则应该是这样：

let mySum3: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};

// 用接口定义函数的形状
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  return source.search(subString) !== -1;
}
// 采用函数表达式|接口定义函数的方式时，对等号左侧进行类型限制，可以保证以后对函数名赋值时保证参数个数、参数类型、返回值类型不变。

// 可选参数§
// 参数默认值§

// 剩余参数§
function push(array: any[], ...items: any[]) {
  items.forEach(function(item) {
      array.push(item);
  });
}

let arr2:any = [];
push(arr2, 1, 2, 3);
// items 是一个数组。所以我们可以用数组的类型来定义它

// 用接口定义函数的形状
interface Fun {
  (x: number, y:number): number
}