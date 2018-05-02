import { Component, OnInit } from '@angular/core';
import { LgnService } from './lgn.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Router} from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LgnService]
})
export class LoginComponent implements OnInit {
  title = 'iMuons Web Solutions Pvt Ltd';
  _id:string
  usNm:string
  fe:string
  pn:string
  pass:string
  regs:any
  arr:any
  id1:string
  arr1:any
  resmsg:string
  constructor(
   private lgn:LgnService,
   private http: HttpClient,
   private router: Router
  ) {

    this.http.get('http://localhost:3000/registration').subscribe(data=>{
      //console.log("hello this is in constructor")
      console.log(data)
      this.regs= data
      }
    )
   }


  ngOnInit() {
  }



  onSubmit(frm:any){
    console.log("hello")
   // console.log(frm.password)
   this.lgn.toInsert(frm).subscribe(
     res=>console.log(res),
     err=>console.log(err),
     ()=>
     {
       console.log("Data Inserted Successfully")
       location.reload()
     }
   )
  }

  onSelect(_id:string){
   // console.log(_id)
    this.arr={
      "_id":_id
    }
     console.log(this.arr)

  this.lgn.selectRec(this.arr, result=>{
  this.id1=result._id
  this.usNm=result.usrNm
  this.fe=result.femail
  this.pn=result.phoneNo
  this.pass= result.pass
    })
}


updateEmp(usrNm:string,femail:string,phoneNo:string,pass:string, id:string){
  console.log(id)
    this.arr1={
     "_id":id,
     "usrNm":usrNm,
     "femail":femail,
     "phoneNo":phoneNo,
     "pass":pass

   }
   console.log(this.arr1)
   return this.lgn.updateEmp(this.arr1).subscribe(

     res=>console.log(res),
     err=>console.log(err),
     ()=>{
 // location.reload()
       this.resmsg="Record Updated Successfully"
     
     }
   )

 }





  onDelete(_id:string){
     this.arr={
       "_id":_id
     }
     this.lgn.onDel(this.arr).subscribe(
       res=>console.log(res),
       err=>console.log(err),
       ()=>{
         console.log("deleted sucessfully")
         location.reload()
       }
     )
  }



}


