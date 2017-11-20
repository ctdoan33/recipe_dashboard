export class Recipe{
	constructor(
		public name: string="",
		public chef: string="",
		public rating: number=0,
		public ingredients: Array<object>=[]
	){}
}