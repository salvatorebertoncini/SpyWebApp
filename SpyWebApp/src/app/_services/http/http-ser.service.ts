import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from "rxjs/Observable"
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'

@Injectable()
export class HttpSerService {

  serverUrl = "http://95.236.84.155:8000/Server/"

  constructor (private _http: Http) {}

  createAuthorizationHeader(headers: Headers) {
    headers.append('Content-Type', 'application/json; charset=UTF-8')
  }

  getMethod(): Observable<any> {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this._http
      .get(this.serverUrl, {headers: headers})
      .map((response: Response) => <any> response.json())
      .do(data => console.log(data))
      .catch(this.handleError);
  }

  postMethod(data): Observable<any> {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this._http.post(this.serverUrl, JSON.stringify(data), {headers: headers})
      .map((response:Response) => response.json())
      .catch(this.handleError);

  }

  private handleError(error: Response)
  {
    //console.error(error);

    let message = "Error status code "+error.status+" at "+error.url;
    return Observable.throw(message);
    //return Observable.throw("error");
  }
}
