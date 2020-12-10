import express from 'express';
import dotenv from 'dotenv';
import initDB from './db/index';
import bodyParser from 'body-parser';
import routes from './routes';

import logger from './middlewares/logger';
import cors from './middlewares/cors';

const startServer = async (): Promise<void> => {

    dotenv.config();

    const app = express();

    app.use(bodyParser.json())
    app.use(logger);
    app.use(cors);

    await initDB();

    app.listen(process.env.PORT, () => {
        console.log(`Server listening on port ${process.env.PORT}`); 
    });
    
    routes(app);
}

startServer();