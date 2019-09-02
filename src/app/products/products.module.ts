import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProductsPage } from './products.page';
import {SharedComponentsModule} from '../components/shared.components.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: ProductsPage }]),
    SharedComponentsModule
  ],
  declarations: [ProductsPage],
  entryComponents:[]
})
export class ProductsPageModule {}
