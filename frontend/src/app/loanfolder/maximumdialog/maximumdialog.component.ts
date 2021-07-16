import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { OfferloanService } from 'src/app/adminfolder/Servicefolder/offerloan.service';

@Component({
  selector: 'app-maximumdialog',
  templateUrl: './maximumdialog.component.html',
  styleUrls: ['./maximumdialog.component.css']
})
export class MaximumdialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<MaximumdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public api: OfferloanService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
    this.router.navigate(['/sidebar/listofloans']);
  }

}
