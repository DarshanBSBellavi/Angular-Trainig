import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Person} from '../modules/people'; 
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { sampleusers} from '../modules/sampleusers'; 


 
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseURL: string = "http://localhost:3000/";
  users:sampleusers[]=[];
  constructor(private http: HttpClient) { }

  getPeople(): Observable<Person[]> {
    console.log('getPeople '+this.baseURL + 'people')
    return this.http.get<Person[]>(this.baseURL + 'people')
  }
 
  addPerson(person:Person): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(person);
    console.log(body)
    return this.http.post(this.baseURL + 'people', body,{'headers':headers})
  }
 saveusers(user:sampleusers){
this.users.push(user);
 }
}
