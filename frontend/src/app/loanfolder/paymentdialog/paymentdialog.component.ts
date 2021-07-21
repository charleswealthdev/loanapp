import { LoanService } from 'src/app/Services/loan.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { OfferloanService } from 'src/app/adminfolder/Servicefolder/offerloan.service';

@Component({
  selector: 'app-paymentdialog',
  templateUrl: './paymentdialog.component.html',
  styleUrls: ['./paymentdialog.component.css']
})
export class PaymentdialogComponent implements OnInit {
 
  public id = JSON.parse(localStorage.getItem("loggedUser")).user.id || [];
  public pin;

  constructor(
    public dialogRef: MatDialogRef<PaymentdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public adminApi: OfferloanService,
    public api: LoanService,
  ) { }

  public amount = this.data.amount;

  ngOnInit(): void {
  }

  paybills(){
    if(!this.pin){
      return
    } else {
      this.api.getfunds().subscribe((data:any) => {
         let mycheck = data.find((u) => u.id == this.id);
         let checks = +mycheck.fund + +mycheck.loan;
         let total_balance = checks - +this.data.amount;
         
         this.api.fetch_atms().subscribe((data:any) => {
              let checkpin = data.find((u) => u.password == this.pin);
              if(!checkpin){
                  console.log("Incorrect pin")
                } else {
                    let mydata = {
                        status: this.data.status,
                        amount: this.data.amount,
                        firstname: this.data.firstname,
                        lastname: this.data.lastname,
                        email: this.data.email 
                      }
                      console.log(data);
                     this.adminApi.checkpaystacktoken(mydata, this.data.id).subscribe((data:any) => {
            if(data){
                this.adminApi.loanpayment(mydata).subscribe((data:any) => {
                  if(data){
                    this.api.edittotal_balance(this.id, {total_balance: total_balance}).subscribe((data:any) => {
                      if(data){
                        console.log(data)
                        this.dialogRef.close();
                      }
                    }, error => {
                      console.log(error);
                    })
                  }
                  }, error => console.log(error))
                }
              }, error => console.log(error))
             }
          })
        })

        }
      }

}
