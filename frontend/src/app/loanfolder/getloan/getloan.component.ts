import { Router } from '@angular/router';
import { LoanService } from './../../Services/loan.service';
import { Component, OnInit } from '@angular/core';
import { OfferloanService } from 'src/app/adminfolder/Servicefolder/offerloan.service';

@Component({
  selector: 'app-getloan',
  templateUrl: './getloan.component.html',
  styleUrls: ['./getloan.component.css']
})
export class GetloanComponent implements OnInit {

  public id = JSON.parse(localStorage.getItem('loggedUser')).user.id;
  public checks = true;
  public text;
  public amount;
  public interest;
  public paybacktime;
  public status;
  public load = false;

  constructor(
    public api: LoanService,
    public adminApi: OfferloanService,
    public router: Router
  ) { }

  ngOnInit(): void {
    // let myrequest = JSON.parse(localStorage.requests) || [];
    this.load = true;
      this.adminApi.getrequests().subscribe((data:any) => {
          let checkstatus = data.find((u) => u.id == this.id);
          if(checkstatus && (checkstatus.status == "pending")){
                this.checks = true;
                this.load = false;
                this.text = "Your current loan application is being reviewed, we will notify you once it is approved.";
                this.amount = checkstatus.amount;
                this.interest = checkstatus.interest;
                this.paybacktime = checkstatus.paybacktime;
                this.status = checkstatus.status;
          } else if(checkstatus && (checkstatus.status == "approved")){
                this.checks = true;
                this.load = false;
                this.text = `Your loan of $${checkstatus.amount}.00 has been approved!`;
                this.amount = checkstatus.amount;
                this.interest = checkstatus.interest;
                this.paybacktime = checkstatus.paybacktime;
                this.status = checkstatus.status;
          }
                else {
                  this.checks = false;
                   this.text = "You have not applied to loan yet!";
                }
      }, error => {
         this.load = false;
      })
  }

  listofloans(){
    this.api.getfunds().subscribe((data:any) => {
      let user = data.find((u) => u.id == this.id);
      if(!user){
          return;
      } else {
        this.router.navigate(['/sidebar/listofloans']);
      }
    })
  
  }

  getnewLoan(){
    this.router.navigate(['/sidebar/listofloans']);
  }

}
