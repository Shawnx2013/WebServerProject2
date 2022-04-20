const pool = require('../db/database');

const locationService = {
    create: async (item) => {
        let sql = 'INSERT INTO location (name) VALUES (?)';
        const [results, fields] = await pool.promise().execute(sql, [
            item.name,
            item.description
        ]);
        return results;
    },

    findById: async (id) => {
        let sql = 'SELECT * FROM location WHERE id = ?';
        const [results, fields] = await pool.promise().execute(sql, [id]);
        return results;
    },

    findAll: async () => {
        let sql = 'SELECT * FROM location';
        const [results, fields] = await pool.promise().execute(sql);
        return results;
    },

    update: async (item) => {
        let sql = 'UPDATE location SET name = ?';
        const [results, fields] = await pool.promise().execute(sql, [
            item.name,
            item.description
        ]);
        return results;
    },
}

module.exports = locationService;