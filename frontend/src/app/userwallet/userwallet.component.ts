import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoanService } from '../Services/loan.service';
// import swal from "sweetalert";

@Component({
  selector: 'app-userwallet',
  templateUrl: './userwallet.component.html',
  styleUrls: ['./userwallet.component.css']
})
export class UserwalletComponent implements OnInit {

 fund; 
 public loggedUser;
 public load = false;
 public user; 
 public allfunds = <any>[];

  constructor(
    private api: LoanService,
    private router: Router
  ) { }

  ngOnInit(): void {
   this.user = JSON.parse(localStorage.getItem("loggedUser"));
   this.loggedUser = this.user.user.id;
  }


  fundwallet(){
    this.load = true;
    this.api.getfunds().subscribe(data => {
      this.allfunds = data;
      let per_person = this.allfunds.filter((u)=>u.id === this.loggedUser);
      per_person.map(el => {
        let newfund = +el.fund;
        let funds = newfund + this.fund;
        let fund = {fund : funds}

        let forms = {
          id: this.loggedUser,
          firstname: this.user.user.firstname,
          surname: this.user.user.lastname,
          phone: this.user.user.phone,
          email: this.user.user.email,
          accountno: this.user.user.accountno,
          amount: this.fund,
          total: funds,
          name: 'Credit alert!'
        }
        let firstindex = this.user.user.accountno[0];
        firstindex = 'x'; 
        let secondindex = this.user.user.accountno[1];
        secondindex = 'x'; 
        let thirdindex = this.user.user.accountno[2];
        thirdindex = 'x'; 
        let fourthindex = this.user.user.accountno[3];
        fourthindex = 'x'; 
        let fifthindex = this.user.user.accountno[4];
        fifthindex = 'x'; 
        let sixindex = this.user.user.accountno[5];
        sixindex = 'x';
        let sevenindex = this.user.user.accountno[6];
        let eightindex = this.user.user.accountno[7];
        let nineindex = this.user.user.accountno[8];
        let tenindex = this.user.user.accountno[9];

        let encryptedaccount = firstindex + secondindex + thirdindex + fourthindex + fifthindex + sixindex + sevenindex + eightindex + nineindex + tenindex;

        let myfunds = {
          firstname: this.user.user.firstname,
          surname: this.user.user.lastname,
          email: this.user.user.email,
          accountno: encryptedaccount,
          deposited: this.fund,
          total : funds
        }

        this.api.editfund(this.loggedUser, fund).subscribe(data => {
          if(data){
            this.api.transaction(forms).subscribe(data => {
              if(data){
                let details = {
                  id:  this.user.user.id,
                  name: "Credit alert!"
                }
                this.api.notifications(details).subscribe(data => {
                  if(data){
                    this.api.fundmail(myfunds).subscribe(data => {
                       if(data){
                         this.api.numbers++;
                         this.load = false;
                        //  swal('Funding', 'Transaction made successfully', 'success')
                         setTimeout(() => {
                           this.router.navigate(['/sidebar/dashboard']);
                         }, 2000);
                       }
                    })
                  }
                }, error => console.log(error))
              }
            },error => console.log(error),
            )
          }
        }, error => console.log(error)
        )

      })
           
    })

  }

}


