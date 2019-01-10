import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../config/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  // Formulario de registro y valores recibidos
  registerForm = new FormGroup({
    username: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
  });

  ngOnInit() {

  }

  onSubmit():void {
    const { username, email, password } = this.registerForm.value;
    this.authService.registerUser(username, email, password);
  }
}
