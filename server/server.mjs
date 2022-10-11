import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const PORT = 8080;

app.use(cors());
app.use(bodyParser.json());
app.listen(PORT, () => {
  console.log(`HOLAAA server's running on ${PORT}. Better go catch it.`);
})
app.get('/', (req, res) => res.json('Welcome to the API'));

