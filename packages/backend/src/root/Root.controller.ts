import express from 'express';

const RootController = express.Router();

RootController.get('/', (req,res) => {
	res.json({data: 'root'})
})

export { RootController }
