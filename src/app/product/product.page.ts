import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../services/products.service';
import {NavController} from '@ionic/angular';
import {ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  products;
  constructor(private serv:ProductsService,private route:ActivatedRoute) {
    
   }

  // ngOnInit() {
  //   this.route.paramMap.subscribe((param) =>{
  //     if(!param.has('productId')){
  //       return
  //     }
  //     const id =  param.get('productId');
  //     console.log('id',id);
  //     this.products = this.serv.getIdProducts(id);
  //    });
    
  // }

  ngOnInit() {
    // this.route.paramMap.subscribe((paramMap)=>{
    //   if(!paramMap.has('productId')){
    //     return
    //   }
    //  const routId = paramMap.get('productId');
    //  console.log('id',routId);
    //   this.products =  this.serv.getIdProducts(routId);
    //   console.log('this.loadedRecipe',this.products)
    // })
  }

}
