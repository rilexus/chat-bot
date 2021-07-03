import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

import {MessagesController} from './messages'
import {RootController} from "./root";

const port = 8000 // TODO: move to env file (install dotenv)

const configuredServer = () => {
	// TODO: move to own file
	const server = express()
	
	server.use(bodyParser.urlencoded({ extended: false }))
	server.use(bodyParser.json())
	server.use(cors())
	
	return server
}

// express app
const server = configuredServer();

// register routes
// TODO: move to own file
server.use('/', RootController)
server.use('/', MessagesController)
server.use((req, res, next) => {
	res.status(404).send('Not found');
})

// start server
server.listen(port, () => {
	console.log(`Backend is running at http://localhost:${port}`)
})
