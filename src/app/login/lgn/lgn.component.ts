import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LgnService} from './lgn.service';
import { loginCls } from './loginCls';

@Component({
  selector: 'app-lgn',
  templateUrl: './lgn.component.html',
  styleUrls: ['./lgn.component.css'] ,
  providers: [LgnService]
})
export class LgnComponent implements OnInit {
  lgn: Array <loginCls>

  resMsg: string;

  constructor(
    private router: Router, 
    private lgnn: LgnService
  ) {
    this.lgn= new Array()
   }

  ngOnInit() {
    
  }

  onLogin(usNm: string, pass: string){
    let lg = new loginCls()
    lg.usNm=usNm
    lg.pass=pass
    //alert('result')
    this.lgnn.onLoginSer(lg, result => {
      console.log(result.res)
       
      this.resMsg = result;
      if(result.res==='gorakh'){
      this.router.navigate(['dash', result.res] )
    }
    else{
      this.router.navigate(['err'] )
    }
    }); 
  }         
}
