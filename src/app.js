const express = require('express');
const Requests = require('./routes/requestRoute');
 
const app = express();

app.get('/', (req, res) => {
  // res.json({ status: 'success', message: 'Welcome to my serverrrrrrre' });
  res.json({ message: 'WELCOME TO SEQUELIZE-POSTGRES API' });
});
 
// request middleware
app.use(express.json());
app.use('/Request',Requests);

const PORT = process.env.PORT || 5000; 
 
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));

module.exports = app;