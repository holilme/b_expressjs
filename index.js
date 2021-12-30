const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const usersRouter = require('./routes/users')

app = express()
app.use(express.json())
app.use(express.urlencoded({ extended:true }))
app.use(cors())

db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'f7D#fMo*Fn',
    database: 'holilnews'
})

// app.use('/', () => console.log('welcome'))

app.use('/users', usersRouter)


app.listen(3000, function(){
    console.log('konek port 3000 nih')
}
)
