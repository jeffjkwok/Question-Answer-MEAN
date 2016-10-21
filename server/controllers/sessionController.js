var mongoose = require('mongoose');
var User = mongoose.model('User');
function sessionConstructor(){
	this.login = function(req, res){
		User.findOne({username: req.body.username} , function(err, user){
			if(!user){
				var user = new User(req.body)
				user.save(function(err, data){
					if(err){
						console.log('Error: ', err)
					} else {
						req.session.user = data
						req.session.save()
						return res.json({user: data})
					}
				})
			} else if( req.body.username == user.username){
				console.log(user.username, 'exists, now logging in')
				req.session.user = user
				req.session.save()
				return res.json({user: user})
			}
		})
	}
	this.logout = function(req, res){
		console.log(req.session.user.username, 'is logging off')
		req.session.destroy()
		res.redirect('/')
	}
	this.checkUser = function(req, res){
		if(req.session.user){
			res.json({user: req.session.user})
		} else {
			res.json({user: null})
		}
	}
}
module.exports = new sessionConstructor()