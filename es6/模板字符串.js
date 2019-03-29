/**
 * auth: lishuna
 * func:
 * date:
 */
const name='zfpx', age = 9;

let str = '${name} 今年是 ${age} 岁了';
console.log(str);
// 模拟模板字符串替换
function  replaceStr(desc) {
    return desc.replace(/\$\{([^}]+)\}/g, (key,value)=>{
        return eval(value);
    });
}
console.log(replaceStr(str));

function Desc(strings,...args){
    // { '0': [ '', ' 今年是 ', ' 岁了' ], '1': 'zfpx', '2': 9 }
    console.log(arguments);
    console.log(strings);
    console.log(args);
    let _str = '';
    for (var i=0;i<args.length;i++) {
        _str += strings[i]+args[i];
    }
    return _str = _str + strings[i];
}
// 带标签的模板字符串，就是一个函数调用
let str1 = Desc`${name} 今年是 ${age} 岁了`;
console.log(str1);

// startWith endWith

const http1 = 'https://baidu.com';
console.log(http1.startsWith('https'));

// padStart padEnd 对字符串向前或向后补字符串
console.log('abc'.padStart(10,'0'));
console.log('efg'.padEnd(10,'0'));


