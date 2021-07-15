import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-airtime',
  templateUrl: './airtime.component.html',
  styleUrls: ['./airtime.component.css']
})
export class AirtimeComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  myairtimes(data){
    if(data === 'airtime')
    this.router.navigate(['/sidebar/networks']);
    if(data === 'data')
    this.router.navigate(['/sidebar/mydata_bundle']);
    if(data === 'history')
    this.router.navigate(['/sidebar/airtime_history']);
  }


}
