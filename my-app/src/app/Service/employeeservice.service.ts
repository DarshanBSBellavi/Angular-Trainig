import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { employee } from '../modules/employee';
import { Observable } from 'rxjs';  
import { HttpHeaders } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {
  url='	https://dummy.restapiexample.com/api/v1';
  employee: employee[] = [];
  constructor(private http:HttpClient) { }

  getAllEmployee(){  
    return this.http.get(this.url + '/employees')
    }

  getEmployeeById(employeeId: string): Observable<employee> {  
    return this.http.get<employee>(this.url + '/employee/' + employeeId);  
  }  

  createEmployee(employee: employee): Observable<employee> {  
    
    return this.http.post<employee>(this.url + '/create',employee);  
  }  

  updateEmployee(employeeId: string): Observable<employee> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put<employee>(this.url + '/update/' + employeeId, httpOptions);  
  }  

  deleteEmployeeById(employeeid: string): Observable<number> {  
      
    return this.http.delete<number>(this.url + '/delete/' +employeeid);  
  }  
}
  