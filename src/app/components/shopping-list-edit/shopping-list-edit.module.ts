import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';



@NgModule({
  declarations: [ShoppingListEditComponent],
  imports: [
    CommonModule
  ],
  exports: [ShoppingListEditComponent]

})
export class ShoppingListEditModule { }
