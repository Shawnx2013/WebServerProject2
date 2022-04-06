const pool = require('../db/database');

const itemService = {
    create: async (item) => {
        let sql = 'INSERT INTO item (name, description) VALUES (?, ?)';
        const [results, fields] = await pool.promise().execute(sql, [
            item.name,
            item.description
        ]);
        return results;
    },

    findById: async (id) => {
        let sql = 'SELECT * FROM item WHERE id = ?';
        const [results, fields] = await pool.promise().execute(sql, [id]);
        return results;
    },

    findAll: async () => {
        let sql = 'SELECT * FROM item';
        const [results, fields] = await pool.promise().execute(sql);
        return results;
    },

    // search: async (search_str) => {
    //     let sql = 'SELECT item.id, item.name, item.type, item.description, item.version, item.long_term_loanable, item.location_id ' +
    //     'FROM ' + 
    //     'item LEFT JOIN item_tag ON item.id = item_tag.item_id ' +
    //     'LEFT JOIN tag ON item_tag.tag_id = tag.id ' +
    //     'WHERE CONCAT(name, type, description, tag_name) LIKE ? ' +
    //     'GROUP BY item.id';
    //     const [results, fields] = await pool.promise().execute(sql, ['%'+search_str+'%']);
    //     return results;
    // },

    update: async (item) => {
        let sql = 'UPDATE item SET name = ?, description = ?';
        const [results, fields] = await pool.promise().execute(sql, [
            item.name,
            item.description
        ]);
        return results;
    },

    delete: async (id) => {
        let sql = 'DELETE FROM item WHERE id = ?';
        const [results, fields] = await pool.promise().execute(sql, [id]);
        return results;
    }
}

module.exports = itemService;