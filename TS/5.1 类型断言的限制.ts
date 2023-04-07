/*
 * @Author: hly
 * @Description: 类型断言的限制
 * @Date: 2022-10-27 16:32:06
 * @LastEditTime: 2022-10-27 16:34:24
 * @FilePath: /Vue-demo/TS/5.1 类型断言的限制.ts
 */
export function tsFn() {



  // 若 A 兼容 B，那么 A 能够被断言为 B，B 也能被断言为 A。
  interface Animal {
    name: string;
  }
  interface Cat {
    name: string;
    run(): void;
  }

  let tom: Cat = {
    name: 'Tom',
    run: () => { console.log('run') }
  };
  let animal: Animal = tom;

  // 在上面的例子中，Cat 包含了 Animal 中的所有属性，除此之外，它还有一个额外的方法 run。TypeScript 并不关心 Cat 和 Animal 之间定义时是什么关系，而只会看它们最终的结构有什么关系——所以它与 Cat extends Animal 是等价的：
  interface Animal {
    name: string;
  }
  interface Cat extends Animal {
    run(): void;
  }

  // 当 Animal 兼容 Cat 时，它们就可以互相进行类型断言了：
  function testAnimal(animal: Animal) {
    return (animal as Cat);
  }
  function testCat(cat: Cat) {
    return (cat as Animal);
  }








}