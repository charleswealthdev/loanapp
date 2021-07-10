import { LoanService } from 'src/app/Services/loan.service';
import { OfferloanService } from 'src/app/adminfolder/Servicefolder/offerloan.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
   public user = JSON.parse(localStorage.getItem("loggedUser")).user || [];
   public message;
  public load = false;
  constructor(
    public adminApi: OfferloanService,
    public api: LoanService
  ) { }

  ngOnInit(): void {
  }

  sendmessage(){
    this.load = true;
    let data = {email: this.user.email, messages: this.message};
     this.adminApi.appreview(data).subscribe((data:any) => {
       if(data){
         this.load = false;
       }
     }, error => {
         console.log(error);
         this.load = false;
     })
  }

}
