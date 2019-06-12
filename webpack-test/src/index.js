/**
 * @author lishuna
 * @date  2019-05-28:22:06
 * @version 3.1.0.0
 * @desc
 */
// require('expose-loader?$!jquery');
const  {counter, incCounter}   = require('./utils/math_commonjs');
// import { plus } from './utils/math';

incCounter();
console.log(counter);
// require('./index.css');
// document.getElementById('index').innerHTML="index";
// $('#index').html('jquery change index');
// console.log('hhhhhhh');
// setTimeout(()=>{
//   import('./utils/math').then(mathUtil => {
//     console.log('1 + 2: ' + mathUtil.plus(1, 2));
//   });
// });
