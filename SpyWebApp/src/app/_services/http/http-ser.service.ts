import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from "rxjs/Observable"
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'

@Injectable()
export class HttpSerService {

  //Url target server
  serverUrl = "http://95.236.89.221:8000/Server/";

  // constructor
  constructor (private _http: Http) {}

  //append paramethers to headers requests. Content-Type application/json this time.
  createAuthorizationHeader(headers: Headers) {
    headers.append('Content-Type', 'application/json; charset=UTF-8')
  }

  //GET method.
  getMethod(): Observable<any> {

    //create header for request
    let headers = new Headers();

    //set our header
    this.createAuthorizationHeader(headers);

    //GET request with Server Url and headers. Return a response, mapped in json, printed in console.log().
    // Catch errors if fail.
    return this._http
      .get(this.serverUrl, {headers: headers})
      .map((response: Response) => <any> response.json())
      .do(data => console.log(data))
      .catch(this.handleError);
  }

  //POST method
  postMethod(data): Observable<any> {

    //create header for request
    let headers = new Headers();

    //set our header
    this.createAuthorizationHeader(headers);

    //POST request with headers, server Url and JSON data. Return a response, mapped in JSON. Catch errors if fail.
    return this._http.post(this.serverUrl, JSON.stringify(data), {headers: headers})
      .map((response:Response) => response.json())
      .catch(this.handleError);

  }

  //Error Response
  private handleError(error: Response)
  {

    // Create a customized error message, printed if some error is catched
    let message = "Error status code "+error.status+" at "+error.url;
    return Observable.throw(message);
  }
}
