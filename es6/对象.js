/**
 * auth: lishuna
 * func:
 * date:
 */
const obj1 = { age: 1 , getFood(){
    return '面包';
    }};
const obj2 = { age: 2 };
const obj3 = {
    __proto__: obj1,
    getFood() {
        return '牛奶'+super.getFood()
    }
};
/*
* 设置对象的原型
*
* */
Object.setPrototypeOf(obj3, obj1);
console.log(obj3.age);
// obj3.getFood= function () {
//     '牛奶'+super.getFood()
// }
console.log(obj3.getFood());
