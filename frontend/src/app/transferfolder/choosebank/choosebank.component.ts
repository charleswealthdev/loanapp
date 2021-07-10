import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choosebank',
  templateUrl: './choosebank.component.html',
  styleUrls: ['./choosebank.component.css']
})
export class ChoosebankComponent implements OnInit {

  public getuser = JSON.parse(localStorage.getItem('loggedUser')).user.id;

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  routeToOtherbanks(){
    this.router.navigate([`/sidebar/otherbanks/${this.getuser}`])
  }

  routeTocashloan(){
    this.router.navigate([`/sidebar/cashloan/${this.getuser}`])
  }

}
