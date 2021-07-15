import { OfferloanService } from 'src/app/adminfolder/Servicefolder/offerloan.service';
import { LoanService } from './../Services/loan.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
 public edit = true;
 public editbutton = false;
 public load = false;
 public email;
 public firstname;
 public lastname;
 public fund;
 public accountno;
 public phone;

  constructor(
    public router: Router,
    public api: LoanService,
    public adminApi: OfferloanService
  ) { }



  ngOnInit(): void {
    let loggedUser = JSON.parse(localStorage.getItem('loggedUser')).user.id || [];
    this.api.getfunds().subscribe((data:any) => {
       let mychecks = data.find((u) => u.id == loggedUser);
       this.firstname = mychecks.firstname;
       this.lastname = mychecks.surname;
       this.accountno = mychecks.accountno;
       this.fund = mychecks.fund;
       this.email = mychecks.email;
       this.phone = mychecks.phone;
    })
  }

  changeEdit(){
    if(this.edit == true){
      this.edit = false;
      this.editbutton = true;
    } else{
      this.edit = true;
      this.editbutton = false;
    }
  }

  onSubmit(){
    this.load = true;
    let loggedUser = JSON.parse(localStorage.getItem('loggedUser')).user.id || [];

    let changes = {
      firstname: this.firstname,
      lastname: this.lastname,
      phone: this.phone,
      email: this.email,
    }

    let changesFund = {
      firstname: this.firstname,
      surname: this.lastname,
      phone: this.phone,
      email: this.email,
    }
    if(!this.firstname || !this.lastname || !this.phone || !this.email)
      return;
    else{
       this.api.edituserfund(changesFund, loggedUser).subscribe((data:any) => {
         this.api.edituser(changes, loggedUser).subscribe((data:any) => {
           this.load = false;
         }, error =>{ console.log(error); this.load = false})
       }, error => {console.log(error); this.load = false})  
    }
  }

  createnewaccount(){
    let loggedUser = JSON.parse(localStorage.getItem('loggedUser')).user.id || [];
    this.api.fetchusers().subscribe((data:any) => {
      let myId = data.find((u) => u.id == loggedUser);
      localStorage.setItem('clientId', JSON.stringify(myId.clientID));
      this.router.navigate(['/register']);
    })
  }

}
