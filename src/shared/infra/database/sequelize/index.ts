import { Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize({
  dialect: 'postgres',
  password: process.env.DATABASE_PASSWORD,
  username: process.env.DATABASE_USERNAME,
  database: process.env.DATABASE_NAME,
  host: process.env.DATABASE_HOST || 'localhost',
  port: Number(process.env.DATABASE_PORT) || 5432,
  models: [__dirname + '/**/*.model.ts'],
  modelMatch: (filename, member) => {
    return filename.substring(0, filename.indexOf('.model')) === member.toLowerCase();
  },
});
