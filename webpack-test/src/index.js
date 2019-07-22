/**
 * @author lishuna
 * @date  2019-05-28:22:06
 * @version 3.1.0.0
 * @desc
 */
// require('expose-loader?$!jquery');
const  {counter, incCounter}   = require('./utils/math_commonjs');
// import { plus } from './utils/math';

// 将counter++
incCounter();
console.log(counter);

