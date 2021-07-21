import { TokenService } from './../Services/token.service';
import { Router } from '@angular/router';
import { LoanService } from './../Services/loan.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBarModule } from '@angular/material';

@Component({
  selector: 'app-userreg',
  templateUrl: './userreg.component.html',
  styleUrls: ['./userreg.component.css']
})
export class UserregComponent implements OnInit {

  public letters = "HAT";
  public load = false;
  public starts = '00';


  public form = {
      firstname: null,
      lastname: null,
      email: null,
      phone: null,
      password: null,
      acct_type: null,
      password_confirmation: null,
      clientID: `${this.letters}`+Math.floor(Math.random()*200000),
      accountno: `${this.starts}`+Math.floor(10000000 + Math.random() * 90000000)
  }

  public error = [];
  public clientID;
  public durationInSeconds = 5;
  
  constructor(
    private api: LoanService,
    private route: Router,
    private token: TokenService,
    ) { }

  ngOnInit(): void {
    
  }

  onSubmit(){
    let fund_form = {
      firstname: this.form.firstname,
      surname: this.form.lastname,
      email: this.form.email,
      phone: this.form.phone,
      fund: 0,
      loan: 0,
      total_balance: 0,
      accountno: this.form.accountno
    }
    this.load = true;

    let newform = {
      firstname: this.form.firstname,
      lastname: this.form.lastname,
      email: this.form.email,
      phone: this.form.phone,
      password: this.form.password,
      password_confirmation: this.form.password_confirmation,
      acct_type: this.form.acct_type,
      clientID: JSON.parse(localStorage.getItem('clientId')),
      accountno: this.form.accountno,
    }

    let fund_form2 = {
      firstname: newform.firstname,
      surname: newform.lastname,
      email: newform.email,
      phone: newform.phone,
      fund: 0,
      loan: 0,
      total_balance: 0,
      accountno: newform.accountno
    }

  if(JSON.parse(localStorage.getItem('clientId'))){

    this.api.signup(newform).subscribe(
     data => {
       console.log(data);
       this.handleSignup(data)
       if (data) {
         this.api.funds(fund_form2).subscribe(data => {
            if (data) {
              this.load = false;
            }
         }, 
            error => console.log(error)
         )
       }
     },
     error =>this.handleError(error),
     );
  }
  else {
    this.api.signup(this.form).subscribe(
      data => {
        console.log(data);
        this.handleSignup(data)
        if (data) {
          this.api.funds(fund_form).subscribe(data => {
             if (data) {
               this.load = false;
             }
          }, 
             error => console.log(error)
          )
        }
      },
      error =>this.handleError(error),
      );
  }

  }

  handleSignup(data){
    this.token.handle(data.access_token);
    this.route.navigate(['/login']);
  }

  handleError(error){
    this.error = error.error.errors;
    if(error){
      this.form.password = "";
      this.form. password_confirmation = "";
    }
}

}