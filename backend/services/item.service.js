const pool = require("../db/database");

const itemService = {
  create: async (item) => {
    let sql =
      "INSERT INTO item (name, description, count, location) VALUES (?, ?, ?, ?)";
    const [results, fields] = await pool
      .promise()
      .execute(sql, [item.name, item.description, item.count, item.location]);
    return results;
  },

  findById: async (id) => {
    let sql = "SELECT * FROM item WHERE id = ?";
    const [results, fields] = await pool.promise().execute(sql, [id]);
    return results;
  },

  findAll: async () => {
    let sql = "SELECT * FROM item";
    const [results, fields] = await pool.promise().execute(sql);
    return results;
  },

  search: async (search_str) => {
    let sql =
      "SELECT item.id, item.name, item.description, item.count, item.location" +
      "FROM items" +
      "WHERE CONCAT(name, description) LIKE ? " +
      "GROUP BY item.id";
    const [results, fields] = await pool
      .promise()
      .execute(sql, ["%" + search_str + "%"]);
    return results;
  },

  update: async (item) => {
    let sql =
      "UPDATE item SET name = ?, description = ?, count = ?, location = ? WHERE id = ?";
    const [results, fields] = await pool
      .promise()
      .execute(sql, [item.name, item.description, item.count, item.location, item.id]);
    return results;
  },

  delete: async (id) => {
    let sql = "DELETE FROM item WHERE id = ?";
    const [results, fields] = await pool.promise().execute(sql, [id]);
    return results;
  },
};

module.exports = itemService;
