import { LoanService } from 'src/app/Services/loan.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amount',
  templateUrl: './amount.component.html',
  styleUrls: ['./amount.component.css']
})
export class AmountComponent implements OnInit {

  public amount;
  public id = JSON.parse(localStorage.getItem('loggedUser')).user.id;

  constructor(
    public actroute: ActivatedRoute,
    public router: Router,
    public api: LoanService
  ) { }

  ngOnInit(): void {
  }

  newamount(){
    if(this.id){
      this.router.navigate([`/sidebar/newamount`])
    }
  }

  checkamount(){
    localStorage.setItem("amount", JSON.stringify({amount:this.amount}));
    this.router.navigate(['/sidebar/acct_type']);
  }

  backhome(){
    this.router.navigate(['/sidebar/canceloperation']);

    setTimeout(() => {
      this.router.navigate(['/sidebar/dashboard']);
    }, 3000);
  }

}
