
import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http' ;
import { Observable } from 'rxjs/Rx' ;
import 'rxjs/add/operator/map';
import { LocalStorageService } from 'angular-2-local-storage';
import { CoreurlService } from './coreurl.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GroupService {
  getUrl:any;
  httpOptions:any;
  
  constructor(private http:Http, private localStorageService:LocalStorageService,private coreurlService:CoreurlService ) {  
   }
  getGroupData() {
    
    this.getUrl = this.coreurlService.serviceURL ;
    const url = this.getUrl.fetchtpaassociations_url+this.localStorageService.get('tpaid')+'' ; 
    return this.http.get(url)
    .map((function(response:Response){     
      return response.json() ;
    }))
  }



//   getGroupData(getURL: string, token:string) {
//     this.getUrl = this.coreurlService.serviceURL ;
//    const url = this.getUrl.fetchtpaassociations_url+this.localStorageService.get('tpaid')+'' ; 
//       let headers = new Headers();
//       headers.append('Content-Type', 'application/json');
//       headers.append('Authorization', 'bearer ' + token);
//       let obs = new Observable(observer => {
//           this.http.get(getURL, {headers: headers, body: ''}).subscribe(
//               (response: Response) => {
//                   observer.next(response);
//                   observer.complete();
//               },
//               error=> {
//                   observer.error(error);
//               });
//       });
//       return obs;
// }

}


