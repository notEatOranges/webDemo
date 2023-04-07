/*
 * @Author: hly
 * @Description: 泛型
 * @Date: 2022-09-23 17:30:29
 * @LastEditTime: 2022-10-28 14:01:44
 * @FilePath: /Vue-demo/TS/7. 泛型的用法.ts
 */


// 泛型的用法
// 1. 在函数中使用泛型: 

function test<T>(a: T): T {
  console.log(a);
  return a
}
// test<number>('2333') // 报错: 类型 "string" 的参数不能赋值给类型 "number"的参数
test<number>(233) // 输出 233


// 2. 在接口中使用泛型
interface Search {
  <T, Y>(a: T, b: Y): T
}
let fn: Search = function <T, Y>(a: T, b: Y): T {
  console.log(a, b);
  return a
}

fn<number, number>(1, 0) // 打印 1 0




// 3. 在类中使用泛型
class Animal<T> {
  name: T;
  constructor(name: T) {
    this.name = name
  }
  action<T>(say: T) {
    console.log(say)
  }
}

let dog = new Animal('柯基')
dog.action('旺仔牛奶糖🍬')

console.log(dog);

interface User {
  name: string
  age: string | number
}

