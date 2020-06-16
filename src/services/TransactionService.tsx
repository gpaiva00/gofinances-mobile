import { SQLError } from "expo-sqlite"
import { Transaction } from "../models/Transactions"
import { DatabaseConnection } from "../database/connection"

const table = "transactions"
const db = DatabaseConnection.getConnection()

export default class TransactionService {
  static find(monthParam?: any) {
    return new Promise((resolve) => {
      const currentMonth = new Date().getMonth() + 1;
      const currentYear = new Date().getUTCFullYear();
      const month = monthParam || currentMonth;
  
      const startDate = new Date(`${currentYear}-${month}-01`);
      const endDate = new Date(currentYear, Number(month), 0);

      // find transactions by date
    });
  }

  static create(params: Transaction) {
    return new Promise((resolve) => {
      // get total balance
      // check if outcome and value < total
      // look for categoryTitle and create it if not exists
      // create transaction
      
      db.transaction(
        (tx) => {
          tx.executeSql(
            `
            INSERT INTO ${table} (title, type, value, category_id) 
            VALUES (?,?,?,?)`,
            [params.title, params.type, params.value, params.category_id],

            (_, { insertId, rows }) => {
              console.log("id insert: " + insertId)
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

  static getBalance(transactions: Transaction[]) {
    return new Promise((resolve) => {})
  }
}
