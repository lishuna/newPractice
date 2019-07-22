/**
 * @author lishuna
 * @date  2019-07-03:21:00
 * @version 3.1.0.0
 * @desc
 */
// 显示隐藏属性
// console.dir(global,{showHidden: true});
// process是应用进程
console.log(process.pid)
// 获取当前路径
console.log(process.cwd());
// 获取命令行参数
/**
 * 运行  node src/global.js abc
 * output: [ '/Users/jiedaibao/.nvm/versions/node/v8.9.1/bin/node',
         '/Users/jiedaibao/code/study/newPractice/nodeStudy/src/global.js',
         'abc' ]
 * */
// console.log(process.argv);
//
const args = process.argv.slice(2);
// console.log(args);
let argsObj = args.reduce((pre, cur, index, arr) => {
  console.log(pre, cur);
  if (cur.startsWith('--')) {
    pre[cur.slice(2)] = arr[index + 1];
  }
  return pre;
}, {});
console.log(argsObj)
/**
 * 传入 环境参数
 * 运行:  export NODE_ENV=prod && node src/global.js
 *  output:  prod
 * */
console.log(process.env.NODE_ENV);

// commander

const program = require('commander');
program
  .version('0.1.0')
  .option('-p, --peppers', 'Add peppers')
  .option('-P, --pineapple', 'Add pineapple')
  .option('-b, --bbq-sauce', 'Add bbq sauce')
  .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
  .command('rm <dir>')
  .option('-r, --recursive', 'Remove recursively')
  .action(function (dir, cmd) {
    console.log('=====')
    console.log('remove ' + dir + (cmd.recursive ? ' recursively' : ''))
  })
  .parse(process.argv);


let a = 5;
let b = (a++ < 6 ? ([] + false ? ++a : --a) : a++);
console.log(a, b);

console.log(b=a++<6,b);
console.log([] + false);

let c = 5;
let d = c++<6?(([] + false) ? '3' : '4'):'2';
console.log(d);
console.log(false?'1':'2');
