import { TypeOrmModuleOptions } from "@nestjs/typeorm/dist/interfaces/typeorm-options.interface";
import * as dotenv from "dotenv";

dotenv.config(); // Load .env file

export const dbconfig = {
  type: "postgres",
  host: process.env.DATABASE_HOST || "192.168.100.114",
  port:
    (process.env.DATABASE_PORT && parseInt(process.env.DATABASE_PORT, 10)) ||
    5432,
  database: process.env.DATABASE_NAME || "expense",
  username: process.env.DATABASE_USER || "expense",
  password: process.env.DATABASE_PASSWORD || "expense",
  // synchronize: process.env.DATABASE_SCHEMA_SYNC === 'true',
  autoLoadEntities: true,
  bigNumberStrings: false,
  synchronize: true,
  // logging: process.env.TYPEORM_QUERY_LOGGING === 'true',
  // extra: {
  //   max: (process.env.DB_CONNECTION_POOL_MAX && parseInt(process.env.DB_CONNECTION_POOL_MAX, 10)) || 5,
  // },
} as TypeOrmModuleOptions;
export const DATABASE_URL = process.env.DATABASE_URL;
export default dbconfig;
