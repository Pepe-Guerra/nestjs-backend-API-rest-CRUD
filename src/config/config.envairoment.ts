export const configLoader = () => {
  return {
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      // host: process.env.DATABASE_HOST,
      // port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    },
  };
};
