import { DataSource, DataSourceOptions } from "typeorm";

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5555,
    username: 'admin',
    password: 'root',
    database: 'user',
    synchronize: true,
    logging: false,
    entities: [__dirname + '/../**/*.entity{.ts,.js}']
};

export const dataSource = new DataSource(dataSourceOptions);