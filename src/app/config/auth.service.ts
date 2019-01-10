import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor( private angularFireAuth: AngularFireAuth ) { }

  registerUser( username: string, email: string, password: string ) {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password).then(()=>{
      debugger;  
    });
  }
}
