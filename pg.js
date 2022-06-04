const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'sdc',
  password: 'root',
  port: 5432,
})

const queryProductPage = (page, count, response) => {
    pool.query('SELECT * FROM "Products" ORDER BY id ASC '
    + 'LIMIT ' + count + ' OFFSET ' + page, (error, results) => {
        if (error) { throw error }
        response.status(200).json(results.rows)
      })
  }


module.exports = {
    queryProductPage
}