import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../services/products.service';
import {ModalController,NavController} from '@ionic/angular';
import {DetailsPage} from '../modal/details/details.page';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
products=[];
  constructor(private serv:ProductsService,private navContl:NavController,private modal:ModalController) { }

  ngOnInit() {
   this.products = this.serv.allProducts();
  }
  // viewProd(id){
  //   this.navContl.navigateForward(`/${id}`);
  // }
  deleting(id){
   console.log("deleting id",id);
   this.serv.deleteProd(id);

  }

  async modalPresent(data,type){
    console.log("data",data,type);
    if(type =='edit'){
      const modal = await this.modal.create({
        component:DetailsPage,
        componentProps:{product_id :data, type:'edit',}
       });
       await modal.present();
    }
    else if(type == "add"){
      const modal= await this.modal.create({
        component:DetailsPage,
        componentProps:{data:data,type:"add"}
      });
      await modal.present();
    }
   

    
  }

}
