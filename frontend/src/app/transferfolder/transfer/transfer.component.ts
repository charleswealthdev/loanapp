import { Router, ActivatedRoute } from '@angular/router';
import { LoanService } from './../../Services/loan.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  public pin;
  public load = false;
  public transfers = JSON.parse(localStorage.getItem('transfers')); 
  public arrays = <any>[];
  public checkbenefactor = <any>[];
  public atmarrays = <any>[];
  public filteredfunds = [];
  public amount = JSON.parse(localStorage.getItem('transfers')).amount;
  public bankname = JSON.parse(localStorage.getItem('transfers')).bankname;

  constructor(
    public api: LoanService,
    public route: Router,
    public actroute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.api.getfunds().subscribe((data:any) => {
      this.checkbenefactor = data
      this.filteredfunds = this.checkbenefactor.filter((u) => u.accountno === this.transfers.acctno);
     console.log(this.filteredfunds);
    })
  }

  transfermoney(){

   let {id} = this.actroute.snapshot.params;
   this.api.getfunds().subscribe(data => {
      this.arrays = data;
      let filtered = this.arrays.find((u) => u.id === +id);

      this.api.fetch_atms().subscribe(data => {
        this.atmarrays = data;
        let filteredatm = this.atmarrays.find((t) => t.id === +id)
        if(this.pin === filteredatm.password){
          this.load = true;
          let newamount = filtered.fund - +this.amount;
          let myfunds = {fund : newamount}
          this.api.editfund(id, myfunds).subscribe(data => {
            if (data) {

              this.filteredfunds.map(el => {

                let myamount = +el.fund;
                let deposited = +this.amount;
                let alldeposited = +myamount + +deposited;
                this.api.editfund(el.id, {fund: alldeposited}).subscribe((data:any) => {
                   if(data){
                    let forms = {
                      id,
                      firstname: el.firstname,
                      surname: el.surname,
                      phone: el.phone,
                      email: el.email,
                      accountno: el.accountno,
                      amount: this.amount,
                      total: newamount,
                      name: 'Debit alert!'
                    }

                    let benefactorform = {
                      id: el.id,
                      firstname: filtered.firstname,
                      surname: filtered.surname,
                      phone: filtered.phone,
                      email: filtered.email,
                      accountno: filtered.accountno,
                      amount: this.amount,
                      total: alldeposited,
                      name: 'Credit alert!'
                    }

                    this.api.transaction(forms).subscribe((data:any) => {
                      if(data){
                        let details = {
                          id,
                          name: "Debit alert!"
                        }
                        this.api.notifications(details).subscribe((data:any) => {
                           if(data){
                              this.api.transaction(benefactorform).subscribe((data:any) => {
                                if(data){
                                  let benefactornots = {
                                    id: el.id,
                                    name: "Credit alert!"
                                  }
                                  this.api.notifications(benefactornots).subscribe((data:any) => {
                                    if (data) {
                                      let firstindex = filtered.accountno[0];
                                      firstindex = 'x'; 
                                      let secondindex = filtered.accountno[1];
                                      secondindex = 'x'; 
                                      let thirdindex = filtered.accountno[2];
                                      thirdindex = 'x'; 
                                      let fourthindex = filtered.accountno[3];
                                      fourthindex = 'x'; 
                                      let fifthindex = filtered.accountno[4];
                                      fifthindex = 'x'; 
                                      let sixindex = filtered.accountno[5];
                                      sixindex = 'x';
                                      let sevenindex = filtered.accountno[6];
                                      let eightindex = filtered.accountno[7];
                                      let nineindex = filtered.accountno[8];
                                      let tenindex = filtered.accountno[9];
                              
                                      let encryptedaccount = firstindex + secondindex + thirdindex + fourthindex + fifthindex + sixindex + sevenindex + eightindex + nineindex + tenindex;


                                      let firstindex2 = el.accountno[0];
                                      firstindex2 = 'x'; 
                                      let secondindex2 = el.accountno[1];
                                      secondindex2 = 'x'; 
                                      let thirdindex2 = el.accountno[2];
                                      thirdindex2 = 'x'; 
                                      let fourthindex2 = el.accountno[3];
                                      fourthindex2 = 'x'; 
                                      let fifthindex2 = el.accountno[4];
                                      fifthindex2 = 'x'; 
                                      let sixindex2 = el.accountno[5];
                                      sixindex2 = 'x';
                                      let sevenindex2 = el.accountno[6];
                                      let eightindex2 = el.accountno[7];
                                      let nineindex2 = el.accountno[8];
                                      let tenindex2 = el.accountno[9];
                              
                                      let encryptedaccount2 = firstindex2 + secondindex2 + thirdindex2 + fourthindex2 + fifthindex2 + sixindex2 + sevenindex2 + eightindex2 + nineindex2 + tenindex2;
                              
                                      let transferdetails = {
                                         firstname: filtered.firstname,
                                         lastname: filtered.surname,
                                         accountno: encryptedaccount,
                                         bankname: this.bankname,
                                         deposited: this.amount,
                                         total: newamount,
                                         benefactorname: el.firstname,
                                         benesurname: el.surname,
                                         beneacctno: el.accountno,
                                         email: filtered.email
                                      }

                                      let receiptdetails = {
                                        myname: el.firstname,
                                        surname: el.surname,
                                        myaccountno: encryptedaccount2,
                                        bankname: 'cashloan',
                                        firstname: filtered.firstname,
                                        lastname: filtered.surname,
                                        accountno: filtered.accountno,
                                        deposited: this.amount,
                                        total: alldeposited,
                                        email:el.email
                                     }
                                      this.api.transfermail(transferdetails).subscribe(data => {
                                        if(data){
                                           this.api.receiptmail(receiptdetails).subscribe(data => {
                                             if(data){
                                               this.load = false;
                                               this.route.navigate(['/sidebar/dashboard']);
                                             }
                                           })
                                        }
                                      })
                                    }
                                  })
                                }
                              })
                           }
                        })
                      }
                    })
                   }
                })
              })
            }
          })

        } else {
            console.log("incorrect");
        }
      })
   })

  }

  
}
