import { json, urlencoded } from 'body-parser';
import app from './app';

app.use(json());
app.use(urlencoded({ extended: false }));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`server running on port ${port}`);
});
