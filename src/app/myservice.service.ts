import { Http , HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class MyserviceService {
  result: any;
  constructor(private _http: Http) { }

  getdata()
  {
    return this._http.get('https://aqsach-19576.firebaseio.com/fname.json')
    .map(res => {
      this.result = res.json();
      console.log(this.result);
    });
  }
}
