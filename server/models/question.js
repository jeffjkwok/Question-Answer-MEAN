var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var QuestionSchema = new Schema({
	question: {type: String},
	description: {type: String},
	username: {type: String},
	_answers:[{type: Schema.Types.ObjectId, ref:'Answer'}]
});
mongoose.model('Question', QuestionSchema)