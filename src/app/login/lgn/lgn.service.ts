import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loginCls } from './loginCls';

@Injectable()
export class LgnService {

  constructor(private http: HttpClient) { }



onLoginSer(lgn: loginCls, onResult: (res) => void) {
  this.http.post(
    'http://localhost:3000/login',
    lgn, {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  ).subscribe(
    (response: Response) => onResult(response),
    err => onResult(err),
    );
  }
}
