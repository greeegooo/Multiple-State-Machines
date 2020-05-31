import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = "/";

@Injectable({
  providedIn: 'root',
})
export class CrudService<T> {

  url: string = "";

  constructor(private http: HttpClient) {}

  name(controllerName: string) : CrudService<T> {
    this.url = baseUrl + controllerName;
    return this;
  }

  get(): Observable<T[]> {
    const obs = this.http.get<T[]>(this.url);
    return obs;
  }

  getById(id: number): Observable<T> {
    const obs = this.http.get<T>(this.url + "/" + id.toString());
    return obs;
  }
}
