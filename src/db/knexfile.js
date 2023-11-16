
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      // connectionString: "postgresql://user:password@localhost:5431/flower_shop",
      // 上記と下記、どちらかでいい
      host: "localhost",
      port: 5431,
      user: "user",
      database: "flower_shop",
      password: "password",
      ssl: process.env.DB_SSL ? { rejectUnauthorized: false } : false,
    },
    migrations: { directory: "./migrations" },
    seeds: { directory: "./seeds" },
  },

  production: {
    client: "postgresql",
    connection: {
      // connectionString: "postgresql://user:password@localhost:5431/flower_shop",
      // 上記と下記、どちらかでいい
      host: "localhost",
      port: 5431,
      user: "user",
      database: "flower_shop",
      password: "password",
      ssl: process.env.DB_SSL ? { rejectUnauthorized: false } : false,
    },
    migrations: { directory: "./migrations" },
    seeds: { directory: "./seeds" },
    pool: {
      min: 2,
      max: 10,
    },
  },
};
