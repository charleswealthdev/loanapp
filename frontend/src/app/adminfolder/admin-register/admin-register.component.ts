import { AdmintokenService } from './../Servicefolder/admintoken.service';
import { Router } from '@angular/router';
import { OfferloanService } from './../Servicefolder/offerloan.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {

  public letters = "ADM";
  public load = false;
  public starts = '00';

  public form = {
    firstname: null,
    lastname: null,
    email: null,
    phone: null,
    acct_type: null,
    password: null,
    password_confirmation: null,
    adminID: `${this.letters}`+Math.floor(Math.random()*200000),
    accountno: `${this.starts}`+Math.floor(10000000 + Math.random() * 90000000)
}

public error = [];
public durationInSeconds = 5;

  constructor(
    private api: OfferloanService,
    private route: Router,
    private token: AdmintokenService,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.load = true;
     this.api.adminsignup(this.form).subscribe(
      data => {
        console.log(data);
        this.handleSignup(data)
      },
      error =>this.handleError(error),
      );
  }

  handleSignup(data){
    this.token.handle(data.access_token);
    this.route.navigate(['/admin_signin']);
  }

  handleError(error){
    this.error = error.error.errors;
    if(error){
      this.form.password = "";
      this.form. password_confirmation = "";
    }
}

}
