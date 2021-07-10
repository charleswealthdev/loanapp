import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acct-type',
  templateUrl: './acct-type.component.html',
  styleUrls: ['./acct-type.component.css']
})
export class AcctTypeComponent implements OnInit {

  public acct_type;

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  proceed(){
    let getamount = JSON.parse(localStorage.amount);
    let spreadamount = {...getamount, acct_type:this.acct_type};
    if(!this.acct_type){
      return;
    } else {
      localStorage.setItem("amount", JSON.stringify(spreadamount));
      this.router.navigate(["/sidebar/receipt"]);
    }
  }  
  
  cancel(){
    this.router.navigate(['/sidebar/canceloperation']);
    setTimeout(() => {
      this.router.navigate(['/sidebar/dashboard']);
    }, 3000);
  }

}
