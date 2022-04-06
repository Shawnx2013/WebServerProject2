const pool = require('../db/database');

const userService = {
    create: async (user) => {
        let sql = 'INSERT INTO user (username, password) VALUES (?, ?)';
        const [results, fields] = await pool.promise().execute(sql,
            [
                user.username,
                user.password,
            ]
        );
        return results.insertId;
    },


    findById: async (id) => {
        let sql = 'SELECT * FROM user WHERE id = ?';
        const [results, fields] = await pool.promise().execute(sql, [id]);
        return results;
    },

    findByUsername: async (username) => {
        let sql = 'SELECT * FROM user WHERE username = ?';
        const [result, field] = await pool.promise().execute(sql,
            [
                username
            ]
        );
        return result;
    },

    findAll: async()  =>{
        let sql = 'SELECT * FROM user';
        const [results, fields] = await pool.promise().execute(sql);
        return results;
    }
}

module.exports = userService;