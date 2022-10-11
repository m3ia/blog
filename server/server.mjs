import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import pgPromise from 'pg-promise';

const app = express();
const PORT = 8080;
const pgp = pgPromise({});
const db = pgp('postgres://localhost:5432/blog');

app.use(cors());
app.use(bodyParser.json());
app.listen(PORT, () => {
  console.log(`HOLAAA server's running on ${PORT}. Better go catch it.`);
})
app.get('/', (req, res) => res.json('Welcome to the API'));

