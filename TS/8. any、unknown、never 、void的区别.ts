import { group } from "console"

/*
 * @Author: hly
 * @Description: any、unknown、never 、void的区别
 * @Date: 2022-10-27 15:44:52
 * @LastEditTime: 2022-11-01 15:05:23
 * @FilePath: /Vue-demo/TS/8. any、unknown、never 、void的区别.ts
 */
export function tsFn (){


// any 表示任意类型，设置为any相当于对该变量关闭了TS的类型检测。不建议使用

// let a;（隐式any） //声明变量不赋值，就是any 等效于let a:any = 10;（显示any）
// a=10
// a='hello'
// 区别：
// let s= string //给s变量设置类型string
// s = a; //a是any类型，它可以赋值给任意变量 此时s的类型也被影响了


// unknown 表示未知的类型

// let b:unknown;
// b=10;
// b="hello";
// 区别：
// let s= string //给s变量设置类型string
// s = b; //b是unknown 此时s的类型不会被影响。代码会报错

// let a: unknown
// a = 'hello'
// let b: string
// b = a as string
// console.log('b: ==>', b);

// 总结：any和unknown相同点在于都是可以赋值不同的值，区别在于如果把unknown类型的值赋值给别的类型会报错。



// never 表示永远不会返回结果  一般用在抛出错误
function fn():never {
	throw new Error ('报错了') //报错时程序结束运行，不会有返回值
}


// void 表式空，以函数为例，表示没有返回值的函数
function fn2():void { }














}