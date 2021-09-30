import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from'../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  public  path =`http://localhost:3000/`

  constructor(private http:HttpClient) { }
  getData(keyname:any){
    var ans=this.http.get(environment.path+keyname);
    return ans;
  }
  
   postData(keyname:any,data:any){
      var ans=this.http.post(environment.path+keyname,data);
      return ans;
    }
    putData(keyname:any,data:any){
     
     var ans=this.http.put(environment.path+keyname,data);
     return ans;
   }
   editData(keyname:any,data:any,id:any){
     var ans = this.http.put(environment.path+keyname,data,id)
     return ans;
   }
}
