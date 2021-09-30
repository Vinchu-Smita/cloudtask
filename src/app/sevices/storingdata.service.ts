import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoringdataService {

  constructor(private http:HttpClient) { }
  store(keyname:any,value:any){
    console.log('storing function called');
    localStorage.setItem(keyname,value);
  }
  recieve(keyname:any){
    return localStorage.getItem(keyname);
  }
  remove(keyname:any)
  {localStorage.removeItem(keyname);}

}


