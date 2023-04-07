/*
 * @Author: hly
 * @Description: is
 * @Date: 2022-11-02 17:40:48
 * @LastEditTime: 2022-11-02 17:44:36
 * @FilePath: /Vue-demo/TS/is.ts
 */
export function tsFn() {



// 主动使用联合类型确保我们的输入是 1-6的数字
type Dice = 1 | 2 | 3 | 4 | 5 | 6;

function pipsAreValid(pips: number): pips is Dice {
  return pips === 1 || pips === 2 || pips === 3 ||
    pips === 4 || pips === 5 || pips === 6;
}

function evalThrow(count: number) {
  if (pipsAreValid(count)) {
    // count is now of type Dice 😎
    switch (count) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        console.log('Not today');
        break;
      case 6:
        console.log('Won!');
        break;
      case 7:
        // TypeScript errors here. 7 is not in the union type of 
        // Dice
        console.log('This does not work!');
        break;
    }
  }
}

  evalThrow(4)










}