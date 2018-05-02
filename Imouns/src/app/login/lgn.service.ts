import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import {Login} from './login';

@Injectable()
export class LgnService {
arr:any
abc:any
  constructor(
    private http: HttpClient
  ) { 
    
  }

  toInsert(frm){
    console.log("hello u r in service")
  return this.http.post('http://localhost:3000/reg', frm,{
    headers: new HttpHeaders({
      'Content-Type' :'application/json'
     })
   })
  }


  selectRec(arr:string, onResult:(login)=>void){
    console.log("hello u r in service" +arr)
    return this.http.post('http://localhost:3000/selected',arr,{

      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    }).subscribe(
      (response: Response) => onResult(response),
      err => onResult(err),
    )

  }

  updateEmp(abc){
    
        let login=new Login()
    
        login._id=abc._id
        login.usrNm=abc.usrNm
        login.femail=abc.femail
        login.phoneNo=abc.phoneNo
        login. pass= abc.pass
    //console.log( login.phoneNo)
        return this.http.put('http://localhost:3000/update',abc,{
          headers:new HttpHeaders({
            'Content-Type':'application/json'
          })
        })
      }



  onDel(arr:any){
    return this.http.post('http://localhost:3000/del',arr,{
      headers : new HttpHeaders({
        'Content-Type':'application/json'
      })
    })
  }

}
