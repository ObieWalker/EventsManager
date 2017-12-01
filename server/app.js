import express from 'express'
import bodyParser from 'body-parser'
import logger from 'morgan'
import dotenv from 'dotenv'
import router from './routes/v1'

const port = process.env.PORT || 8080

const app = express() // init express

dotenv.config()// add env file

// logs to console
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

app.use('/', router)
app.use('/events', router)
app.use('/centers', router)
app.use('/users', router)
app.get('/', (req, res) => {
  res.status(200).send('All the routes for Event Manager')
})

app.listen(port, () => {
  console.log('Server running on port', port);
})

export default app
