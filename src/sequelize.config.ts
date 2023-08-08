import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { env } from 'process';

export const sequelizeConfig: SequelizeModuleOptions = {
  dialect: 'postgres',
  host: 'postgres-db',
  port: 5432,
  username: env.POSTGRES_USER,
  password: env.POSTGRES_PASSWORD,
  database: env.POSTGRES_DB,
  define: {
    timestamps: false,
    underscored: true,
  },
};
