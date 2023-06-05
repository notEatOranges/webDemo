/*
 * @Author: hly
 * @Description: 
 * @Date: 2022-10-26 15:32:43
 * @LastEditTime: 2023-06-05 10:16:21
 * @FilePath: /vue-demo/TS/随便写写.js
 */


let foo = (val1, val2) => {
  let val3;
  // 这里省略一些过程，反正api调用者也无需关心，bula bula
  return val4;
}

function Async (){
  return new Promise((res,rej)=>{
    res(23333)
  })
}

async function  fn (){
  await Async().then(res=>{
    setTimeout(()=>{
      console.log('res: ==>', );
    },100)
    console.log('res: ==>',2222 );
  })
  console.log('888888888888: ==>', );
}

fn()


// call() 改变this的女指向，如果不使用这个方法，手写一个实现相同的效果

// 改变 this 指向、深入理解 call/apply/bind 的原理

// 1. call
Function.prototype.myCall = function(context, ...args) {
  context.func = this
  // 执行函数，利用扩展运算符将数组展开
  context.func(...args)
  delete context.func
}

var me = {
name: 'icon'
}

function showFullName(surName) {
console.log(`${this.name} ${surName}`)
}

showFullName.myCall(me, 'lee') // icon lee


