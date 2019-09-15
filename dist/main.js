"use strict";
var name1 = '你好';
var arr = [10, '123'];
console.log(arr);
var sex;
(function (sex) {
    sex[sex["BOY"] = 0] = "BOY";
    sex[sex["GIRL"] = 1] = "GIRL";
})(sex || (sex = {}));
;
