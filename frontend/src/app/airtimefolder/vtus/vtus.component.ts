import { LoanService } from './../../Services/loan.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OfferloanService } from 'src/app/adminfolder/Servicefolder/offerloan.service';

@Component({
  selector: 'app-vtus',
  templateUrl: './vtus.component.html',
  styleUrls: ['./vtus.component.css']
})
export class VtusComponent implements OnInit {

  constructor(
    public router: Router,
    public api: LoanService,
    public adminApi: OfferloanService,
    public actroute: ActivatedRoute
  ) { }

  public checksfund = [];
  public id = JSON.parse(localStorage.getItem('loggedUser')).user.id || [];
  public clientid = JSON.parse(localStorage.getItem('loggedUser')).user.clientID || [];
  public airtime = this.actroute.snapshot.params.networks;

  ngOnInit(): void {
    this.api.fetchusers().subscribe((data:any) => {
      let multipleuser = data.filter((u) => u.clientID === this.clientid);
      this.api.getfunds().subscribe((data:any) => {
        multipleuser.map((el) => {
          data.map((ty) => {
            if(el.id == ty.id){
              this.checksfund.push(ty)
            }
          })
        })
      })
    })
  }

  chooseaccount(item){
    this.api.fetchusers().subscribe((data:any) => {
      let checks = data.find((u) => u.id == item.id);
      if(checks){
        let getVTU = JSON.parse(localStorage.getItem('vtu')) || [];
        let setairtime = {...getVTU, item, checks};
        localStorage.setItem('vtu', JSON.stringify(setairtime));
        this.router.navigate([`/sidebar/mtn`])
      } else {
        return;
      }
    })
  }

}
