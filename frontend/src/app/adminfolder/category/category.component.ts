import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OfferloanService } from './../Servicefolder/offerloan.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(
    public api: OfferloanService,
    public router: Router,
    public fb: FormBuilder
  ) { }

  public getloggedadmin = JSON.parse(localStorage.getItem('loggedAdmin')).user.id;
  public load = false;
  public categoryarray : any;

  categoryForm = this.fb.group({
    category: ['', [Validators.required]],
    limits: ['', [Validators.required]],
    message: ['', [Validators.required]]
  });

  ngOnInit(): void {
    
  }

  // submit categories function

  onSubmit(){
    this.load = true;
    let id = JSON.parse(localStorage.getItem('loggedAdmin')).user.id;
    let newvalue = {...this.categoryForm.value, id}

      this.api.category(newvalue).subscribe((data:any) => {
          if(data){
            this.load = false;
          }
      }, error => {
        console.log(error);
        this.load = false;
      })

  }


  // function for fetching categories
  getCategories(){
    this.api.alladmin().subscribe((data:any) => { //api to check the correct admin
      let admin = data.filter((u) => u.id != this.getloggedadmin);
      if(!admin){
        return;
      } else {
          this.router.navigate(['/admin_navigations/allcategories']);
      }
    })

  }


}
