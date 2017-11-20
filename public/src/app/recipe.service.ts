import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class RecipeService {

	user;

	constructor(private _http: Http) { }

	all(callback){
		this._http.get('/all').subscribe(
			(res)=>{
				callback(res.json());
			},
			(err)=>{
				console.log(err);
			}
		);
	};

	one(id, callback){
		this._http.get('/one/'+id).subscribe(
			(res)=>{
				callback(res.json());
			},
			(err)=>{
				console.log(err);
			}
		);
	};

	create(data, callback){
		this._http.post('/recipes', data).subscribe(
			(res)=>{
				callback(res.json());
			},
			(err)=>{
				console.log(err);
			}
		);
	};

	update(data, callback){
		this._http.put('/recipes/'+data._id, data).subscribe(
			(res)=>{
				callback(res.json());
			},
			(err)=>{
				console.log(err);
			}
		);
	};
}
