import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {FormGroup} from '@angular/forms';

export class Creditials {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model = new Creditials();
  constructor(public router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.model.password === '12345'
      && this.model.username === 'Bob') {
      localStorage.setItem('token', 'true');
      this.router.navigate(['admin']);
    }

  }
}

