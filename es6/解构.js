/**
 * auth: lishuna
 * func:
 * date:
 */
// 解构可以保持跟被解构对象格式一致
// let [a, b, c] = [1, 2, 3];
// console.log(a, b, c);
//
// let [nameObj,numObj,hiword] = [{name: 'lucy'},[5,6],'hello word'];
// console.log(nameObj,numObj,hiword);
//
// // 默认解构，能取出来就用取出来的值，否则用默认值
// let { name, age = 8 } = { name: 'lucy', age: 9 };
// console.log(name, age);
  let _module = {
  counter: 3,
  incounter: function(){
    this.counter++;
  }
};
let {counter,incounter} = _module;
counter = 4;
incounter();
console.log(counter);
