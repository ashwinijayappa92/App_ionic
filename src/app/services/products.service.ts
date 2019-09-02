import { Injectable } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
const url = 'http://134.209.147.129:3001';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
private products = [
 {
  id:1,
  name:'fertmax124',
  mrp:'12',
  unit:'kg',
  category:'prods567',
  company:'zilla',

},
{
  id:2,
  name:'agriCopla',
  mrp:'12',
  unit:'kg',
  category:'prodsr34',
  company:'zilla',

},
{
  id:3,
  name:'SeedMary',
  mrp:'12',
  unit:'kg',
  category:'prods12',
  company:'zilla',

},
{
  id:4,
  name:'SeedsGrow',
  mrp:'12',
  unit:'kg',
  category:'prods1',
  company:'zilla',

}

]

  constructor(private http:HttpClientModule) { }

  allProducts(){
    return this.products;
  }

  getIdProducts(id:number){
    console.log('id',id);
  return {...this.products.find((ele)=>{
      return ele.id == id;
        })
     }
    }
deleteProd(id){
    this.products.forEach((ele,index)=>{
      if(ele.id == id){
        this.products.splice(index,1)
      }
    })
}

moreProducts(val){
  if(val.id == null){
    const maxId = this.products.reduce((e1,e2)=>{
      return (e1>e2 ? e1: e2)
    }).id
        val.id =maxId+1 ;
      this.products.push(val);
    }
   
  }

}
