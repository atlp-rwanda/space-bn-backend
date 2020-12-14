import app from './app.js';

import { json, urlencoded } from 'body-parser';

import auth from './routes/authRoute';

app.use(json());
app.use(urlencoded({ extended: false }));

app.use('/auth', auth);


const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
