import express, { Express, Request, Response, Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

//For env File 
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.json([
        { name: 'test', age: 15 },
        { name: 'test2', age: 22 }
    ])
});

app.listen(port, () => {
    console.log(`Server is up and running at http://localhost:${port}`);
});