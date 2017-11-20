import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	
	user;

	constructor(private _recipeService: RecipeService, private _router: Router) { }

	ngOnInit() {
	}

	onSubmit(){
		this._recipeService.user=this.user;
		this._router.navigateByUrl("/recipes/all");
	}

}
