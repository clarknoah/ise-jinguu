import { Component, OnInit } from '@angular/core';
import { AuthService }  from '../service/auth.service';

@Component({
  selector: 'ise-jingu',
  templateUrl: './ise-jingu.component.html',
  styleUrls: ['./ise-jingu.component.css']
})
export class IseJinguComponent implements OnInit {
  isLoggedIn: boolean;
  constructor(authService: AuthService) {
    this.isLoggedIn = authService.isLoggedIn();
  }

  ngOnInit() {
  }

}
