import { InsufficientdialogComponent } from './../insufficientdialog/insufficientdialog.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OfferloanService } from 'src/app/adminfolder/Servicefolder/offerloan.service';
import { LoanService } from 'src/app/Services/loan.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-listofloans',
  templateUrl: './listofloans.component.html',
  styleUrls: ['./listofloans.component.css']
})
export class ListofloansComponent implements OnInit {

  public id = JSON.parse(localStorage.getItem('loggedUser')).user.id;
  public loancategoryarray = [];
  public filteredlist = [];
  public load = false;

  constructor(
    public api: LoanService,
    public adminApi: OfferloanService,
    public router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
      this.load = true;
    this.adminApi.getcategories().subscribe((data:any) =>{
      if(data){
         this.load = false;
         this.loancategoryarray = data;
      }
    })

  }

  viewloans(loans){
      this.api.getfunds().subscribe((data:any) => {
          let checkuser = data.find((u) => u.id == this.id)
          if(checkuser){
             if(+checkuser.fund < +loans.limits){
              let dialogRef = this.dialog.open(InsufficientdialogComponent, {
                width: '450px',
                data: {message: "You have insufficient Account balance. Sorry, you can't get the loan"}
              });

              dialogRef.afterClosed().subscribe(result => {
                console.log('The dialog was closed');
              });
             } 

             else {
               this.router.navigate([`/sidebar/myloan/${loans.category}`])
             }
          }
      })
  }

}
