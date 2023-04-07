/*
 * @Author: hly
 * @Description: demo
 * @Date: 2022-11-04 09:43:19
 * @LastEditTime: 2022-11-24 14:08:58
 * @FilePath: /Vue-demo/TS/demo.ts
 */
export function a() {


  /**
   * 1. makeCustomer 为什么返回 User 会报错？ 怎么解决
   * */
  type User = {
    id: number;
    kind: string;
  };
  function makeCustomer<T extends User>(u: T): T {
    return {
      id: u.id,
      kind: 'customer'
    }
  }

  /** 
   * 原因: 
   * 可赋值性 assignable
   * assignable 是类型系统中很重要的一个概念，当你把一个变量赋值给另一个变量时，就要检查这两个变量的类型之间是否可以相互赋值。
   * 函数要求返回 T ，但 T 到底都有什么？我们并不知道，只知道 T 约束于 User(T 包含 User)。但是 函数返回的是User，User 不能赋值给 T 所以报错。
   * 
   * 解: 函数形参 u 是 T 类型，我们不管在 makeCustomer 函数传入任何形参，只要包含有 User ，就不会报错。所以解构 u，或者直接返回 u 就相当于返回类型是 T。
   */

  //  function makeCustomer<T extends User>(u: T): T {
  //   return {
  //     ...u, // 因为 U 就是 T 类型，解构 u 返回的类型就是 T,也可以直接 return u。
  //     id: u.id,
  //     kind: 'customer'
  //   }
  // }
  // makeCustomer({ id: 1, kind: '刘' })


  /**
   * 2. 本道题我们希望参考 a 和 b 的类型都是一致的，即 a 和 b 同时为 number 或 string 类型。当它们的类型不一致的值，TS 类型检查器能自动提示对应的错误信息。
   */
  // 我们想让函数接受的 a 和 b 类型一致，如果不一致，函数就报错！
  function fn(a: string | number, b: string | number) {
    if (typeof a === 'string') {
      return a + ':' + b; // no error but b can be number!
    } else {
      return a + b; // error as b can be number | string
    }
  }
  fn(2, 3); // Ok
  fn(1, 'a'); // Error
  fn('a', 2); // Error
  fn('a', 'b') // Ok


  /**
   * 解: 
   * 1. 函数重载
   * 2. extends 约束
   */
  // 方法1. 重载
  // 重载签名
  // function fun(a: number, b: number): number
  // function fun(a: string, b: string): string
  // // 实现签名
  // function fun(a: string | number, b: string | number): string | number {
  //   if (typeof a === 'string' && typeof b === 'string') {
  //     return a + ':' + b
  //   } else {
  //     return (a as number) + (b as number)
  //   }
  // }
  // fun(2, 3) // Ok  符合重载签名，也符合实现签名，OK!
  // fun(1, 'a') // Error 不符合重载签名也不符合实现签名，报错!
  // fun('a', 2) // Error 不符合重载签名也不符合实现签名，报错!
  // fun('a', 'b') // Ok 符合重载签名， 也符合实现签名，OK!

  // 方法2. extends 约束
  // 利用 extends 约束 第一个参数传递类型 
  // const func = <T extends string | number>(a: T, b: T): string | number => {
  //   if (typeof a === 'string') {
  //     return a + ':' + b
  //   } else {
  //     return (a as number) + (b as number)
  //   }
  // }
  // func(2, 3) // Ok
  // func(1, 'a') // Error
  // func('a', 2) // Error
  // func('a', 'b') // Ok



  /**
   * 3. 定义一个 SetOptional 工具类型，支持把给定的 keys 对应的属性变成可选的。继续实现 SetRequired 工具类型，利用它可以把指定的 keys 对应的属性变成必选的。
   */
  type Foo = {
    a: number;
    b?: string;
    c: boolean;
  }

  // 测试用例
  type SomeOptional = SetOptional<Foo, 'a' | 'b'>;

  // type SomeOptional = {
  // 	a?: number; // 该属性已变成可选的
  // 	b?: string; // 保持不变
  // 	c: boolean; 
  // }

  type Foo2 = {
    a?: number;
    b: string;
    c?: boolean;
  }

  // 测试用例
  type SomeRequired = SetRequired<Foo2, 'b' | 'c'>;
  // type SomeRequired = {
  // 	a?: number;
  // 	b: string; // 保持不变
  // 	c: boolean; // 该属性已变成必填
  // }


  // 解: 
  // 实现可选
  // 全部变成可选， 第一步达成 这也是 Partial 的实现方法
  type PartialOptions<T> = {
    [K in keyof T]?: T[K]
  }
  // 筛选出 T 中 不包含 K 的 键值 ，这也是 Exclude 的实现方法
  type FilterNotExist<T, K> = T extends K ? never : T

  // 将 键值K 变成 必选
  type RequiredFunc<T, K extends keyof T> = {
    [P in K]-?: T[K]
  }
  // 实现内置工具方法
  type SetOptional<T, K extends keyof T> = PartialOptions<T> &
    RequiredFunc<T, FilterNotExist<keyof T, K>>



  // // 实现必填
  // type SetRequired<T, K extends keyof T> = {
  //   [K in keyof T]: T[K]
  // }



  // type Foo22 = {
  //   [K in 'a' | 'b' | 'c']: number
  // }
  // const obj: Foo22 = {
  //   a: 100,
  //   b: 200,
  //   c: 300,
  //   d: 400  // 报错
  // }

}