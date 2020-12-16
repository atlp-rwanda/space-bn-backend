import express from 'express';

import dotenv from 'dotenv';

import hotelRoutes from './routes/hotelRoute';

// const createHotel = require('./routes/hotelRoute');
// const getHotels = require('./routes/hotelRoute');
// const deleteHotel = require('./routes/hotelRoute');
// const getHotel = require('./routes/hotelRoute');

dotenv.config();

const app = express();

// app.use(json());
// app.use(urlencoded( { extended:false} ))

app.get('/', (req, res) => {
  res.json({ status: 'success', message: 'Welcome to my server' });
});

app.use(`${process.env.API_VERSION}/hotels`, hotelRoutes);

// app.use('/createHotel', createHotel);
// app.use('/allHotels', getHotels);
// app.use('/deleteHotel/:id', deleteHotel);
// app.use('/hotel/:id', getHotel);

export default app;
