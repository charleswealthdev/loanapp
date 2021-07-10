import { Router } from '@angular/router';
import { LoanService } from './../Services/loan.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tokencomp',
  templateUrl: './tokencomp.component.html',
  styleUrls: ['./tokencomp.component.css']
})
export class TokencompComponent implements OnInit {

  public newtoken;
  pin: number;

  constructor(
    public api : LoanService,
    public router : Router
  ) { }

  ngOnInit(): void {
    this.newtoken = JSON.parse(localStorage.getItem("newtoken"));
  }

  checkpin(){

     if (this.pin == this.newtoken.body) {
       this.router.navigate(['/sidebar/user-wallet']);
      } else{
      return this.pin;
     }

  }

}
