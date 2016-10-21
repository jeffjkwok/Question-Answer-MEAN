var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var AnswerSchema = new Schema({
	likes: {type:Number},
	username: {type:String},
	answer: {type:String},
	details: {type:String},
	_question: {type: Schema.Types.ObjectId, ref: 'Question'}
});
mongoose.model('Answer', AnswerSchema)