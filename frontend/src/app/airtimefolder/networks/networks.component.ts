import { OfferloanService } from 'src/app/adminfolder/Servicefolder/offerloan.service';
import { LoanService } from 'src/app/Services/loan.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-networks',
  templateUrl: './networks.component.html',
  styleUrls: ['./networks.component.css']
})
export class NetworksComponent implements OnInit {

 public id = JSON.parse(localStorage.getItem('loggedUser')).user.id || [];
 public clientid = JSON.parse(localStorage.getItem('loggedUser')).user.clientID || [];

  constructor(
    public router: Router,
    public api: LoanService,
    public adminApi: OfferloanService
  ) { }

  ngOnInit(): void {

  }

  airtime(data){
     if(data === 'mtn'){
        this.router.navigate([`/sidebar/vtus/${data}`]);
      localStorage.setItem('vtu', JSON.stringify({data}));

     }
     if(data === 'glo'){
      this.router.navigate([`/sidebar/vtus/${data}`]);
      localStorage.setItem('vtu', JSON.stringify({data}));

   }
      if(data === 'airtel'){
        this.router.navigate([`/sidebar/vtus/${data}`]);
      localStorage.setItem('vtu', JSON.stringify({data}));

    }
    if(data === 'etisalat'){
      this.router.navigate([`/sidebar/vtus/${data}`]);
      localStorage.setItem('vtu', JSON.stringify({data}));

  }
  }

}
