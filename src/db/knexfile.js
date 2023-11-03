
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

module.exports = {
  dev: {
    client: "postgresql",
    connection: {
      // connectionString: "postgresql://user:password@localhost:5432/flower_shop",
      // 上記と下記、どちらかでいい
      host: "localhost",
      port: 5432,
      user: "user",
      database: "flower_shop",
      password: "",
      ssl: process.env.DB_SSL ? { rejectUnauthorized: false } : false,
    },
    migrations: { directory: "./data/migrations" },
    seeds: { directory: "./data/seeds" },
  },

  prod: {
    client: "postgresql",
    connection: process.env.DB_URL,
    migrations: { directory: "./data/migrations" },
    seeds: { directory: "./data/seeds" },
    pool: {
      min: 2,
      max: 10,
    },
  },
};
