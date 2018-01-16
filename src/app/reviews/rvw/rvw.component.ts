import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http/src/client';
import {RvService} from './rv.service';
import { reviews } from './reviews';
@Component({
  selector: 'app-rvw',
  templateUrl: './rvw.component.html',
  styleUrls: ['./rvw.component.css'],
  providers: [RvService]
})
export class RvwComponent implements OnInit {
  rvws: Array<reviews>

  constructor(
    private rvSr: RvService
  ) { 
    this.rvws = new Array()
  }

  ngOnInit() {
    this.rvSr.rvws(dt => this.rvws = dt as Array<reviews>);
  }

}
