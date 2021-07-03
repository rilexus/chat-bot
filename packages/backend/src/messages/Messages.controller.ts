import express from 'express'
const MessagesController = express.Router()

MessagesController.get('/messages', (req, res) => {
	res.json({data: 'Messages GET'})
});

MessagesController.post('/messages', (req, res) => {
	res.json({data: 'Messages POST'})
});

export {MessagesController}
