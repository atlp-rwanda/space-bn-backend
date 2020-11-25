import express, { json } from 'express';

const app = express();

app.use(json());

app.get('/', (req, res) => {
  res.json({ status: 'success', message: 'Welcome to my server' });
});

const PORT = process.env.PORT || 3000;

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));

export default app;

// /* eslint-disable import/extensions */
// import express from 'express';
// // eslint-disable-next-line import/no-extraneous-dependencies
// import { json, urlencoded } from 'body-parser';
// // eslint-disable-next-line import/no-unresolved
// import config from './src/config/config';

// const app = express();

// const CONNECTION_URL = config.ENV !== 'test' ? config.CONNECTION_URL12 : config.CONNECTION_URL;
// // eslint-disable-next-line no-console
// console.log(CONNECTION_URL);
// mongoose.connect(`${CONNECTION_URL}`, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
//   // eslint-disable-next-line no-console
//   .then(() => console.log('connected database successfully....'))
//   // eslint-disable-next-line no-console
//   .catch((err) => console.log('Failed to connect to database!', err));

// app.use(json());
// app.use(urlencoded({ extended: true }));

// app.get('/', (req, res) => {
//   res.send('Welcome to my server').status(200);
// });

// export default app;
