import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import {HomeRoutingModule} from './home-routing.module';
import {SharedComponentsModule} from '../components/shared.components.module';
import { HomePage } from './home.page';
import {DetailsPage} from '../modal/details/details.page';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeRoutingModule,
    SharedComponentsModule,
    ReactiveFormsModule,
    HttpClientModule
    
   
  ],
  declarations: [HomePage,DetailsPage],
  entryComponents:[DetailsPage],
  exports:[SharedComponentsModule]
})
export class HomePageModule {}




