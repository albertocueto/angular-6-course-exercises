import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../../models/recipe.models';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input()
  recipeIndex: number;
  @Input()
  recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
