const koa = require('koa');
const static = require('koa-static');

const serve = new koa();
const port = 3003;

serve.use(static(__dirname+'/client'));
serve.listen(port, ()=>{
   console.log('serve 3003 start success!');
});
