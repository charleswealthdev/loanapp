import { LoanService } from './../Services/loan.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-atmview',
  templateUrl: './atmview.component.html',
  styleUrls: ['./atmview.component.css']
})
export class AtmviewComponent implements OnInit {

  public newarr = <any>[];
  public atmArray = [];
  public card_no;
  public splittedcard_no;

  constructor(
    public api: LoanService,
    public actroute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let id = this.actroute.snapshot.params.id;
    this.api.fetch_atms().subscribe(data => {
      this.newarr = data;
      this.newarr.filter((u) => {
        if(u.id == id){
          this.card_no = u.card_no.split('-').join('');
          let index1 = this.card_no[0], index2 = this.card_no[1], index3 = this.card_no[2], index4 = this.card_no[3], index5 = this.card_no[6], index6 = this.card_no[7], index7 = this.card_no[8], index8 = this.card_no[9], index10 = this.card_no[12], index11 = this.card_no[13], index12 = this.card_no[14], index13 = this.card_no[15], index15 = this.card_no[18], index16 = this.card_no[19], index17 = this.card_no[20], index18 = this.card_no[21]

          this.splittedcard_no = `${index1}${index2}${index3}${index4}` + " " + " " + `${index5}${index6}${index7}${index8}` + " " + " " + `${index10}${index11}${index12}${index13}` + " " + " "+ `${index15}${index16}${index17}${index18}`;
          
          this.atmArray.push(u);
        }
      });
    })
  }

}
