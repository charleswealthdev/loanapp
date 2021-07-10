import { OfferloanService } from './../Servicefolder/offerloan.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-editdialog',
  templateUrl: './editdialog.component.html',
  styleUrls: ['./editdialog.component.css']
})
export class EditdialogComponent implements OnInit {

  public load = false;

  constructor(
    public dialogRef: MatDialogRef<EditdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public api: OfferloanService
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  makechanges(mydata){
    this.load = true;
     this.api.editcategory(mydata.id, mydata).subscribe((data:any) => {
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
