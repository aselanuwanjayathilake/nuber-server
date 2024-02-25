import { DataSource } from "typeorm"
import 'dotenv/config'

const AppDataSource = new DataSource({
    "type": "postgres",
    "host": process.env.DB_ENDPOINT,
    "port": 5436,
    "username": process.env.USER_NAME,
    "password": process.env.PASSWORD,
    "database": "uber",
    "synchronize": true,
    "logging": true,
    "entities": ["entities/**/*.*"],
    // "migrations": ["src/migration/**/*.ts"],
    // "subscribers": ["src/subscriber/**/*.ts"]
})

export default AppDataSource;