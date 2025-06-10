import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalVariable } from './global';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(GlobalVariable.BASE_API_URL);
    // return this.http.get<any>(`${GlobalVariable.BASE_API_URL}/project/addProject`, projectInfo);
  }

}
