
let name = '';
var Animal = {};

Object.defineProperty(Animal,'name',{
   set: (val)=>{
       name = val;
       console.log('新值是：'+val);
   },
    get: ()=>{
       console.log('取值来了！');
       return name;
    },
    // 是否可写
    writable: true,
    // 是否可以删除
    configurable: false,
    enumerable: true
});
Animal.name='dog';
console.log(Animal.name);
