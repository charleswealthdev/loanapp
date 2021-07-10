import { LoanService } from './../../Services/loan.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent implements OnInit {

  constructor(
    public router: Router,
    public api: LoanService
  ) 
  { 
    this.process();
  }
  public withdrawdetails = JSON.parse(localStorage.amount);
  public loggedUser = JSON.parse(localStorage.loggedUser).user.id;
  public texts = "Transaction in progress, pls note that cash is no retractable";
  public subtext = "Pls wait ...";
  public cancelbutton = false;

  ngOnInit(): void {
  }

  process(){
      this.api.getfunds().subscribe((data:any) => {
          let findmatched = data.find((u) => u.id == this.loggedUser);
          if((findmatched) && (this.withdrawdetails.amount > findmatched.fund)){
            this.texts = "Sorry, your selected amount is greater than your account balance";
            this.subtext = "Cancel the operation!";
            this.cancelbutton = true;
          } else if((findmatched) && (this.withdrawdetails.amount < findmatched.fund)) {
            let withdrawnamount = findmatched.fund - this.withdrawdetails.amount;
            let myfunds = {fund : withdrawnamount};
            this.api.editfund(this.loggedUser, myfunds).subscribe((data:any) => {
              if(data){
                let forms = {
                  id: this.loggedUser,
                  firstname: "Self",
                  surname: "withdrawal",
                  phone: findmatched.phone,
                  email: findmatched.email,
                  accountno: findmatched.accountno,
                  amount: this.withdrawdetails.amount,
                  total: withdrawnamount,
                  name: 'Debit alert!'
                }
                this.api.transaction(forms).subscribe((data:any) => {
                  if(data){
                    let details = {
                      id : this.loggedUser,
                      name: "Debit alert!"
                    }
                      this.api.notifications(details).subscribe((data:any) => {
                          if(data){
                        let firstindex = findmatched.accountno[0];
                        let secondindex = findmatched.accountno[1];
                        let thirdindex = findmatched.accountno[2];
                        thirdindex = 'x'; 
                        let fourthindex = findmatched.accountno[3];
                        fourthindex = 'x'; 
                        let fifthindex = findmatched.accountno[4];
                        fifthindex = 'x'; 
                        let sixindex = findmatched.accountno[5];
                        sixindex = 'x';
                        let sevenindex = findmatched.accountno[6];
                        let eightindex = findmatched.accountno[7];
                        let nineindex = findmatched.accountno[8];
                        let tenindex = findmatched.accountno[9];

                        let encryptedaccount = firstindex + secondindex + thirdindex + fourthindex + fifthindex + sixindex + sevenindex + eightindex + nineindex + tenindex;

                            let receiptdetails = {
                              myname: "Self withdraw",
                              accountno: encryptedaccount,
                              withdrawn: this.withdrawdetails.amount,
                              // total: withdrawnamount,
                              email: findmatched.email
                           }
                           if(this.withdrawdetails.receipt == "no"){
                                return this.router.navigate(['/sidebar/dashboard']);
                           } else if(this.withdrawdetails.receipt == "yes"){
                             this.api.withdrawmail(receiptdetails).subscribe((data:any) => {
                               if(data){
                                this.router.navigate(['/sidebar/dashboard']);
                               }
                             }, err => console.log(err))
                                
                               } else{
                                 console.log("notification error");
                               }
                           }
                      })
                  } else {
                    console.log("Transaction error")
                  }
                })
              } else {
                console.log("fund error");
              }
            })
          }
      })
  }

  canceloperation(){
    this.router.navigate(['/sidebar/canceloperation']);
    setTimeout(() => {
      this.router.navigate(['/sidebar/dashboard']);
    }, 3000);
  }  

}


