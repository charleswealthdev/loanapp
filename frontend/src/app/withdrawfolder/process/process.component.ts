import { LoanService } from './../../Services/loan.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OfferloanService } from 'src/app/adminfolder/Servicefolder/offerloan.service';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent implements OnInit {

  constructor(
    public router: Router,
    public api: LoanService,
    public adminApi: OfferloanService
  ) 
  { 
  }
  public withdrawdetails = JSON.parse(localStorage.amount);
  public loggedUser = JSON.parse(localStorage.loggedUser).user.id;
  public texts = "Transaction in progress, pls note that cash is no retractable";
  public subtext = "Pls wait ...";
  public cancelbutton = false;
  
  ngOnInit(): void {
    this.process();
  }

  process(){

      this.api.getfunds().subscribe((data:any) => {
         let mynewdata = data;
        this.adminApi.getrequests().subscribe((data:any) => {
           let myrequest = data.filter((u) => u.id == this.loggedUser && u.paid_status === "pending");
           if(myrequest.length < 1){
            
            let findmatched = mynewdata.find((u) => u.id == this.loggedUser);
            if((findmatched) && (this.withdrawdetails.amount > findmatched.fund)){
              this.texts = "Sorry, your selected amount is greater than your account balance";
              this.subtext = "Cancel the operation!";
              this.cancelbutton = true;

            } else if((findmatched) && (this.withdrawdetails.amount < findmatched.fund)) {
              let withdrawnamount = findmatched.total_balance - this.withdrawdetails.amount;
              let withdrawnamount2 = findmatched.fund - this.withdrawdetails.amount;
              let myfunds = {fund : withdrawnamount2, total_balance: withdrawnamount};
              
              if(findmatched.loan == "0"){
                 
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
              
              else {
             
               this.api.edittotal_balance(this.loggedUser, myfunds).subscribe((data:any) => {
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
            }
             
            }  
            
            
            // for loans

            else {
              
              let reducerInterest = (acc, cur) => {
                return acc + (Number(cur.total));
               };
             let totalinterest = myrequest.reduce(reducerInterest, 0);
               if(this.withdrawdetails.amount > totalinterest){
                this.texts = "Sorry, you can't withdraw more than you asked";
                this.subtext = "Cancel the operation!";
                this.cancelbutton = true;
               } else {
                 let findmatched = mynewdata.find((u) => u.id == this.loggedUser);
                 if((findmatched) && (this.withdrawdetails.amount > findmatched.fund)){
                   this.texts = "Sorry, your selected amount is greater than your account balance";
                   this.subtext = "Cancel the operation!";
                   this.cancelbutton = true;
  
                 } else if((findmatched) && (this.withdrawdetails.amount < findmatched.fund)) {
                   let withdrawnamount = findmatched.total_balance - this.withdrawdetails.amount;
                   let withdrawnamount2 = findmatched.fund - this.withdrawdetails.amount;
                   let myfunds = {fund : withdrawnamount2, total_balance: withdrawnamount};
                   
                   if(findmatched.loan == "0"){
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
                   
                   else {
                    this.api.editfund(this.loggedUser, myfunds).subscribe((data:any) => {
                     if(data){
                    this.api.edittotal_balance(this.loggedUser, myfunds).subscribe((data:any) => {
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
                 }
               }
            }      
        })



      })
  }

  canceloperation(){
    this.router.navigate(['/sidebar/canceloperation']);
    setTimeout(() => {
      this.router.navigate(['/sidebar/dashboard']);
    }, 3000);
  }  

}


