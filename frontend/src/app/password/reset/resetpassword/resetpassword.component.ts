import { TokenService } from './../../../Services/token.service';
import { LoanService } from './../../../Services/loan.service';
import { AuthService } from './../../../Services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  public form = {
    email: null,
   }

  public error = null

  constructor(
    private api: LoanService,
    private token: TokenService,
    private route: Router,
    private Auth: AuthService
  ) { }

  ngOnInit(): void {
  }
 
  onSubmit(){
    this.api.login(this.form).subscribe(
      data => this.handleLogin(data),
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
  
  }

}
