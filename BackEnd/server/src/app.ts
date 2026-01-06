import express, {Request, Response} from 'express';
const app = express()

// express อ่าน json
app.use(express.json())

export default app;
