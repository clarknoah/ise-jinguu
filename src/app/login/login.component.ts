import { Component} from '@angular/core';
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  message: string;

  constructor(public authService: AuthService) {
    this.message='';
  }

  login(username: string, password: string): boolean{
    this.message = '';
    console.log(`User succesfully logged in: ${this.authService.login(username,password)}`);
    if(!this.authService.login(username,password)){
      this.message = 'Incorrect Credentials';
      setTimeout(function(){
        this.message='';
      }.bind(this),2500);
    }
    return false;
  }

  logout(): boolean {
    this.authService.logout();
    return false;
  }

}
