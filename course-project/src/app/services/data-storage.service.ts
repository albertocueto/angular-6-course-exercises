import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {RecipesService} from './recipes.service';
import {Recipe} from '../models/recipe.models';
import {map} from 'rxjs/operators';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  backendBaseUrl = 'https://udemy-course-ng-recipe-b-bad84.firebaseio.com/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(
      private httpClient: HttpClient,
      private recipesService: RecipesService,
      private authService: AuthService
  ) {}

  storeRecipes() {
    const token = this.authService.getToken();
    return this.httpClient.put(`${this.backendBaseUrl}recipes.json?auth=${token}`, this.recipesService.getRecipes(), this.httpOptions);
  }

  getRecipes() {
    const token = this.authService.getToken();
    this.httpClient.get(`${this.backendBaseUrl}recipes.json?auth=${token}`).pipe(map((recipes: Recipe[]) => {
      recipes.forEach((recipe) => {
        if (!recipe['ingredients']) {
          console.log('a recipe doesn\'t have ingredients', recipe);
          recipe['ingredients'] = [];
        }
      });
      return recipes;
    })).subscribe(
        (recipes: Recipe[]) => {
          this.recipesService.setRecipes(recipes);
        }
    );
  }
}
