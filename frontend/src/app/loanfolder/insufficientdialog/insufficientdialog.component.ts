import { Router } from '@angular/router';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { OfferloanService } from 'src/app/adminfolder/Servicefolder/offerloan.service';

@Component({
  selector: 'app-insufficientdialog',
  templateUrl: './insufficientdialog.component.html',
  styleUrls: ['./insufficientdialog.component.css']
})
export class InsufficientdialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<InsufficientdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public api: OfferloanService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
    this.router.navigate(['/sidebar/dashboard']);
  }

}
