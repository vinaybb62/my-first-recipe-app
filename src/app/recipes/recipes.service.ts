import { EventEmitter, Injectable } from '@angular/core';
import { ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipes.model';
import { Subject } from 'rxjs';
@Injectable()
export class RecipeService {
  recipeSelected = new Subject<Recipe>();
  recipesChanged = new Subject<Recipe[]>();

  /**private recipes: Recipe[] = [
    new Recipe('test recipe', 'this is simply a test', 'https://images.search.yahoohttps://tse3.mm.bing.net/th?id=OIP.rgIQREd8NCUZioWSVl0ElgHaHa&pid=Api&P=0&w=300&h=300com/search/images?p=recipe+images&fr=mcafee&imgurl=http%3A%2F%2Fwww.alaskafit.com%2Fwp-content%2Fuploads%2F2017%2F02%2FRecipes-Banner.jpg#id=7&iurl=http%3A%2F%2Fwww.alaskafit.com%2Fwp-content%2Fuploads%2F2017%2F02%2FRecipes-Banner.jpg&action=click' ,[
      new ingredient('meat', 1),
      new ingredient('sausage', 5)
    ]),
    new Recipe('A test recipe', 'this is simply a test', 'https://images.search.yahoohttps://tse3.mm.bing.net/th?id=OIP.rgIQREd8NCUZioWSVl0ElgHaHa&pid=Api&P=0&w=300&h=300com/search/images?p=recipe+images&fr=mcafee&imgurl=http%3A%2F%2Fwww.alaskafit.com%2Fwp-content%2Fuploads%2F2017%2F02%2FRecipes-Banner.jpg#id=7&iurl=http%3A%2F%2Fwww.alaskafit.com%2Fwp-content%2Fuploads%2F2017%2F02%2FRecipes-Banner.jpg&action=click', [
      new ingredient('bread', 8),
      new ingredient('fries', 20)
    ])
  ];*/
  private recipes: Recipe[] = [];
  constructor(private slService: ShoppingListService) {

  }
  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index: number) {
    return this.recipes.slice()[index];
  }
  addIngredientsToShoppingList(ingredients: ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
