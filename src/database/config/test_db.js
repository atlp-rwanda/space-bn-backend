import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'test_db',
  password: 'andela2020'
});

module.exports = pool;
