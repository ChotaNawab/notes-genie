import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';
import { SignupService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signupForm: FormGroup;
  articles: any;

  constructor(private fb: FormBuilder, private loginService: SignupService) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z_\- ]+$/), Validators.maxLength(5)])],
      'password': ['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z_\- ]+$/), Validators.maxLength(5)])]
      
    });
    
    this.loginService.getArticles()      .subscribe(res => this.articles = res);

}
}
