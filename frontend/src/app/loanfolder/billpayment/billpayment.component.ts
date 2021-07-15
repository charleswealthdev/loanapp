import { PaymentdialogComponent } from './../paymentdialog/paymentdialog.component';
import { LoanService } from './../../Services/loan.service';
import { OfferloanService } from './../../adminfolder/Servicefolder/offerloan.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-billpayment',
  templateUrl: './billpayment.component.html',
  styleUrls: ['./billpayment.component.css']
})
export class BillpaymentComponent implements OnInit {

  public loggedUser = JSON.parse(localStorage.getItem('loggedUser')).user || [];
  public billsArray = [];

  constructor(
    public router: Router,
    public adminApi: OfferloanService,
    public api: LoanService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
     this.getbills()
  }

  getbills(){
    this.adminApi.getrequests().subscribe((data:any) => {
      data.map((el) => {
         if(el.id == this.loggedUser.id && el.status == "approved" && el.paid_status == "pending"){
           this.billsArray.push(el);
         }
      })
    })
  }

  // viewbills(items){
    // sk_test_0db91341e570f1c85199ecc1ee08720db0c1b5bc
  //   let handler = PaystackPop.setup({ // I don't know if its a bug, i used it in my javascript and it's working fine
  //     key: 'pk_test_8216713d6b2944c7fadab59b8df8e30d4ec27688', // my paystack public key
  //     email: this.loggedUser.email, //put your customer's email here
  //     amount: items.total + "00", //amount the customer is supposed to pay
  //     metadata: {
  //         custom_fields: [
  //             {
  //                 display_name: "Mobile Number",
  //                 variable_name: "mobile_number",
  //                 value: this.loggedUser.phone//customer's mobile number
  //             }
  //         ]
  //     },
  //     callback: (response) => {
  //        this.adminApi.checkpaystacktoken({reference:response.reference, status:"paid"}, items.request_id).subscribe((data:any) => {
  //           if(data == "1"){
  //             this.getbills();
  //           } else {
  //             console.log("No payment made")
  //             this.getbills()
  //           }
  //        }, error => console.log(error))
  //     },
  //     onClose:  () => {
  //         //when the user close the payment modal
  //         alert('Transaction cancelled');
  //     }
  // });

  // handler.openIframe(); //open the paystack's payment modal

  // }


  viewbills(items){
    let dialogRef = this.dialog.open(PaymentdialogComponent, {
      width: '450px',
      data: {firstname:this.loggedUser.firstname, lastname: this.loggedUser.lastname,email: this.loggedUser.email, id:items.request_id, amount: items.total, status: 'paid'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getbills()
    });
  }

}
