import {Component, OnInit} from '@angular/core';
import {Recipe} from '../../models/recipe.models';
import {RecipesService} from '../../services/recipes.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  recipeId: number;

  constructor(private recipesService: RecipesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // this.recipe = this.recipesService.getRecipe(+this.route.snapshot.params['id']);
    this.route.params.subscribe((params: Params) => {
      this.recipeId = +params['id'];
      this.recipe = this.recipesService.getRecipe(this.recipeId);
    });
  }

  onAddToShoppingList(event) {
    this.recipesService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteRecipe(index: number) {
    this.recipesService.deleteRecipe(this.recipeId);
    this.router.navigate(['/recipes']);
  }

}
