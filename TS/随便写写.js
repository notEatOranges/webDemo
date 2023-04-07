/*
 * @Author: hly
 * @Description: 
 * @Date: 2022-10-26 15:32:43
 * @LastEditTime: 2022-11-21 18:31:24
 * @FilePath: /Vue-demo/TS/随便写写.js
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