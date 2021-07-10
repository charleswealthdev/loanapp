import { AdminService } from './../Servicefolder/admin.service';
import { AdmintokenService } from './../Servicefolder/admintoken.service';
import { OfferloanService } from './../Servicefolder/offerloan.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(
    private api: OfferloanService,
    private token: AdmintokenService,
    private route: Router,
    private Auth: AdminService
    ) { }

  public load = false;
  public form = {
    email: null,
    password: null
  }

  public error = null

  ngOnInit(): void {
  }
  
  onSubmit(){
    this.load = true;
    this.api.adminlogin(this.form).subscribe(data => {
      this.handleLogin(data);
      if(data){
        localStorage.setItem('loggedAdmin', JSON.stringify(data));
        this.load = false;
      }
    },
    error => this.handleError(error),
    );
  }
  
  handleLogin(data){
    this.token.handle(data.access_token);
    this.Auth.changeAutho(true);
    this.route.navigate(['/admin_navigations/admindashboard']);
    }
    
    handleError(error){
      this.error = error.error.error;
      if(error){
        this.form.password = "";
      }
  }

}
