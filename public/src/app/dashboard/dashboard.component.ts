import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	user;

	constructor(private _recipeService: RecipeService, private _router: Router) {
		this.user=this._recipeService.user;
	}

	ngOnInit() {
		if(!this.user){
			this._router.navigateByUrl("/");
		}
	}

	logout(){
		this._recipeService.user=null;
		this._router.navigateByUrl("/");
	}

}
