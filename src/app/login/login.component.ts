import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { loginModel } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = new loginModel();
  constructor() { }

  ngOnInit(): void {
  }

  loginEmp(form : NgForm){
    this.login.username = form.value.uname;
    this.login.password = form.value.psw;

   //Demo Service
  //  this.serviceClass.serviceMethod(serviceParameter).subscripe(
  //    res=>{

  //    },
  //    Error=>{

  //    }
  //  )


  }

}
