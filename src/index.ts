import express from 'express';
import dotenv from 'dotenv';
import initDB from './db/index';
import routes from './routes';

const startServer = async (): Promise<void> => {

    dotenv.config();
    const app = express();
    
    await initDB();
    app.listen(process.env.PORT, () => {
        console.log(`Server listening on port ${process.env.PORT}`); 
    });
    
    routes(app);
}

startServer();