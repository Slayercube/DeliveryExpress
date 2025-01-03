const express = require('express')
const cors = require('cors')
require('dotenv').config()
const pool = require('./db/pool')
const bodyParser = require('body-parser')



const app = express()
app.use(express.json())
app.use(cors())
app.use(bodyParser.json())

// Import routes
const users = require('./routes/users.routes')
const deleteRoutes = require('./routes/delete.routes')
const updateRoutes = require('./routes/put.routes')
const items = require('./routes/itemspec.routes')
const authRoutes = require('./routes/auth.routes')

// Use routes
app.use('/user', deleteRoutes)
app.use('/users', users)
app.use('/items', items)
app.use('/update', updateRoutes)
app.use('/auth', authRoutes);

// Check database connection
(async () => {
  try {
    const connection = await pool.promise().getConnection()
    console.log('Database connected...')
    connection.release()
  } catch (err) {
    console.error('Unable to connect to the database:', err)
  }
})()

// Start the server
const PORT = process.env.PORT || 3002
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
