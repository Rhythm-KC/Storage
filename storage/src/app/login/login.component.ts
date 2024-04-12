import { Component, Injectable } from '@angular/core';
import { FormGroup, FormBuilder, FormsModule, Validators} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { UsertokenService } from '../services/usertoken.service';
import { ActivatedRoute, Router } from '@angular/router';
import { debug } from 'console';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private fb: FormBuilder, 
    private auth: AuthService, 
    private token: UsertokenService, 
    private router: Router,
    private route: ActivatedRoute){}

  form: FormGroup = this.fb.group({
    username: [""],
    password:[""]
  });

  login(){
    //this.auth.login(this.form.value.username, this.form.value.password).subscribe(
    //{
    //  next: (data) => this.token.add_session_token(),
    //  error: (err) => {this.token.signOut()}
    //});
    debugger;
    this.token.add_session_token("value")
    this.router.navigateByUrl("/home");
    
  }
}
