import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  emptyLogin : boolean = false;
  emptySignUp : boolean = false;

  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem("loginUsername") == null){
      this.emptyLogin = true;
    }

    if(localStorage.getItem("SignUpUsername") == null){
      this.emptySignUp = true;
    }
  }

}
