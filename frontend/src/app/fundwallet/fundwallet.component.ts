import { Router } from '@angular/router';
import { LoanService } from './../Services/loan.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fundwallet',
  templateUrl: './fundwallet.component.html',
  styleUrls: ['./fundwallet.component.css']
})
export class FundwalletComponent implements OnInit {

 value = 0;
 public user;
 public loggedUser;
 public randoms;
 public load = false;

//  public pin: Number;

  constructor(
    private api: LoanService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    this.randoms = Math.floor(100000 + Math.random() * 900000);
    this.user = {
       token : this.randoms,
       email : this.loggedUser.user.email
    }
  }
   
  sendemail() {
    this.load = true;
    this.api.sendmail(this.user).subscribe(data => {
      this.api.maildetails = data;
      if (data) {
        this.load = false;
        localStorage.setItem("newtoken", JSON.stringify(this.api.maildetails));
        this.router.navigate(['/sidebar/token']);
      }
    }, error => console.log(error) 
    )

  }

  
}

