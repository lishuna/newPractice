import mysql from 'mysql';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'abc123456',
    database: 'school',
    connectionLimit: 10
});
export const DB = {
    getConnection: () => {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) {
                    reject(err);
                    throw err;
                }
                resolve(connection);
            });
        });
    },
    select: async () => {
        DB.getConnection().then((connection) => {
            connection.query('select * from student', function (err, rows, fields) {
                if (err) throw err;
                console.log('The solution is: ', JSON.parse(JSON.stringify(rows)));
            });
            connection.release();
        });
        const _connect = await DB.getConnection();
        let sql = 'select * from ?? where ??=?';
        sql = mysql.format(sql, ['student', 'age', '18']);
        _connect.query(sql, function (err, rows, fields) {
            if (err) throw err;
            console.log('The solution is: ', JSON.parse(JSON.stringify(rows)));
        });
        _connect.release();
    },
    insert: async () => {
        const _connets = await DB.getConnection();
        let sql = 'insert into student(name,age,birthday) values(?,?,?)';
        sql = mysql.format(sql, ['小黑', 38, '2008-11-08']);
        _connets.beginTransaction(() => {
            _connets.query(sql);
            _connets.commit((err, result) => {
                if (err) {
                    _connets.rollback();
                    throw err;
                }
                console.log('The solution is: ', result);
            });
        });
        _connect.release();
    }
};
