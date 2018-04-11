import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
 import {Observable} from "rxjs/Observable";
 import "rxjs/Rx";


@Injectable()
export class DataLoaderService {

  constructor(private http: Http) { }

  getJSON():  Observable<any>  {
    var url = './assets/json/activity-data.json';
    return this.http.get(url)
            .map(
              (res:any) => res.json(), 
              (err: any) => console.log(err));
            
  }

}
