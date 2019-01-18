import express from 'express';
import bodyParser from 'body-parser';
import router from './router';
import { logger, default as customLog } from './logger';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// 初始化log
customLog(app);
// 路由分发
router(app);

// 启动服务
app.listen(8082, () => {
    console.log('serve port 8082')
});
