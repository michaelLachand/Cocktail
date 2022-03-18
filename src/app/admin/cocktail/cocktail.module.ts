import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CocktailRoutingModule } from './cocktail-routing.module';
import { CIndexComponent } from './c-index/c-index.component';
import { CAddComponent } from './c-add/c-add.component';
import { CEditComponent } from './c-edit/c-edit.component';
import { CDeleteComponent } from './c-delete/c-delete.component';


@NgModule({
  declarations: [
    CIndexComponent,
    CAddComponent,
    CEditComponent,
    CDeleteComponent
  ],
  imports: [
    CommonModule,
    CocktailRoutingModule
  ]
})
export class CocktailModule { }
