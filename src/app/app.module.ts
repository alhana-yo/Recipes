import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { RecipeDetailModule } from './components/recipe-detail/recipe-detail.module';
import { RecipeItemModule } from './components/recipe-item/recipe-item.module';
import { RecipeListModule } from './components/recipe-list/recipe-list.module';
import { ShoppingListEditModule } from './components/shopping-list-edit/shopping-list-edit.module';
import { ShoppingListModule } from './components/shopping-list/shopping-list.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HeaderModule, RecipeDetailModule, RecipeItemModule, RecipeListModule, ShoppingListModule, ShoppingListEditModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
