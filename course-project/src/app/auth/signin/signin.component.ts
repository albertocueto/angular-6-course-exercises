import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {}

  onSignIn(form: NgForm, event: Event) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signinUser(email, password);
    event.preventDefault();
  }

}
