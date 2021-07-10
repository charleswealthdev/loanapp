import { TokenService } from './../Services/token.service';
import { LoanService } from './../Services/loan.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  constructor(
    private api: LoanService,
    private token: TokenService,
    private route: Router,
    private Auth: AuthService
    ) { }
  public load = false;
  public form = {
    email: null,
    password: null
  }

  public error = null

  ngOnInit() {
  }

  onSubmit(){
    this.load = true;
    this.api.login(this.form).subscribe(data => {
      this.handleLogin(data);
      if(data){
        localStorage.setItem('loggedUser', JSON.stringify(data));
        this.load = false;
      }
    },
      error => this.handleError(error),
      );
    }

    handleLogin(data){
      this.token.handle(data.access_token);
      this.Auth.changeAutho(true);
      this.route.navigate(['/sidebar/dashboard']);
    }
    
    handleError(error){
      this.error = error.error.error;
      if(error){
        this.form.password = "";
      }
  }

}
