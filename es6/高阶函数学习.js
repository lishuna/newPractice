// 类型判断

function isType(type){
    return function(val){
        const content = this;
        return Object.prototype.toString.call(val) === `[object ${type}]`;
    }
}

const arr = ['Number','Array','Undefined','Null','String'];
const util = {};
arr.forEach(item => {
    util['is'+item] = isType(item);
});

console.log(util.isNumber(123));
console.dir(util.isString('123'));