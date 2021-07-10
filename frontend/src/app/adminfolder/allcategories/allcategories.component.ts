import { EditdialogComponent } from './../editdialog/editdialog.component';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OfferloanService } from '../Servicefolder/offerloan.service';
import { MatDialog } from '@angular/material';
import { DeletedialogComponent } from '../deletedialog/deletedialog.component';

@Component({
  selector: 'app-allcategories',
  templateUrl: './allcategories.component.html',
  styleUrls: ['./allcategories.component.css']
})
export class AllcategoriesComponent implements OnInit {

  public categoryarray = [];

  constructor(
    public router: Router,
    public api: OfferloanService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getCategories()
  }

  getCategories(){
    this.api.getcategories().subscribe((data:any) => {
      console.log(data);
      this.categoryarray = data;
   })
  }

  editcategory(id, category, message){
      let dialogRef = this.dialog.open(EditdialogComponent, {
       width: '450px',
       data: {id, category, message }
     });
   
     dialogRef.afterClosed().subscribe(result => {
       console.log('The dialog was closed');
       this.getCategories()
     });

  }

  deletecategory(id, category){
    let dialogRef = this.dialog.open(DeletedialogComponent, {
     width: '250px',
     data: {id, category}
   });
 
   dialogRef.afterClosed().subscribe(result => {
     console.log('The dialog was closed');
     this.getCategories()
   });

}


}
