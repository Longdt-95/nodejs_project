import { DataSource } from 'typeorm';
import { Class } from './entitys/Class';
import { Profile } from './entitys/Profile';
import { Student } from './entitys/Student';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'Aa123456@',
  database: 'nodejs',
  synchronize: true,
  logging: true,
  entities: [Student, Class, Profile],
  subscribers: [],
  migrations: []
});
