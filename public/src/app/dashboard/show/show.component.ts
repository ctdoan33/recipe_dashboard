import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

	recipeid;
	
	recipe;

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

}
