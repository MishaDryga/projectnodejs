const Pool = require('pg').Pool
const pool = new Pool({
 host: 'ec2-79-125-64-18.eu-west-1.compute.amazonaws.com',
  database: 'db0t56gmq3jrk6',
  user:'jjdoiasddkbfau',
  password: 'dfa6679dbd06285a80d32b264011ffe1ce376898a3849c77490b835fd95f34fa',
  port: 5432,
  ssl:{rejectUnauthorized:false},
})
const getUsers = (request, response) => {
    response.header("Access-Control-Allow-Origin", "*");
    pool.query('SELECT * FROM public.users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getUserById = (request, response) => {
  const id = parseInt(request.params.id)
    response.header("Access-Control-Allow-Origin", "*");
    pool.query('SELECT * FROM public.users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}







module.exports = {
  getUsers,
  getUserById  
}