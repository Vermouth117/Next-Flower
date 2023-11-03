
const knex = require("knex");
const knexConfig = require("./knexfile");

const env = process.env.DB_URL ? "prod" : "dev";
module.exports = knex(knexConfig[env]);
