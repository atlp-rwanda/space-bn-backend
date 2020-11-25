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

