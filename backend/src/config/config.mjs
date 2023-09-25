const config = {
  development: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    port: parseInt(process.env.DB_PORT),
    host: 'db',
    dialect: 'postgres',
    dialectOptions: {
      bigNumberStrings: true,
    },
  },
};

export default config;
