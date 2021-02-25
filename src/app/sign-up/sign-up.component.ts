import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { signUpModel } from './signUp.mode';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  error : boolean = false;
  signup = new signUpModel();
  constructor(private route : Router) { }

  ngOnInit(): void {
  }

  singUp(form : NgForm){
    if(form.value.psw != form.value.pswRepeat){
      this.error = true;
      return;
    }
    else{
      this.error = false;
    }

    this.signup.username = form.value.uname;
    this.signup.email = form.value.email;
    this.signup.password=form.value.psw;
    this.signup.repeatPassword=form.value.pswRepeat;

   //Demo Routing
  //  this.route.navigate(['Route'])

  }

}
