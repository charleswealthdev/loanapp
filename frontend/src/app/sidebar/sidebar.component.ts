import { LoanService } from './../Services/loan.service';
import { TokenService } from './../Services/token.service';
import { Router } from '@angular/router';
import { AuthService } from './../Services/auth.service';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    public loggedIn : boolean;
    public localstorage;
    public clientid;
    public firstalpha;
    myvalue = 0;
    public forms = <any>{};
    public arrays = <any>[];
    public mynotifications = <any>[];
    public listofnotifications = <any>[];
    public id;
    public showtab = true;
    public getitem;
    public arrayOfnotificaton = [];
    public notificationcount;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private Auth: AuthService,
    private route: Router,
    private token: TokenService,
    public api: LoanService
    ) {}

  ngOnInit() {
    this.Auth.authO.subscribe(value => this.loggedIn = value)
    this.getitem = JSON.parse(localStorage.getItem('loggedUser'));
    this.localstorage = this.getitem.user.lastname;
    this.firstalpha = this.getitem.user.lastname[0];
    this.clientid = this.getitem.user.clientID;
    // this.myvalue = this.api.numbers;
    
    this.api.getnotification().subscribe(data => {
       this.mynotifications = data;
       let id = this.getitem.user.id;
       this.notificationcount = this.mynotifications.filter((u) => u.id == id);
       this.api.numbers = this.notificationcount.length;
       this.myvalue = this.api.numbers;
    })
    
    let loggedUser = JSON.parse(localStorage.getItem('loggedUser'));

    this.api.fetch_atms().subscribe((data:any) => {
      let myatmcheck = data.find((u) => u.id == loggedUser.user.id);
      if(myatmcheck){
        this.showtab = false;
      } else{
        this.showtab = true
      }
    
    })

  }
  
  logout(event){
      event.preventDefault();
      this.token.remove();
      this.Auth.changeAutho(false);
      this.route.navigate(['/login']);
      localStorage.removeItem('clientId')
      localStorage.removeItem('loggedUser')
  }

  displaynotification(){
    let id = this.getitem.user.id;
    this.api.getnotification().subscribe(data => {
      this.mynotifications = data;
    })
    this.mynotifications.map(el => {
      this.forms = {
        id,
        name : el.name
      }
    })
    this.api.deletenotifications(id).subscribe(data => {
      if(data){
        this.api.notifsHistory(this.forms).subscribe(data => {
           console.log(data);
        })
      }
    })    
    
    this.route.navigate(['/sidebar/notification']);
    this.notificationcount = 0;
    this.myvalue = 0;

  }

  loantransaction(){
      this.route.navigate(['/sidebar/loantransactions']);
  }

  billpayment(){
    let loggedUser = JSON.parse(localStorage.getItem('loggedUser')).user.id || [];
    if(!loggedUser){
      return;
    } else {
      this.route.navigate(['/sidebar/billpayment']);
    }
  }

  routeToairtime(){
    let loggedUser = JSON.parse(localStorage.getItem('loggedUser')).user.id || [];
     if(!loggedUser){
       return
     } else {
       this.route.navigate(['/sidebar/airtime']);
     }
  }

  transaction(){
    let id = this.getitem.user.id;
    this.route.navigate([`/sidebar/transaction/${id}`]);
  }

  chatwithus(){
    let loggedUser = JSON.parse(localStorage.getItem('loggedUser')).user.id || [];
    if(!loggedUser){
      return;
    } else {
      this.route.navigate(['/sidebar/chats']);
    }
  }

  viewprofile(){
    let loggedUser = JSON.parse(localStorage.getItem('loggedUser')).user.id || [];

    if(!loggedUser){
        return;
    } else{
      this.route.navigate(['/sidebar/profile']);
    }
  }

}
