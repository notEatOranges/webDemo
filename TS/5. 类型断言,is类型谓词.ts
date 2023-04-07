/*
 * @Author: hly
 * @Description: 类型断言  非空断言 is类型谓词
 * @Date: 2022-10-27 14:01:45
 * @LastEditTime: 2022-11-25 16:41:26
 * @FilePath: /Vue-demo/TS/5. 类型断言,is类型谓词.ts
 */

// 类型断言（Type Assertion）可以用来手动指定一个值的类型

// 语法 as 或  <类型>值

// 用法1: 将一个联合类型断言为其中一个类型
interface Cat {
  name: string;
  run(): void;
}
interface Fish {
  name: string;
  swim(): void;
}

function getName(animal: Cat | Fish) {
  return animal.name;
}

// 有时候，我们确实需要在还不确定类型的时候就访问其中一个类型特有的属性或方法，比如：
// function isFish(animal: Cat | Fish) {
//   if (typeof animal.swim === 'function') {
//       return true;
//   }
//   return false;
// }
// 此时可以使用类型断言，将 animal 断言成 Fish：
function isFish2(animal: Cat | Fish) {
  if (typeof (animal as Fish).swim === 'function') {
      return true;
  }
  return false;
}
// 但是注意滥用 as 会导致奇奇怪怪的错误  
// 将一个参数定断言为某个类型时 编译不会报错 但是调用的时候传入的参数与断言的类型不同时就会报错


// 将 any 断言为一个具体的类型
// 在日常的开发中，我们不可避免的需要处理 any 类型的变量，它们可能是由于第三方库未能定义好自己的类型，也有可能是历史遗留的或其他人编写的烂代码，还可能是受到 TypeScript 类型系统的限制而无法精确定义类型的场景。

// 遇到 any 类型的变量时，我们可以选择无视它，任由它滋生更多的 any。
// 举例来说，历史遗留的代码中有个 getCacheData，它的返回值是 any：
function getCacheData(key: string): any {
  return (window as any).cache[key];
}
// 那么我们在使用它时，最好能够将调用了它之后的返回值断言成一个精确的类型，这样就方便了后续的操作：
interface Cat {
    name: string;
    run(): void;
}

const tomCat = getCacheData('tom') as Cat;
tomCat.run();

// 另外种思路
// 这种any类型的返回值可以使用类型声明来解决
interface Cat {
  name: string;
  run(): void;
}

const tomCat2: Cat = getCacheData('tom');
tomCat2.run();
console.log('tomCat2: ==>',tomCat);


// 用法2 将一个父类断言为更加具体的子类
class ApiError extends Error {
  code: number = 0;
}
class HttpError extends Error {
  statusCode: number = 200;
}

function isApiError(error: Error) {
  if (error instanceof ApiError) {
      return true;
  }
  return false;
}

// 上面的例子中，确实使用 instanceof 更加合适，因为 ApiError 是一个 JavaScript 的类，能够通过 instanceof 来判断 error 是否是它的实例。

// 但是有的情况下 ApiError 和 HttpError 不是一个真正的类，而只是一个 TypeScript 的接口（interface），接口是一个类型，不是一个真正的值，它在编译结果中会被删除，当然就无法使用 instanceof 来做运行时判断了：
interface ApiError extends Error {
  code: number;
}
interface HttpError extends Error {
  statusCode: number;
}

function isApiError2(error: Error) {
  if (typeof (error as ApiError).code === 'number') {
      return true;
  }
  return false;
}



/**
 * @descripttion: 非空断言   !
 * 表示确定某个标识符是有值的，跳过ts在编译阶段对它的检测
 */

 function aa(value?:string){
  //加上 ! 的意思是确保value一定是有值的
  console.log(value!.length);
}
aa('ppp')




// const isString = (val: any): val is string => typeof val === 'string';
// // 返回的结果表示 val是否是string
// const isArray = (val: any):val is Array<any> => Array.isArray(val);
// function fun(value: number | []) {
//     if(isArray(value)) {
//         return value.length
//     } else {
//         return value
//     }
// }


// 通过类型谓词 is 判断任意类型的类型收窄

// 判断参数是否为string类型, 返回布尔值
function isString(s:unknown):boolean{
  return typeof s === 'string'
}
// 参数转为大写函数
// 直接使用转大写方法报错, str有可能是其他类型
function upperCase(str:unknown){
  str.toUpperCase()
  // 类型“unknown”上不存在属性“toUpperCase”。
}
// 判断参数是否为字符串,是在调用转大写方法
function ifUpperCase(str:unknown){
  if(isString(str)){
    str.toUpperCase()
    // (parameter) str: unknown
    // 报错:类型“unknown”上不存在属性“toUpperCase”
  }
}


// // 使用is判断参数是否为string类型, 返回布尔值
function isString(s:unknown):s is string{
  return typeof s === 'string'
}
// 判断参数是否为字符串,是在调用转大写方法
function ifUpperCase(str:unknown){
  if(isString(str)){
    str.toUpperCase()
    // (parameter) str: string
  }
}

