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
      this.api.fetch_atms().subscribe((data:any) => {
         let checkpin = data.find((u) => u.password == this.pin);
         if(!checkpin){
           console.log("Incorrect pin")
         } else {
           let data = {
             status: this.data.status,
             amount: this.data.amount,
             firstname: this.data.firstname,
             lastname: this.data.lastname,
             email: this.data.email 
           }
          this.adminApi.checkpaystacktoken(data, this.data.id).subscribe((data:any) => {
            if(data){
              this.adminApi.loanpayment(data).subscribe((data:any) => {
                console.log(data)
                this.dialogRef.close();
              }, error => console.log(error))
            }
          }, error => console.log(error))
         }
      })
    }
  }

}
