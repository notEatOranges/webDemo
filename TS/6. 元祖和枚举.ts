/*
 * @Author: hly
 * @Description: 元祖/枚举
 * @Date: 2022-09-26 17:16:53
 * @LastEditTime: 2022-10-27 15:32:01
 * @FilePath: /Vue-demo/TS/6. 元祖和枚举.ts
 */
export default function tsFn() {

  /**
   * @descripttion: 元组
   * @return {*}
   */
  //  数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象。
  let tom: [string, number] = ['Tom', 25];
  // 当添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型：
  tom.push(23)
  // tom.push(true)
  
  /**
   * @descripttion: 枚举
   * 枚举成员会被赋值为从 0 开始递增的数字，同时也会对枚举值到枚举名进行反向映射：
   */
  enum color {
    Red,
    Yellow,
    Orange,
    Blue,
    Black
  }

  let backgraundColor = color.Red
  console.log('看看 backgraundColor是啥: ==>', backgraundColor);
  backgraundColor = 90
  console.log('看看 color: ==>', color, color[0]);

  enum logs {
    Undefind = '90',
    Yes = 1,
    Unknown = 1,
    No = 2
  }
  console.log('看看 logs: ==>', logs);
  console.log('看看 logs: ==>', logs[1]);
  console.log('看看 logs: ==>', logs[2]);

  enum Color {
    Red,
    Green,
    Blue
  }

  enum Color {
    DarkRed = 2,
    DarkGreen,
    DarkBlue
  }
  console.log('Color: ==>', Color);



}