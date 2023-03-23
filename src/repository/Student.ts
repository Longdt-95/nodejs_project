import { AppDataSource } from '../DataSource';

export class StudentRepository {
  dataSource: any;

  constructor() {
    this.dataSource = AppDataSource;
  }

  public getAllStudent() {
    return this.dataSource.manager.all();
  }
}
