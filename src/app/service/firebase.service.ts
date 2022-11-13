import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private http: HttpClient) {}

  addUser(url: string, obj: {}) {
    return this.http.post(url, obj);
  }

  getUser(url: string) {
    return this.http.get(url);
  }

  deleteUser(url: string, id: string) {
    return this.http.delete(`${url}/${id}.json`);
  }
}
