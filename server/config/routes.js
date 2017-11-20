var recipe=require('../controllers/recipes.js');
module.exports=function(app){
	app.get("/all", function(req, res){
		recipe.all(req, res);
	});
	app.get("/one/:id", function(req, res){
		recipe.one(req, res);
	});
	app.post("/recipes", function(req, res){
		recipe.create(req, res);
	});
	app.put("/recipes/:id", function(req, res){
		recipe.update(req, res);
	});
	app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"));
    });
};