import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newamount',
  templateUrl: './newamount.component.html',
  styleUrls: ['./newamount.component.css']
})
export class NewamountComponent implements OnInit {

  public amount;

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  proceedtowithdraw(){
   if(!this.amount){
     return;
   } else{
     localStorage.setItem("amount", JSON.stringify({amount:this.amount}));
     this.router.navigate(["/sidebar/acct_type"]);
   }
  }

  backhome(){
    this.router.navigate(['/sidebar/canceloperation']);
    setTimeout(() => {
      this.router.navigate(['/sidebar/dashboard']);
    }, 3000);
  }

}
