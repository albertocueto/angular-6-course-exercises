import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {catchError, map } from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServersService {

  constructor(private http: HttpClient) { }

  storeServers(servers: any[]) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'}); // Not necessary, is the default
    // return this.http.post(
    //     'https://udemy-course-ng-http-cc0af.firebaseio.com/data.json',
    //     servers,
    //     { headers: headers });
    return this.http.put(
        'https://udemy-course-ng-http-cc0af.firebaseio.com/data.json',
        servers,
        { headers: headers });
  }

  getServers() {
    return this.http.get('https://udemy-course-ng-http-cc0af.firebaseio.com/data.json')
      .pipe(map((response: any[]) => {
        for (const server of response) {
          server.name = 'FETCHED_' + server.name;
        }
        return response;
      }))
      .pipe(catchError(error => {
        console.log(error);
        return throwError('We took an unexpected turn and something went horribly wrong.');
      }));
  }

  getAppName() {
    return this.http.get('https://udemy-course-ng-http-cc0af.firebaseio.com/appName.json')
        .pipe(map((response: any) => {
          console.log(response);
          return response;
        }));
  }
}
