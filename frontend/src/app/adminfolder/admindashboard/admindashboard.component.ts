import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { LoanService } from 'src/app/Services/loan.service';
import { OfferloanService } from '../Servicefolder/offerloan.service';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css'],
  providers: [DatePipe, CurrencyPipe]

})
export class AdmindashboardComponent implements OnInit {
  p = 1;
  public users: any;
  public loans: any;
  public paid: any;
  public applied: any;
  public category: any;

  public load = false;
  public id = JSON.parse(localStorage.getItem('loggedUser')).user.id;
  public transAmount = [];
  public transName = [];
  public transCategory = [];
  public categoryarray = [];
  public requestArray = [];


  constructor(   
    public api: LoanService,
    public router: Router,
    public adminApi: OfferloanService,
    public datePipe: DatePipe,
    ) { }


  barChartData: ChartDataSets[] = [
    { data: this.transAmount, label: 'Transaction Graph' },
  ];

  barChartLabels: Label[] = this.transName;

  barChartOptions = { 
    responsive: true,
  };

  barChartColors: Color[] = [
    {
      borderColor: 'red',
      backgroundColor: '#5D015D',
    },
  ];

  barChartLegend = true;
  barChartPlugins = [];
  barChartType = 'bar';

  ngOnInit(): void {
    this.adminApi.getloans().subscribe((data:any) => {
      if(data) {
        data.map((el) => {
          this.transAmount.push(el.amount)
          let time = this.datePipe.transform(el.created_at);
          this.transName.push(time);
          this.transCategory.push(el.category);
        })
      }
   }, error => {
     this.load = false;
   })

  //  get users'

   this.api.getfunds().subscribe((data:any) => {
        this.users = data.length;
   })

  //  get requests
   this.adminApi.getrequests().subscribe((data:any) => {
      this.applied = data.length;
  })

  // loan list
  this.adminApi.getloans().subscribe((data:any) => {
      this.loans = data.length;
  })

  // unpiad loans
  this.adminApi.getrequests().subscribe((data:any) => {
    let unpiad = data.filter((u) => (u.paid_status === "pending"))
    this.paid = unpiad.length;
    this.requestArray = data;
  })


  this.adminApi.getcategories().subscribe((data:any) => {
      this.category = data.length;
      this.categoryarray = data;
  })



  }

}
