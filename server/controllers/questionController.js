var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');
function questionConstructor(){
	this.showQuestions = function(req, res){
		Question.find({}, function(err, questions){
			if(err){
				console.log('error getting questions')
			} else {
				return res.json({questions: questions})
			}
		})
	}
	this.showQuestion = function(req,res){
		Question.findOne({_id: req.params.id}).populate('_answers').exec(function(err, question){
			if(err){
				console.log('error getting question')
			} else {
				return res.json({question: question})
			}
		})

	}
	this.postQuestion = function(req, res){
		var question = new Question(req.body)
		question.save(function(err, data){
			if(err){
				console.log('posting question error')
			} else {
				console.log('question added')
				return res.json({question: data})
			}
		})
	}
	this.postAnswer = function(req, res){
		Question.findOne({_id: req.body.id}, function(err, question){
			if(question){
				var answer = new Answer(req.body.answer)
				answer._question = question._id
				answer.save(function(err){
					question._answers.push(answer)
					question.save(function(err){
						if(err){
							console.log('answer error: ',err);
						} else {
							console.log('answer added');
							return res.json({question: question})
						}
					})
				})
			}
		})


	}
	this.like = function(req,res){
		console.log('liked!')
		Answer.update({_id: req.params.id}, req.body, function(err){
			if(err){
				return res.json({status: false})
			}
			return res.json({status:true})
		})
	}

}
module.exports = new questionConstructor()