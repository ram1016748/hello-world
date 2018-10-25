import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http' ;
import { Observable } from 'rxjs/Rx' ;
import 'rxjs/add/operator/map';
import { LocalStorageService } from 'angular-2-local-storage';
import { CoreurlService } from './coreurl.service';

@Injectable()
export class GroupService {
  getUrl:any;
  constructor(private http:Http, private localStorageService:LocalStorageService,private coreurlService:CoreurlService) {  
   }
  getGroupData() {
    this.getUrl = this.coreurlService.serviceURL ;
    const url = this.getUrl.fetchtpaassociations_url+this.localStorageService.get('tpaid')+'' ;  
    return this.http.get(url)
    .map((function(response:Response){     
      return response.json() ;
    }))

// public get<T>(url: string): Observable<T> {
// const token = localStorage.getItem('token');
// this.httpOptions = {
// headers: new HttpHeaders({
// ';-Type': 'application/json',
// 'Authorization': 'Bearer ' + token
// })
// };
// return this.http.get<T>(this.baseUrl + url, this.httpOptions);
// }


  }

}
