import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RecipesComponent} from './recipes.component';
import {RecipeListComponent} from './recipe-list/recipe-list.component';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {RecipeDetailDefaultComponent} from './recipe-detail-default/recipe-detail-default.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RecipesRoutingModule} from './recipes-routing.module';
import {RecipeItemComponent} from './recipe-list/recipe-item/recipe-item.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RecipesRoutingModule,
      SharedModule
  ],
  declarations: [
      RecipesComponent,
      RecipeListComponent,
      RecipeDetailComponent,
      RecipeDetailDefaultComponent,
      RecipeEditComponent,
      RecipeItemComponent
  ]
})
export class RecipesModule { }
