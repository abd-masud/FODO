import mysql from 'mysql2/promise';

let connection: mysql.Connection;

export async function connectionToDatabase() {
    if (!connection) {
        connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'food_store'
        })
    }
    return connection;
}