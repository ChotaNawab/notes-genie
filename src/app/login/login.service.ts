import { Injectable } from '@angular/core';
import { Http , Headers , RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SignupService {
    // export class loginservice {
  result: any;

  constructor(private http: Http) { }

  getArticles() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
    .map(res => this.result = res.json());
  }

}
