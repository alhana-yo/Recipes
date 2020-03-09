import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RecipeDetailModule } from '../recipe-detail/recipe-detail.module';
import { RecipeItemModule } from '../recipe-item/recipe-item.module';
import { RecipeListModule } from '../recipe-list/recipe-list.module';
import { RecipesComponent } from './recipes/recipes.component';



@NgModule({
  declarations: [RecipesComponent],
  imports: [
    CommonModule, RecipeDetailModule, RecipeItemModule, RecipeListModule
  ],
  exports: [RecipesComponent]
})
export class RecipesModule { }
