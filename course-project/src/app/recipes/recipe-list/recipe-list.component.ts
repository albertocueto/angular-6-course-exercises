import {Component, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from '../../models/recipe.models';
import {RecipesService} from '../../services/recipes.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  recipes: Recipe[];

  constructor(private recipesService: RecipesService) {
    this.recipes = recipesService.getRecipes();
  }

  ngOnInit() {
    this.subscription = this.recipesService.recipesChanged.subscribe(
        (recipes: Recipe[]) => {
          this.recipes = recipes;
        }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
