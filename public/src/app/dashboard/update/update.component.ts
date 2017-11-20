import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../recipe.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

	recipeid;

	recipe;

	ingredient={name:"", amount:""};

	constructor(private _recipeService: RecipeService, private _route: ActivatedRoute) {
		this._route.paramMap.subscribe((params)=>{
			this.recipeid=params.get("id");
			this._recipeService.one(this.recipeid, (res)=>{
				this.recipe=res;
			})
		})
	}

	ngOnInit() {
	}

	onSubmit(){
		this.recipe.ingredients.push(this.ingredient);
		this._recipeService.update(this.recipe, (res)=>{})
		this.ingredient={name:"", amount:""};
	}
}
