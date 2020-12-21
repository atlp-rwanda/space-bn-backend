import express, { urlencoded, json } from 'express';

import dotenv from 'dotenv';

import hotelRoutes from './routes/hotelRoute';

dotenv.config();

const app = express();

app.use(json());
app.use(urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.json({ status: 'success', message: 'Welcome to my server' });
});

app.use(`${process.env.API_VERSION}/hotels`, hotelRoutes);

export default app;
