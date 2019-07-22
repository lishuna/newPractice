/**
 * @author lishuna
 * @date  2019-06-20:19:51
 * @version 3.1.0.0
 * @desc
 */
// function req(mod) {
//   let filename = path.join(__dirname, mod);
//   let content = fs.readFileSync(filename, 'utf8');
//   //
//   let fn = new Function('exports', 'require', 'module', '__filename', '__dirname', content + '\n return module.exports;');
//   let module = {
//     exports: {}
//   };
//
//   return fn(module.exports, req, module, __filename, __dirname);
// }
// let fs = require('fs');
// let path = require('path');
// let b = req('./b.js');
// console.log(b);

let b1 = require('./b.js');
console.log(b1);
// console.log(arguments);


