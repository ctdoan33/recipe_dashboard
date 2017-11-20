import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../recipe.service';
import { Router } from '@angular/router';
import { Recipe } from '../recipe';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

	recipe=new Recipe();

	constructor(private _recipeService: RecipeService, private _router: Router) { }

	ngOnInit() {
	}

	onSubmit(){
		this.recipe.chef=this._recipeService.user;
		this._recipeService.create(this.recipe, (res)=>{
			this._router.navigateByUrl("/recipes/update/"+res._id);
		})
	}
}
