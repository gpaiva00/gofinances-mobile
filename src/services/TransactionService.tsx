import { SQLError } from "expo-sqlite"
import { Transactions } from "../models/Transactions"
import { DatabaseConnection } from "../database/connection"
import CategoryService from "../services/CategoryService"

const table = "transactions"
const db = DatabaseConnection.getConnection()

interface CreateTransactionDTO {
  title: string
  type: string
  value: number
  categoryName: string
}

export default class TransactionService {
  static find(monthParam?: any): Promise<Transactions[]> {
    return new Promise((resolve) => {
      // const currentMonth = new Date().getMonth() + 1;
      // const currentYear = new Date().getUTCFullYear();
      // const month = monthParam || currentMonth;

      // const startDate = new Date(`${currentYear}-${month}-01`);
      // const endDate = new Date(currentYear, Number(month), 0);

      // find transactions by date

      // TENTAR RETORNAR NO MESMO FORMATO QUE ATUALMENTE: OBJETO CATEGORY DENTRO DE TRANSACTION
      db.transaction(
        (tx) => {
          tx.executeSql(
            `SELECT 
              ${table}.id AS transactionId,
              ${table}.title AS transactionTitle,
              ${table}.created_at AS transactionCreatedAt,
              type,
              value,
              categories.title AS categoryTitle
             FROM ${table}
             INNER JOIN categories ON categories.id = ${table}.category_id
             ORDER BY ${table}.created_at DESC
            `, 
            [], 
            (_, { rows }) => {
              resolve(rows._array)
            }
          ),
          (sqlError: SQLError) => {
            console.error(sqlError)
          }
        },
        (txError) => {
          console.error(txError)
        }
      )
    })
  }

  async create(params: CreateTransactionDTO): Promise<number> {
    // look for categoryTitle and create it if not exists
    const categoryService = new CategoryService()

    let category = await categoryService.findByTitle({ title: params.categoryName })
    console.log("find categories length", category.length)

    if (!category.length) {
      category = await categoryService.create({ title: params.categoryName })
    }

    // get total balance
    // check if outcome and value < total
    // create transaction
    return new Promise((resolve) => {
      db.transaction(
        (tx) => {
          tx.executeSql(
            `
            INSERT INTO ${table} (title, type, value, category_id) 
            VALUES (?,?,?,?)`,
            [params.title, params.type, params.value, 1],

            (_, { insertId, rows }) => {
              // console.log('INSERT ROWS', rows);
              resolve(insertId)
            }
          ),
            (sqlError: SQLError) => {
              console.log("Error while creating:", sqlError.message)
            }
        },
        (txError) => {
          console.log(txError)
        }
      )
    })
  }

  static getBalance(transactions: Transactions[]) {
    return new Promise((resolve) => {})
  }
}
