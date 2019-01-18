import log4j from 'log4js';
import path from 'path';

const logEnv = process.env.NODE_ENV == 'development'? 'console': 'filelog';
console.log(process.env.NODE_ENV);

// log4j日志
log4j.configure({
    appenders: {
        console: {
            type: 'stdout',
            encode: 'UTF-8'
        },
        sysLog: {
            type: 'dateFile',
            filename: path.join(__dirname + '../../logs/'),
            pattern: 'log-yyyy-MM-dd.log',
            alwaysIncludePattern: true,
            category: 'info'
        }
    },
    categories: {
        default: { appenders: ['sysLog'], level: 'info' },
        filelog: { appenders: ['sysLog'], level: 'info' },
        console: { appenders: ['console'], level: 'info' }
    },
});
const logger = log4j.getLogger(logEnv);
logger.levels = 'INFO';

export default app => {
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
export { logger };
