import { OfferloanService } from './../Servicefolder/offerloan.service';
import { AdmintokenService } from './../Servicefolder/admintoken.service';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AdminService } from '../Servicefolder/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminsidebar',
  templateUrl: './adminsidebar.component.html',
  styleUrls: ['./adminsidebar.component.css']
})
export class AdminsidebarComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  public loggedIn : boolean;
  public myvalue;
  public getloggedadmin = JSON.parse(localStorage.getItem('loggedAdmin')).user.id;

  constructor( 
    private breakpointObserver: BreakpointObserver,
    private Auth: AdminService,
    private route: Router,
    private token: AdmintokenService,
    public api: OfferloanService
    ) {}

    ngOnInit(): void {
    }

    addcategory(){
      this.api.alladmin().subscribe((data:any) => {
        if(data.find((u) => u.id == this.getloggedadmin)){
           this.route.navigate(['/admin_navigations/category']);
        } else{
          console.log("Are you an intruder?");
        }
      })
    }

    routeTodashboard(){
      if(!this.getloggedadmin){
          return;
      } else {
        this.route.navigate(['/admin_navigations/admindashboard']);
      }
    }

    logout(event){
          event.preventDefault();
          this.token.remove();
          this.Auth.changeAutho(false);
          this.route.navigate(['/login']);
      }
}
