import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OfferloanService } from 'src/app/adminfolder/Servicefolder/offerloan.service';
import { LoanService } from 'src/app/Services/loan.service';

@Component({
  selector: 'app-airtimehistroy',
  templateUrl: './airtimehistroy.component.html',
  styleUrls: ['./airtimehistroy.component.css']
})
export class AirtimehistroyComponent implements OnInit {

  public id = JSON.parse(localStorage.getItem('loggedUser')).user || [];
  public checkhistory = [];
  p = 1;
  filterTerm: string;

  constructor(
    public adminApi: OfferloanService,
    public api: LoanService,
    public router: Router
  ) { }

  ngOnInit(): void {
      this.api.getairtime().subscribe((data:any) => {
        this.checkhistory = data.filter((u)  => u.clientID == this.id.clientID);
      })
  }

}
 