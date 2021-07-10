import { Router } from '@angular/router';
import { LoanService } from './../Services/loan.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  public getitem = JSON.parse(localStorage.getItem('loggedUser'));
  public listofnotifications = <any>[];
  public arrayOfnotificaton = [];
  p: number = 1;

  constructor(
    public api: LoanService,
    public router: Router
  ) { }

  ngOnInit(): void {
    let id = this.getitem.user.id;
    this.api.getnotification().subscribe(data => {
     this.listofnotifications = data;
     this.listofnotifications.filter((u) => {
       if (u.id == id) {
         this.arrayOfnotificaton.push(u);
         this.api.numbers = 0;
       }
     })
    })

    this.api.gethistory().subscribe(data => {
      this.listofnotifications = data;
      this.listofnotifications.filter((u) => {
        if (u.id == id) {
          this.arrayOfnotificaton.push(u);
          this.api.numbers = 0;
        }
      })
     })

  }

  viewnotification(ids,names){
       if (names == "Atm request") {
        this.router.navigate([`/sidebar/atmview/${ids}`]);
       } else{
         this.router.navigate([`/sidebar/transaction/${ids}`]);
       }
  }

}
