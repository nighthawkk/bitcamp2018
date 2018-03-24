const route = require('express').Router();
const path = require('path');
const mentorRequest =require('../mongo/models').models.mentorRequest;

route.get('/', (req,res) => {
	res.sendFile(path.join(__dirname,'../frontendWorks/HTMLfiles/mentor.html'));
});

route.post('/', (req,res) => {

	mentorRequest.createNew({
		username: req.body.username,
		region: req.body.region,
		skills: req.body.skills,
		mentor: req.body.mentor,
		
		
	})
		.then(() => {
			console.log('sent Mentor Request to database')
		})
		.catch((err) => console.log(err))
})

route.post('/getMentor', (req,res) => {
	mentorRequest.findOne({
		username: req.body.username
	})
	.then((data) => {
		res.send({data: data})
	})
})

module.exports.route = route;
