import { Component, OnInit } from '@angular/core';
import {NavParams,ModalController,ToastController} from '@ionic/angular';
import { FormGroup,Validators,FormControl, } from '@angular/forms';
import {ProductsService} from '../../services/products.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
modalData:ModalController;
editForm:FormGroup;
addForm = {
  name:'',
  category:'',
  company:'',
  unit:'',
  mrp:'',

}
modalType;
  constructor(private navParam:NavParams,private modal:ModalController,
    private toast:ToastController,private serve:ProductsService) { 
  this.modalData = this.navParam.get('product_id');
  this.modalType = this.navParam.get('type');
  console.log(this.modalType);
   console.log('getting modal data',this.modalData);
  }

  ngOnInit() {
    this.editForm = new FormGroup({
      name : new FormControl("",[Validators.required]),
      category : new FormControl("",[Validators.required]),
      mrp : new FormControl("",[Validators.required]),
      unit : new FormControl("",[Validators.required]),
      company : new FormControl("",[Validators.required]),
    })
  }

  closeModal(){
    this.modal.dismiss();
  }
  update(){
    console.log("editForm",this.editForm.value);
    this.tosterCreate('updated Successfully');
  }

  async tosterCreate(data){
    const Toasts = await this.toast.create({
      message:data,
      duration:2000,
      color:"success",
     })
    await Toasts.present();
  }

  create(){
    console.log(this.editForm.value);
    let val = this.editForm.value;
    this.serve.moreProducts(val);
    this.tosterCreate('Created Successfully');
    this.closeModal();
  }
}
