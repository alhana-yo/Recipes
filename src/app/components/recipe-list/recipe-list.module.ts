import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RecipeListComponent } from './recipe-list/recipe-list.component';



@NgModule({
  declarations: [RecipeListComponent],
  imports: [
    CommonModule
  ],
  exports: [RecipeListComponent]
})
export class RecipeListModule { }
