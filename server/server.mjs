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

// GET - All Posts --------------------------------------------------------
app.get('/posts', async function (req, res) {
  try {
    const posts = await db.any('SELECT * FROM posts ORDER BY id DESC');
    res.send(posts);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

// GET - All Users --------------------------------------------------------
app.get('/users', async function (req, res) {
  try {
    const users = await db.any('SELECT * FROM users');
    res.send(users);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

// GET - All Contacts --------------------------------------------------------
app.get('/contacts', async function (req, res) {
  try {
    const contacts = await db.any('SELECT * FROM contacts');
    res.send(contacts);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

// POST - All Contacts --------------------------------------------------------
app.post('/newpost', async function (req, res) {
  const reqPost = {
    title: req.body.title,
    subheading: req.body.subheading,
    content: req.body.content,
    photo: req.body.content
  }

  const published = true;

  try {
    await db.any('INSERT INTO posts (title, subheading, content, photo, published, date_posted) VALUES ($1, $2, $3, $4, $5, CURRENT_TIMESTAMP)', [reqPost.title, reqPost.subheading, reqPost.content, reqPost.photo, published]);
    res.sendStatus(204);
  } catch (e) {
    return res.status(400).json({ e });
  }
});
