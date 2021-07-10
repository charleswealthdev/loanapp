import { LoanService } from 'src/app/Services/loan.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {

  public pin;
  public atmArray: any;
  public id = JSON.parse(localStorage.getItem('loggedUser')).user.id;

  constructor(
    public actroute: ActivatedRoute,
    public api: LoanService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  proceedtowithdraw(){
    this.api.fetch_atms().subscribe((data: any) => {
      this.atmArray = data;
      let myFind = this.atmArray.find((u) => u.id == this.id);
      if(myFind && (myFind.password == this.pin)){
         this.router.navigate([`/sidebar/amount`]);
      } else{
        return;
      }
    })
  }

}
