import { Component, OnInit } from '@angular/core';
import { LoanService } from '../Services/loan.service';
// import swal from 'sweetalert';

@Component({
  selector: 'app-atmcomp',
  templateUrl: './atmcomp.component.html',
  styleUrls: ['./atmcomp.component.css']
})
export class AtmcompComponent implements OnInit {

public loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
public load = false;
  form = <any>{
     id: this.loggedUser.user.id,
     firstname: null,
     lastname: null,
     accountno: null,
     phone: null,
     email: null,
     password: null,
     password_confirmation: null,
     card_no : Math.floor(1000 + Math.random() * 9000) + ' - ' + Math.floor(1000 + Math.random() * 9000) + ' - ' + Math.floor(1000 + Math.random() * 9000) + ' - ' + Math.floor(1000 + Math.random() * 9000),
     cvc: Math.floor(100 + Math.random() * 900),
     atm_type: null
  }

  public error = null;
  public arrays = <any>[];
  public id;
  public showtab = true;

  constructor(
    private api: LoanService
  ) { }


  ngOnInit(): void {

  }

  onSubmit(){
    this.load = true;
    let newlogged = this.loggedUser.user;
    if ((newlogged.firstname != this.form.firstname) || (newlogged.lastname != this.form.lastname) || (newlogged.accountno != this.form.accountno) || (newlogged.email != this.form.email) || (newlogged.phone != this.form.phone)) 
    {
      this.error = "Incorrect details!";
      this.load = false;
    }
     else{
        this.api.atm_request(this.form).subscribe(data => {
          if (data) {
             this.api.atm_mail(newlogged).subscribe(data => {
               if (data) {
                 let details = {
                   id: newlogged.id,
                   name: "Atm request"
                 }
                 this.api.notifications(details).subscribe(data => {
                   if (data) {
                     this.api.numbers += 1;
                    //  swal('Atm request', 'successfull, check your email!', 'success')
                     this.load = false;
                   }
                 }, error => this.handleError(error))
               }
             }, error => this.handleError(error),
             )
          }
        }, error => this.handleError(error),
        )
     }

  }

  handleError(error){
    this.error = error.errors;
  }

}
