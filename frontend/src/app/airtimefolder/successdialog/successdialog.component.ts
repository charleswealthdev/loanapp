import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { OfferloanService } from 'src/app/adminfolder/Servicefolder/offerloan.service';

@Component({
  selector: 'app-successdialog',
  templateUrl: './successdialog.component.html',
  styleUrls: ['./successdialog.component.css']
})
export class SuccessdialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SuccessdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public api: OfferloanService
  ) { }

  ngOnInit(): void {
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

}
