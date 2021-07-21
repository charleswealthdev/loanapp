import { ActivatedRoute, Router } from '@angular/router';
import { LoanService } from './../../Services/loan.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otherbanks',
  templateUrl: './otherbanks.component.html',
  styleUrls: ['./otherbanks.component.css']
})
export class OtherbanksComponent implements OnInit {

  
  constructor(
    public fb: FormBuilder,
    public api: LoanService,
    public actroute: ActivatedRoute,
    public route: Router
    ) { }

  public getfunds = <any>[];  

  myquest = this.fb.group({
      acctname:  ['', Validators.required],
      bankname:  ['', Validators.required],
      acctno:  ['', Validators.required],
      amount:  ['', Validators.required],
  })

  ngOnInit(): void {
    // this.submitquest();
  }

  submittransfer(){

    let {id} = this.actroute.snapshot.params;
    this.api.getfunds().subscribe((data:any) => {
      this.getfunds = data;
      let matchedId = this.getfunds.find((u) => u.id == id);
      this.getfunds.map((u) => {
        if((this.myquest.value.acctname != `${u.firstname} ${u.surname}`)){
            return;
        } else{
          this.getfunds.map((el) => {
            if(this.myquest.value.acctno != el.accountno){
              return;
            } else{
              if(this.myquest.value.amount > matchedId.fund){
                  console.log("Dear customer, sorry you don't have such amount!")
              } else {
                let transferdetails = {
                  acctname: this.myquest.value.acctname,
                  acctno: this.myquest.value.acctno,
                  amount: this.myquest.value.amount,
                  bankname: this.myquest.value.bankname,
                }
                localStorage.setItem('transfers', JSON.stringify(transferdetails));
                this.route.navigate([`/sidebar/transfer/${id}`]);
              }
            }
          })
        }
      })
    })

  }


  resetform(){
    this.myquest.reset();
  }

}
