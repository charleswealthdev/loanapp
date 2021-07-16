import { AppliedialogComponent } from './../appliedialog/appliedialog.component';
import { ProcessingloanComponent } from './../processingloan/processingloan.component';
import { LoanService } from 'src/app/Services/loan.service';
import { OfferloanService } from 'src/app/adminfolder/Servicefolder/offerloan.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CurrencyPipe } from '@angular/common';
import { MaximumdialogComponent } from '../maximumdialog/maximumdialog.component';

@Component({
  selector: 'app-myloans',
  templateUrl: './myloans.component.html',
  styleUrls: ['./myloans.component.css'],
  providers: [CurrencyPipe]

})
export class MyloansComponent implements OnInit {

  public filteredlist = [];
  public load = true;
  public checloan;
  public newarray = [];
  public categoryarray = [];
  public loggedUser = JSON.parse(localStorage.getItem('loggedUser')).user || [];
  totalamount: any;
  totalinterest: any;
  alltotals: any;
  chekuserfund: any;
  // public myrequest = JSON.parse(localStorage.getItem('requests')) || [];

  constructor(
    public router: Router,
    public adminApi: OfferloanService,
    public api: LoanService,
    public actroute: ActivatedRoute,
    public dialog: MatDialog,
    public currencypipe: CurrencyPipe
  ) { }

  ngOnInit(): void {

    let {category} = this.actroute.snapshot.params;
    let myrequests = JSON.parse(localStorage.getItem('myrequests')) || [];
    this.adminApi.getcategories().subscribe((data:any) =>{
      let filteredloan = data.find((u) => u.category == category);
      this.adminApi.getloans().subscribe((data:any) => {
       let myarr = data.filter((u) => u.category == category);
        myarr.map((el) => {
           if(this.loggedUser.id == el.id){
             let myObj = {
                loan_id: el.loan_id,
                id: el.id,
                category: el.category,
                amount: el.amount,
                total: el.total,
                interest: el.interest,
                paybacktime: el.paybacktime,
                status: "Applied",
                created_at: el.created_at,
             }

             this.filteredlist.push(myObj);
           } else {
            let myObjs = {
              loan_id: el.loan_id,
              id: el.id,
              category: el.category,
              amount: el.amount,
              total: el.total,
              interest: el.interest,
              paybacktime: el.paybacktime,
              status: "Apply now",
              created_at: el.created_at,
           }
             this.filteredlist.push(myObjs);
           }
        })

      })
   })  
   this.adminApi.getrequests().subscribe((data:any) => {
    let checkstatus = data.filter((u) => u.id == this.loggedUser.id && u.paid_status === "pending");
    
    if(checkstatus){
      checkstatus.map((el) => {
         if(el.allocation === "allocated"){
          let reducerInterest = (acc, cur) => {
            return acc + (Number(cur.total));
           };
           this.totalinterest = checkstatus.reduce(reducerInterest, 0)

           console.log(this.totalinterest);
         } else {

         }
      })
    } else {
       console.log("hello there!")
    }
  })

  this.api.getfunds().subscribe((data:any) => {
    this.chekuserfund = data.find((u) => u.id == this.loggedUser.id);
  })

  }

  applyforloan(loan){
    let myarr = JSON.parse(localStorage.getItem('randomId')) || [];
    let randomId =  Math.floor(1000 + Math.random() * 9000);
    myarr.push(randomId);
    localStorage.setItem('randomId', JSON.stringify(myarr));

    let userdetail = {
      id: this.loggedUser.id,
      loan_id: loan.loan_id,
      category: loan.category,
      amount: loan.amount,
      total: loan.total,
      interest: loan.interest,
      paybacktime: loan.paybacktime,
      email: this.loggedUser.email,
      firstname: this.loggedUser.firstname,
      lastname: this.loggedUser.lastname,
      phone: this.loggedUser.phone,
      accountno: this.loggedUser.accountno,
      status: 'pending',
      user_status: 'applied',
      paid_status: 'pending',
      allocation: 'not allocated',
      randomId,
    }

    let details = {
      id : this.loggedUser.id,
      name: "Loan request"
    }
    
    this.api.getfunds().subscribe((data:any) => {
      let chekuserfund = data.find((u) => u.id == this.loggedUser.id);
       let mytotalinterest = +loan.total + +this.totalinterest;
    if(mytotalinterest >= +chekuserfund.fund){
        this.dialog.open(MaximumdialogComponent, {
            width: '450px',
            data: {message: 'Your maximum loan has been reached for this particular loan option', paraMessage: 'You can try out other ones'}
        });
        return;

    } else{
        this.adminApi.getrequests().subscribe((data:any) => {
          let finds = data.find(u => u.id == this.loggedUser.id && u.status == "pending")
          let status = {
            status: 'approved'
          }
          localStorage.setItem('requests', JSON.stringify(finds));
    
            let el = data.find((u) => u.loan_id == loan.loan_id && (u.id == this.loggedUser.id) && (u.paid_status == "pending"))
            if(el){
              let dialogRef = this.dialog.open(AppliedialogComponent, {
                width: '450px',
                data: {message: 'You cannot apply for this loan now till you renew your debt!'}
              });
            } 
           
            else {
              let dialogRef = this.dialog.open(ProcessingloanComponent, {
                width: '250px',
              });
            this.adminApi.getloans().subscribe((data:any) => {
              let loanId = data.find(u => u);
              // this.adminApi.editloans(editloan, loan.loan_id).subscribe((data:any) => {
                this.api.notifications(details).subscribe((data:any) => {
                  if(data){
                    this.adminApi.posttransactions(userdetail).subscribe((data:any) => {
                      if(data){
                        this.adminApi.applyforloan(userdetail).subscribe((data:any) => {
                          if(data){
                              this.adminApi.getrequests().subscribe((data:any) => {
                                let checks = data.find((u) => u.randomId == randomId);
                           
                                        this.adminApi.appliedloanmail(userdetail).subscribe((data:any) => {
                                          if(data){
              
                                            setTimeout(() => {
                                      dialogRef.close();
                                      this.router.navigate(['/sidebar/dashboard']);
                                      localStorage.setItem('myrequests', JSON.stringify({id: this.loggedUser.id, category: loan.category, loanid: loan.loan_id}));
    
                                      this.adminApi.editrequest(status, checks.randomId).subscribe((data:any) => {
                                        if(data){
                                          this.adminApi.approvedloanmail(userdetail).subscribe((data:any) => {
                                            if(data){
                                              // 
                                            }
                                          }, error => {
                                            this.load = false;
                                          })
                                          }
                                        })
    
                                    }, 100);
              
                                    }
                                  }, error => {
                                    this.load = false;
                                  })
                              })
                       
                    }
                  }, error => {
                    this.load = false;
                  })
                }
              })
            }
      })
    })
    
      }
    })

    //else statement ends here
    }
  })





}

}
