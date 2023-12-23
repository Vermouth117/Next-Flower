const knex = require("knex");
const knexConfig = require("./knexfile");

const env = process.env.DB_URL ? "production" : "development";
module.exports = knex(knexConfig[env]);
