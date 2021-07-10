import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { OfferloanService } from 'src/app/adminfolder/Servicefolder/offerloan.service';

@Component({
  selector: 'app-processingloan',
  templateUrl: './processingloan.component.html',
  styleUrls: ['./processingloan.component.css']
})
export class ProcessingloanComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ProcessingloanComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public api: OfferloanService
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
