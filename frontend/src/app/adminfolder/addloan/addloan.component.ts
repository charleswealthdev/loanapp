import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OfferloanService } from '../Servicefolder/offerloan.service';

@Component({
  selector: 'app-addloan',
  templateUrl: './addloan.component.html',
  styleUrls: ['./addloan.component.css']
})
export class AddloanComponent implements OnInit {

  public categories = [];
  public getloggedadmin = JSON.parse(localStorage.getItem('loggedAdmin')).user.id;
  public load = false;

  constructor(
    public api: OfferloanService,
    public router: Router,
    public fb: FormBuilder
    ) { 
      
    }

    addloan = this.fb.group({
      category : ['', [Validators.required]],
      amount : ['', [Validators.required]],
      interest : ['', [Validators.required]],
      paybacktime : ['', [Validators.required]],
    })
    
  ngOnInit(): void {
    this.api.getcategories().subscribe((data:any) => {
        this.categories = data;
    })
  }

  submitloan(){
    this.load = true;
    let id = JSON.parse(localStorage.getItem('loggedAdmin')).user.id;
    let splitted = this.addloan.value.interest.split('%').join("");
    let amount = this.addloan.value.amount.split('$').join("");
    let numbspliited = +splitted;
    let total = numbspliited / 100 * +amount;
    let alltotal = total + +amount;
    let loans = {...this.addloan.value, id:0, total: alltotal, status:'Apply now'}
    if(!this.addloan.valid){
       return;
    } else {
      this.api.createloan(loans).subscribe((data:any) => {
          if(data){
             this.load = false;
             this.addloan.reset();
          }
      }, error => {
          console.log(error);
          this.load = false;
      })
    }

  }

}
