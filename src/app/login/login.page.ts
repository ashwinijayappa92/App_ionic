import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {NavController,AlertController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
loginForm:FormGroup;
loginModel={
  username:'',
  password:''
}
  constructor(private navCntl:NavController,private alert:AlertController) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username : new FormControl("",[Validators.required]),
      password:new FormControl("",[Validators.required])
    })
  }

  submit(){
    console.log("login values",this.loginForm.value);
    let val =this.loginForm.value;
    if(val.username.trim().length <=0 || val.username.length <=0 ||val.password.trim().length <=0 || val.password.length <=0){
      this.presentAlert();
      return
    }
  else{
    this.navCntl.navigateForward('home');
   } 
  }

 async presentAlert(){
    const alert =  await this.alert.create({
      message:'please enter valid inputs',
       header:'invalid inputs',
       buttons:['cancel']
    });
 
    await alert.present();
  }
}
