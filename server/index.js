require('dotenv').config()
const express = require('express')
const  sequelize = require('./db')
const PORT = 5000 || 3001
const app = express()
const fileUpload = require('express-fileupload')
const router = require('./router/index')
const modules = require('./models/models')
const ErrorMiddleware = require('./middleware/ErrorMiddleware')
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.use(fileUpload({}))
app.use('/api', router)



app.use(ErrorMiddleware)
const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, ()=>console.log(`Server started on ${PORT} port`))

    }catch (e){
console.log(e)
    }
}

 start();