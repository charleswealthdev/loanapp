import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoanService } from 'src/app/Services/loan.service';

@Component({
  selector: 'app-cashloan',
  templateUrl: './cashloan.component.html',
  styleUrls: ['./cashloan.component.css']
})
export class CashloanComponent implements OnInit {

  constructor(
    public fb: FormBuilder,
    public api: LoanService,
    public actroute: ActivatedRoute,
    public route: Router
  ) { }

  public getfunds = <any>[];  

  myquest = this.fb.group({
      acctname:  ['', Validators.required],
      acctno:  ['', Validators.required],
      amount:  ['', Validators.required],
  })
  
  ngOnInit(): void {
  }

  submittransfer(){
    let {id} = this.actroute.snapshot.params;
    this.api.getfunds().subscribe(data => {
      this.getfunds = data;
      let matchedId = this.getfunds.filter((u) => u.id == id);
      matchedId.map((u) => {
        if((this.myquest.value.acctname != `${u.firstname} ${u.surname}`)){
            return;
        } else{
          this.getfunds.map((el) => {
            if(this.myquest.value.acctno != el.accountno){
              return;
            } else{
              if(this.myquest.value.amount > u.fund){
                  console.log("Dear customer, sorry you don't have such amount!")
              } else {
                let transferdetails = {
                  acctname: this.myquest.value.acctname,
                  acctno: this.myquest.value.acctno,
                  amount: this.myquest.value.amount,
                  bankname: 'cashloan',
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
