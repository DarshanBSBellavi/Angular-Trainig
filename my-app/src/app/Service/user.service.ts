import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { users } from '../modules/users';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  getuser(){
    return this.http.get<any>('http://localhost:3000/post')
  }

  postuser(data:any):Observable<any>{
   
    return this.http.post<users[]>('http://localhost:3000/signup',data)

  }
  
}
