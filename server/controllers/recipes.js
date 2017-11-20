var mongoose=require('mongoose');
var Recipe=mongoose.model("Recipe");
module.exports={
	all: function(req, res){
		Recipe.find({}, function(err, recipes){
			if(err){
				res.json(err);
			}else{
				res.json(recipes);
			};
		});
	},
	one: function(req, res){
		Recipe.findOne({_id: req.params.id}, function(err, recipe){
			if(err){
				res.json(err);
			}else{
				res.json(recipe);
			};
		});
	},
	create: function(req, res){
		var recipe=new Recipe(req.body);
		recipe.save(function(err, recipe){
			if(err){
				res.json(err);
			}else{
				res.json(recipe);
			};
		});
	},
	update: function(req, res){
		Recipe.update({_id: req.params.id}, req.body, function(err){
			if(err){
				res.json(err);
			}else{
				res.json({success: true});
			};
		});
	}
};