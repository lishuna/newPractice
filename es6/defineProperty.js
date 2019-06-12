/**
 * auth: lishuna
 * func:
 * date:
 */
let Person = {};
Object.defineProperty(Person, 'name', {
  configurable: false, // 这个配置代表name属性是否可以被重新定义，如果设置成false，就不能再通过Object.defineProperty定义
  writable: true,// 这个配置代表值是否可以被重写
  value: '小明'
});
Person.name = '小红'; // 无法修改name值
Object.defineProperty(Person, 'name', {
  value: '小红' //这里直接报错 TypeError: Cannot redefine property: name
});
console.log(Person.name); // '小明'


let plus = {};


(function () {
  Object.defineProperty(plus, 'counter', {
    enumerable: true,
    get: function () {
      return counter;
    }
  });

  let counter = 22;
  setTimeout(() => {
    counter = 44;
  });
})();
const counter = 33;
console.log('-----', plus.counter);
setTimeout(() => {
  console.log('-----', plus.counter);
}, 100);
console.log('-----', plus.counter);

