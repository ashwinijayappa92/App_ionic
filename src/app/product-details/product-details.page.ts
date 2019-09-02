import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../services/products.service';
import {NavController} from '@ionic/angular';
import {ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  products;
  routId;
  constructor(private serv:ProductsService,private route:ActivatedRoute,private nav:NavController) {
    
  }

  ngOnInit() {
    console.log("cmg here");
    this.route.paramMap.subscribe((paramMap)=>{
      if(!paramMap.has('product-details')){
        return
      }
     this.routId = +paramMap.get('product-details');
     console.log('id',this.routId);
      this.products =  this.serv.getIdProducts(this.routId);
      console.log('this.loadedRecipe',this.products)
    })
  }

  navigate(){
    this.nav.navigateBack('home')
  }
}
