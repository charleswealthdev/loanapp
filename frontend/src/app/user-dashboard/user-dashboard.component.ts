import { OfferloanService } from 'src/app/adminfolder/Servicefolder/offerloan.service';
import { Router } from '@angular/router';
import { LoanService } from './../Services/loan.service';
import { Component } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
  providers: [DatePipe, CurrencyPipe]
})
export class UserDashboardComponent {
  
  p: number = 1;
  p2: number = 1;
  public displays: any;
  public onPagechange: Array<any>;
  public dates;
  public userfund;
  public fundArr = <any>[];
  public fund;
  public load = false;
  public id = JSON.parse(localStorage.getItem('loggedUser')).user.id;
  public arrays = <any>[];
  public myarrays = [];
  public firstname;
  public transAmount = [];
  public transName = [];
  public loantrans = [];
  public surname;
  public transtype;
  loanlists: any;

  constructor(
    private breakpointObserver: BreakpointObserver,
    public api: LoanService,
    public router: Router,
    public datePipe: DatePipe,
    public currency: CurrencyPipe,
    public adminApi: OfferloanService
    ) {}


    lineChartData: ChartDataSets[] = [
      { data: this.transAmount, label: 'Transaction Graph' },
    ];
  
    lineChartLabels: Label[] = this.transName;
  
    lineChartOptions = {
      responsive: true,
    };
  
    lineChartColors: Color[] = [
      {
        borderColor: 'red',
        backgroundColor: 'rgba(255,255,0,0.28)',
      },
    ];
  
    lineChartLegend = true;
    lineChartPlugins = [];
    lineChartType = 'line';

  ngOnInit(){
    this.load = true;
    this.dates = new Date();
    this.allfunds();
    this.api.alltransactions().subscribe(data => {
      if(data) {
        this.load = false;
        this.arrays = data;
        this.myarrays = this.arrays.filter((u) => u.id == this.id);
        this.displays = this.myarrays;
        this.myarrays.map((el) => {
          this.transAmount.push(el.amount)
          let time = this.datePipe.transform(el.created_at);
          this.transName.push(time)
          this.firstname = el.firstname;
          this.surname = el.surname;
          this.transtype = el.name;
        })
      }
   }, error => {
     this.load = false;
   })

   this.adminApi.getrequests().subscribe((data:any) => {
    data.map((el) => {
      if(el.id == this.id){
        this.loantrans.push(el);
      }
      if(el.status == "pending" && el.id == this.id){
       return;
      } else if(el.status == "approved" && el.id == this.id){
        this.loanlists.push(el)
      }
    })
})

  }
  
  viewalltransaction(){
    this.router.navigate([`/sidebar/transaction/${this.id}`]);
  }

  allfunds(){
    this.load = true;
    let loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
    this.api.getfunds().subscribe(
      data => {
        this.load = false;
         this.fundArr = data;
         this.fundArr.map((el) => {
           if (el.email === loggedUser.user.email) 
           {
             if(el.total_balance == "0"){
                this.fund = +el.fund + +el.loan;
             } else {
               this.fund = el.total_balance;
             }
           }
         })
      },
      error => {
        console.log(error);
        this.load = false;
      }
    )
  }

  getloan(){
    this.api.getfunds().subscribe((data:any) => {
      let user = data.find((u) => u.id == this.id);
      if(!user){
          return;
      } else {
        this.router.navigate(['/sidebar/getloan']);
      }
    })

  }
   
  withdrawview(){
     this.router.navigate([`/sidebar/withdraw`]);
  }

  
}
