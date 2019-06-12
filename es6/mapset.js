/**
 * @author lishuna
 * @date  2019-04-17:11:24
 * @version 3.1.0.0
 * @desc
 */
// 数组去重
const arr = [1,3,1,'3',NaN,NaN,null,null,'abc','abc'];
console.log([...new Set(arr)]);

let map = new Map();
arr.forEach(item=>{
    map.set(item);
});
console.log(map);


