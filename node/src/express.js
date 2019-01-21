import express from 'express';
import bodyParser from 'body-parser';
import router from './router';
import { SySLog, default as customLog } from './logger';
import { DB } from './mysql';

DB.select();
DB.insert();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// 初始化log
customLog(app);
// 路由分发
router(app);

// 启动服务
app.listen(8082, () => {
    SySLog.info('serve port 8082');
    console.log('serve port 8082')
});
