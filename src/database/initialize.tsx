import { DatabaseConnection } from './connection'
import { WebSQLDatabase } from 'expo-sqlite'

let db: WebSQLDatabase;

export default class DatabaseInit {

    constructor() {
        db = DatabaseConnection.getConnection();
        db.exec([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false, () =>
            console.log('Foreign keys turned on')
        );
        this.initializeDatabase()
    }

    private initializeDatabase() {
        var sqlCommands = [
            `DROP TABLE IF EXISTS transactions;`,
            `DROP TABLE IF EXISTS categories;`,

            `CREATE TABLE IF NOT EXISTS transactions (
              id integer PRIMARY KEY AUTOINCREMENT,
              title text NOT NULL,
              type text NOT NULL,
              value real,
              category_id integer,
              created_at datetime NOT NULL DEFAULT current_timestamp,
              updated_at datetime NOT NULL DEFAULT current_timestamp,

              FOREIGN KEY (category_id) 
                REFERENCES categories (id)
                  ON UPDATE CASCADE
                  ON DELETE SET NULL
            );`,

            `CREATE TABLE IF NOT EXISTS categories (
              id integer PRIMARY KEY AUTOINCREMENT,
              title text NOT NULL
            );`
        ];

        db.transaction(
            tx => {
                for (let sqlCommand of sqlCommands) {
                  console.log('executing sql commands');
                  tx.executeSql(sqlCommand);
                }
            }, (error) => {
                console.log("error call back : " + JSON.stringify(error));
                console.log(error);
            }, () => {
                console.log("transaction complete call back ");
            }
        );
    }

}