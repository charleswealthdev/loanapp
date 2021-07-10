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
          } else if(el.status == "approved" && el.id == this.loggedUser.id){
            this.loanlists.push(el)
          }
        })
    })
  }

}
