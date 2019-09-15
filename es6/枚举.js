function Person() {
    this.name = "KXY";
}
Person.prototype = {
    constructor: Person,
    job: "student",
};
 
var kxy = new Person();
Object.defineProperty(kxy, "sex", {
    value: "female",
    enumerable: false
});
console.log(kxy.propertyIsEnumerable('name')); // true
console.log(kxy.propertyIsEnumerable('sex'));   // false
for(let i in kxy){
    console.log(i); //输出：'name' 'constructor' 'job'，因为for in会将对象原型上的属性都遍历出来
}
console.log('-----Object.keys-----');
console.log(Object.keys(kxy)); // 'name' 只遍历对象上的属性，sex为不可枚举，所以获取不到