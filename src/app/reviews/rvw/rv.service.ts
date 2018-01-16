import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RvService {

  constructor(
    private http: HttpClient
  ) { }

  rvws(onRvs: (dt) => void) {
    this.http.get('http://localhost:3000/rvws').subscribe(
        dt => onRvs(dt),
        err => console.log(err),
        () => console.log(`Completed The Event`)
    )
}

}
