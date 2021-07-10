import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {

  public receiptaction;

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  proceed(){
    let getamount = JSON.parse(localStorage.amount);
    let spreadamount = {...getamount, receipt:this.receiptaction};
    if(!this.receiptaction){
      return;
    } else {
      localStorage.setItem("amount", JSON.stringify(spreadamount));
      this.router.navigate(["/sidebar/processwithdraw"]);
    }
  }

  
  backhome(){
    this.router.navigate(['/sidebar/canceloperation']);

    setTimeout(() => {
      this.router.navigate(['/sidebar/dashboard']);
    }, 3000);
  }

}
