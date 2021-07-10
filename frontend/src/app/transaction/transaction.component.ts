import { Router, ActivatedRoute } from '@angular/router';
import { LoanService } from './../Services/loan.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

public arrays = <any>[];
public myarrays = []; 
filterTerm: string;

  constructor(
    public api: LoanService,
    public route: Router,
    public actroute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    
    let {id} = this.actroute.snapshot.params;
    this.api.alltransactions().subscribe(data => {
       this.arrays = data;
       this.myarrays = this.arrays.filter((u) => u.id == id);
    })
  }

}
