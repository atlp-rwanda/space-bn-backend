import express, { json } from 'express';

const app = express();

app.use(json());

app.get('/', (req, res) => {
  res.json({ status: 'success', message: 'Welcome to my server' });
});



export default app;

