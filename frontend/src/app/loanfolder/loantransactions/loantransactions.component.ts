import { Router } from '@angular/router';
import { OfferloanService } from 'src/app/adminfolder/Servicefolder/offerloan.service';
import { LoanService } from 'src/app/Services/loan.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loantransactions',
  templateUrl: './loantransactions.component.html',
  styleUrls: ['./loantransactions.component.css']
})
export class LoantransactionsComponent implements OnInit {

  public loggedUser = JSON.parse(localStorage.loggedUser).user;
  public loanlists = [];
  p: number = 1;
  filterTerm: string;
  totalamount = 0;
  totalinterest = 0;

  constructor(
    public api: LoanService,
    public adminApi: OfferloanService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.adminApi.getrequests().subscribe((data:any) => {
        data.map((el) => {
          if(el.status == "pending" && el.id == this.loggedUser.id){
           return;
          }  
          else if((el.status == "approved") && (el.paid_status == "pending") && (el.id == this.loggedUser.id)){
            let totalunpaidloan = [];
            let totalunpaidloaninterest = [];
            totalunpaidloan.push(+el.amount);
            let reduceramount = (acc, cur) => {
              return acc + (Number(cur));
            };

            this.totalamount = totalunpaidloan.reduce(reduceramount, 0);
            totalunpaidloaninterest.push(+el.total);
            
            let reducerInterest = (acc, cur) => {
              return acc + (Number(cur));
            };

            this.totalinterest = totalunpaidloaninterest.reduce(reducerInterest, 0);
            this.loanlists.push(el)
          }
           else if(el.status == "approved" && el.id == this.loggedUser.id){
            this.loanlists.push(el)
          }
        })
    })
  }

}
