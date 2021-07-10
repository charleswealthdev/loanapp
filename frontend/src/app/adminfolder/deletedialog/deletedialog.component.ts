import { OfferloanService } from './../Servicefolder/offerloan.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-deletedialog',
  templateUrl: './deletedialog.component.html',
  styleUrls: ['./deletedialog.component.css']
})
export class DeletedialogComponent implements OnInit {

  public load = false;

  constructor(
    public dialogRef: MatDialogRef<DeletedialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public api: OfferloanService
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  deleteCategory(id){
    this.load = true;
     this.api.deletecategory(id).subscribe((data:any) => {
       if(data){
         this.load = false
         this.dialogRef.close();
       }
    }, error => {
      if(error){
        this.load = false;
        this.dialogRef.close();
        console.log(error)
      }
    })
  }

}
