import { LoanService } from './../../Services/loan.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {

  public id = JSON.parse(localStorage.getItem('loggedUser')).user.id;

  constructor(
    public route: Router,
    public api: LoanService,
  ) { }

  ngOnInit(): void {

  }

  bankWithdrawal(data){
    // let {id} = this.actroute.snapshot.params;
    if(data === 'bank'){
      this.api.getfunds().subscribe((data: any) => {
         let finds = data.find((u) => u.id == this.id);
         if(finds.id == this.id){
           this.route.navigate([`/sidebar/bank`])
         } else {
           return;
         }
      })
    }

    if(data === 'loan'){
      
    }

  }

}
