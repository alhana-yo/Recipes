import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShoppingListEditModule } from '../shopping-list-edit/shopping-list-edit.module';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';



@NgModule({
  declarations: [ShoppingListComponent],
  imports: [
    CommonModule, ShoppingListEditModule
  ],
  exports: [ShoppingListComponent]

})
export class ShoppingListModule { }
