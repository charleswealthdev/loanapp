import { SuccessdialogComponent } from './../successdialog/successdialog.component';
import { Router } from '@angular/router';
import { LoanService } from 'src/app/Services/loan.service';
import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { OfferloanService } from 'src/app/adminfolder/Servicefolder/offerloan.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-mtn',
  templateUrl: './mtn.component.html',
  styleUrls: ['./mtn.component.css'],
  providers: [UpperCasePipe]

})
export class MtnComponent implements OnInit {

  public id = JSON.parse(localStorage.getItem('loggedUser')).user.id || [];
  public vtu = JSON.parse(localStorage.getItem('vtu')) || [];
  public networkVTU;
  public beneficiary;
  public amount;
  public pin;
  public load = false;

  constructor(
    public uppercasepipe: UpperCasePipe,
    public adminApi: OfferloanService,
    public api: LoanService,
    public dialog: MatDialog,
    public router: Router
  ) { }

  ngOnInit(): void {
      this.networkVTU = this.uppercasepipe.transform(this.vtu.data) + " VTU"
  }

  proceed(){
    this.load = true;
    let myuser = this.vtu.item.id;
     this.api.getfunds().subscribe((data:any) => {
        let mycheck = data.find((u) => u.id == myuser);
        this.api.fetch_atms().subscribe((data:any) => {
           let checkatm = data.find((u) => u.id == myuser);
           if (this.amount > mycheck.fund || checkatm.password != this.pin) {
             return;
           } else{
              let total = +mycheck.fund - +this.amount;
              this.api.editfund(myuser, {fund: total}).subscribe((data:any) => {
                  if(data){
                    let forms = {
                      id: myuser,
                      firstname: mycheck.firstname,
                      surname: mycheck.surname,
                      phone: mycheck.phone,
                      email: mycheck.email,
                      accountno: mycheck.accountno,
                      amount: this.amount,
                      total: total,
                      name: 'Airtime purchase'
                    }
                  this.api.transaction(forms).subscribe((data:any) => {
                    if(data){
                     this.api.notifications({id: myuser,name: "Airtime purchase"
                    }).subscribe((data:any) => {
                       if(data){
                         let airtime = {
                           id: myuser,
                           amount: this.amount,
                           network: this.vtu.data,
                           phone_no: this.beneficiary,
                           clientID: this.vtu.checks.clientID
                         }
                         this.api.airtime(airtime).subscribe((data:any) => {
                            if(data){
                              this.load = false;
                              let dialogRef = this.dialog.open(SuccessdialogComponent, {
                                width: '450px',
                                data: {message: "Airtime Purchase successful!"}
                              });
                            
                              dialogRef.afterClosed().subscribe(result => {
                                console.log('The dialog was closed');
                                this.router.navigate(['/sidebar/dashboard']);
                              });
                            }
                         }, error => {
                           console.log(error);
                           this.load = false;
                         })
                       }
                     }, error => {
                       console.log(error);
                       this.load = false;
                     }) 
                    }
                  }, error => {
                    this.load = false;
                    console.log(error)
                  })  
                  }
              }, error => {
                this.load = false;
                console.log(error)
              })
           }
        }, error => {
          console.log(error);
          this.load = false
        })
     }, error => {
       console.log(error);
       this.load = false;
     })

  }

}
