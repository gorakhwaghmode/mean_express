import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  dashNm: string
  constructor(
    private router: Router,  
    private actRt: ActivatedRoute
  ) { }

  ngOnInit() {
    
    console.log(this.actRt)
    console.log(this.actRt.snapshot.params)
    this.dashNm = this.actRt.snapshot.params['usNm']
    this.actRt.params.subscribe( prms=>{
      console.log(prms)
      this.dashNm= prms['usNm']
    })
  }

  go(nm:string){
    this.router.navigate(['dash', nm])
    
  }
}
