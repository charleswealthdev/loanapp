import { AdmintokenService } from './admintoken.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  public loggedIn = new BehaviorSubject <boolean>(this.token.loggedIn())

  authO = this.loggedIn.asObservable();
  
  changeAutho(value: boolean){
      this.loggedIn.next(value)
  }
  constructor(private token: AdmintokenService) { }
}
