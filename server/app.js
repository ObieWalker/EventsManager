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
app.use('api/v1/events', router)
app.use('api/v1/centers', router)
app.use('api/v1/users', router)
app.get('/', (req, res) => {
  res.status(200).send('The Event Manager Portal says HI')
})

app.get('/*', (req, res) => {
  // When there is an invalid request
  res.status(404).json({error: {name: 'Error', message: 'Invalid URL Request'}
  })
})

app.listen(port, () => {
  console.log('Server running on port', port)
})

export default app
