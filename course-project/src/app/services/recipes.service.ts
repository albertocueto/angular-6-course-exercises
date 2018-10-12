import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.models';
import { Ingredient } from '../models/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe(
        'Pulpo al ajillo',
        'A very tasty recipe',
        'https://c.pxhere.com/photos/52/90/sea_food_octopus_greek_food_dish_meal_greek_food_photography_cuisine-1175058.jpg!d',
        [new Ingredient('pulpo', 1), new Ingredient('ajos', 2)]),
    new Recipe(
        'Sopa de tortilla',
        'A very tortilly recipe',
        'https://cdn2.cocinadelirante.com/sites/default/files/images/2017/05/sopadetortilla.jpg',
        [new Ingredient('tortillas', 10), new Ingredient('queso peanela', 2)]),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice(); // This way we only get a copy, not the whole reference, it's a new array
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  getRecipe(id: number) {
    return this.recipes[id];
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
