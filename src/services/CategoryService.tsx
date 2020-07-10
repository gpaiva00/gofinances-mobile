import { SQLError } from "expo-sqlite"
import { Categories } from "../models/Categories"
import { DatabaseConnection } from "../database/connection"

const table = "categories"
const db = DatabaseConnection.getConnection()

interface CategoryDTO {
  title: string
}

export default class CategoryService {
  findAll(): Promise<SQLResultSetRowList> {
    return new Promise((resolve, reject) => {
      db.transaction(
        (tx) => {
          tx.executeSql(
            `SELECT * FROM ${table}`,
            [],
            (_, { rows }) => {
              resolve(rows)
              // console.log("categories rows", rows)
            }
          ),
            (sqlError: SQLError) => {
              console.error("Error while find categories", sqlError)
            }
        },
        (txError) => {
          console.error("Categories txError", txError)
        }
      )
    })
  }

  findByTitle(params: CategoryDTO): Promise<SQLResultSetRowList> {
    return new Promise((resolve, reject) => {
      db.transaction(
        (tx) => {
          tx.executeSql(
            `SELECT * FROM ${table} WHERE title = ?`,
            [params.title],
            (_, { rows }) => {
              resolve(rows)
              // console.log("categories rows", rows)
            }
          ),
            (sqlError: SQLError) => {
              console.error("Error while find categories", sqlError)
            }
        },
        (txError) => {
          console.error("Categories txError", txError)
        }
      )
    })
  }

  create(params: CategoryDTO): Promise<SQLResultSetRowList> {
    return new Promise((resolve, reject) => {
      db.transaction(
        (tx) => {
          tx.executeSql(
            `INSERT INTO ${table} (title) VALUES (?)`,
            [params.title],

            (_, { insertId, rows }) => {
              resolve(rows);
              console.log('insert category id', insertId);
            }
          ),
            (sqlError: SQLError) => {
              console.error("category insert sql error", sqlError)
            }
        },
        (txError) => {
          console.error("Categories txError", txError)
        }
      )
    })
  }
}
