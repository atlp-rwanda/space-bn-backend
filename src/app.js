import express from 'express';
import dotenv from 'dotenv';
import rooms from './routes';
import hotel from './routes';

dotenv.config();

const app = express();

app.use(rooms);
app.use(hotel);

// app.use(json());
// app.use(urlencoded( { extended:false} ))

app.get('/', (req, res) => {
  res.json({ status: 'success', message: 'Welcome to my server' });
});

export default app;


