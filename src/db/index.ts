// src/db/index.ts
import mongoose, { Connection } from 'mongoose';

export let database: Connection;

export default async (): Promise<void> => {
    return new Promise((resolve, reject) => {
        try {
            if (!process.env.MONGO_URL) {
                reject('Database configuration error');
            }

            database = mongoose.connection;

            database.on('connection', () => {
                console.log('Connection...');
            });

            database.once('open', () => {
                console.log('Connected !');
                resolve();
            });

            database.on('error', (error: any) => {
                mongoose.disconnect();
                console.log(error);
                process.exit(1);
            });

            mongoose
                .connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
                .catch((error: any) => {
                    reject(error);
                });

        } catch (err) {
            reject(err);
        }
    });
}