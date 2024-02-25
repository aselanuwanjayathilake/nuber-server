import express from 'express';
import dotenv from 'dotenv';
import { buildApp } from './app';
import AppDataSource from './ormconfig';

dotenv.config();
const app = express();

const endpoint = buildApp(app);
const PORT: string | number = process.env.PORT || 4000;

AppDataSource.initialize()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`GraphQL API located at http://localhost:4000${endpoint}`);
        });
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    });