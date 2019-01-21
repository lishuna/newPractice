import log4j from 'log4js';
import path from 'path';

const logEnv = process.env.NODE_ENV == 'development'? 'console': 'filelog';
console.log(process.env.NODE_ENV);

// log4j日志
log4j.configure({
    // 定义log名称、输入格式路径
    appenders: {
        console: {
            type: 'stdout',
            encode: 'UTF-8',
            layout: {
                type: 'colored'
            }
        },
        sysLog: {
            type: 'dateFile',
            filename: path.join(__dirname + '../../logs/'),
            pattern: 'log-yyyy-MM-dd.log',
            alwaysIncludePattern: true,
            category: 'info',
            layout: {
                type: 'colored'
            }
        },
        dbLog: {
            type: 'dateFile',
            filename: path.join(__dirname + '../../logs/db/'),
            pattern: 'db-yyyy-MM-dd.log',
            alwaysIncludePattern: true,
            category: 'info',
            layout: {
                type: 'colored'
            }
        }
    },
    // 指定log分类
    categories: {
        default: { appenders: ['sysLog'], level: 'info' },
        filelog: { appenders: ['sysLog'], level: 'info' },
        console: { appenders: ['console'], level: 'info' },
        dbLog: { appenders: ['dbLog'], level: 'info' }
    },
});
const logger = log4j.getLogger(logEnv);
logger.levels = 'INFO';

export default app => {
    // 对所有请求加log日志，并且自定义一个请求参数的format
    app.all('*', (req, res, next) => {
        const _next = log4j.connectLogger(logger, ((req) => {
            return {
                tokens: [{
                    token: ':params',
                    replacement: JSON.stringify(req.body)
                }],
                format: '[:http-version :remote-addr :method :url :user-agent :status :response-timems :date :params]'
            };
        })(req));
        _next(req, res, next);
    });
}
export const SySLog = log4j.getLogger('dbLog');
