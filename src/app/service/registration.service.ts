import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Person} from '../model/person';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private baseUrl = 'http://localhost:8080/api/iqbusiness';

  constructor(private http: HttpClient) { }

  registerPerson(person: Person): Observable<any> {
    return this.http.post(`${this.baseUrl}/person`, person);
  }

  getPersonReport(): Observable<any> {
    return this.http.get(`${this.baseUrl}/persons`);
  }
}
