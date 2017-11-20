var mongoose=require('mongoose');
var RecipeSchema=new mongoose.Schema({
	name: {type: String, required: [true, "Name is required"]},
	chef: {type: String, required: [true, "Chef is required"]},
	rating: {type: Number, default: 0},
	ingredients: {type: Array, default: []}
}, {timestamps: true});
mongoose.model("Recipe", RecipeSchema);