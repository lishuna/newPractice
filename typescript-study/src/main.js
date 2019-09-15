var name1 = '你好';
var arr = [10, '123'];
console.log(arr);
// 元数据
var arr1 = ['hello world', 456];
// 枚举
var sex;
(function (sex) {
    sex[sex["BOY"] = 0] = "BOY";
    sex[sex["GIRL"] = 1] = "GIRL";
    sex[sex["NONE"] = 2] = "NONE";
})(sex || (sex = {}));
;
