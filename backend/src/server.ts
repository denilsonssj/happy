import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const PORT = process.env.PORT || 3333;
const app = express();
app.use(cors);
app.use(bodyParser.json());

app.listen(PORT);