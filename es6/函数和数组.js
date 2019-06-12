/**
 * auth: lishuna
 * func:
 * date:
 */

// 参数默认值
function ajax(url = Error('url不能为空'), type = "POST", data = {}) {
    console.log(url);
    console.log(type);
}

ajax('/user');

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

const max = Math.max(...arr3);
console.log(max);

//  对象的解构 ES7的新特性
const obj1 = { name: 'nihao' };
const obj2 = { age: 9 };
const obj3 = {};
Object.assign(obj3, obj1, obj2);
console.log(obj3);
console.log({ ...obj1, ...obj2 });

/*
* 对象深拷贝
* ！！！没有考虑对象里含数组的情况
* */
function clone(origin) {
    let target = {};
    for (var key in origin) {
        if (Object.prototype.toString.call(origin[key]) === "[object Object]") {
            target[key] = clone(origin[key]);
        } else {
            target[key] = origin[key];
        }
    }
    return target;
}

const oldObj = { name: 'lishuna', age: 9, work: { addr: '北京' } };
const newObj = clone(oldObj);
console.log(newObj);
newObj.work.addr = '上海';
console.log(newObj);

/*
* 1.箭头函数内没有this，他的this指向上层作用域的this
* 2.箭头函数不能new
* 3.不能使用call apply bind
* 4.不能使用arguments
* 5.不能使用yied关键字
*
* */
const animal = {
    name: 'Dog',
    getName() {
        setTimeout(() => {
            console.log(this.name);
        });
    }
};
animal.getName();
const _name = animal.getName;
_name();

/*
* find 查找并返回第一个找到的元素
* some 是数组里有一个指定值就返回true
* every 是数组里都是指定的值才返回true
* */
const arr = ['a', 'b', 'c', 'a'];
console.log('find结果是:', arr.find(item => item == 'a'));
console.log('some结果：', arr.some(item => item == 'd'));
console.log('every结果：', arr.every(item => item == 'a'));

// 类数组转换
function test() {
    console.log([].slice.call(arguments));
}

test(1, 2, 3, 4, 5);

function sum(...rest) {
    return rest.reduce((pre, cur, index, orgin) => {
        console.log('====', index);
        return pre + cur;
    });
}

console.log(sum(1, 2, 3, 4, 5));

/**
 * reduce可以用作求和，回调函数的参数有
 *@params Pre(前一个元素),
 * @params current（当前元素）
 *@params index（当前索引）
 *@params array（源数组）
 *
 * */
// 手写reduce
Array.prototype.reduceNew = function (fn, initial = 0) {
    this.forEach((item, index) => {
        initial = fn(initial, item);
    });
    return initial;
}

function sum1(...rest) {
    return rest.reduceNew((pre, cur, index, orgin) => {
        return pre + cur;
    });
}

console.log(sum1(1, 2, 3, 4, 5));

const array11 = [1, 2, 3, 4, 5];
array11.unshift('1');
array11.unshift('2');
array11.shift();

console.log(array11);

for (var i = 0; i < 10; i++) {
    setTimeout((function (i) {
        console.log(i);
    })(i));
}
