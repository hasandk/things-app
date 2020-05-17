import { Thing } from './entities/thing';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://angular2api2.azurewebsites.net/api/internships';

  constructor(private http: HttpClient) { }

  getAllThings(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  addThing(thing: Thing) {
    thing.localFilter = 'Thing';
    return this.http.post(this.baseUrl, thing);
  }
}
