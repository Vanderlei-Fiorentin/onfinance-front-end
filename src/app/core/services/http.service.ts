import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';


export class HttpService<T> {

  constructor(protected http: HttpClient, protected API_URL: string) { }

  findAll() {
    return this.http.get<T[]>(this.API_URL).pipe(take(1));
  }  

  findById(id: number) {
    return this.http.get<T>(`${this.API_URL}/${id}`).pipe(take(1));
  }

  save(data: T) {
    return this.http.post<T>(this.API_URL, data).pipe(take(1));
  }

  update(data: T) {
    return this.http.put<T>(this.API_URL, data).pipe(take(1));
  }

  remove(id: number) {
    return this.http.delete<T[]>(`${this.API_URL}/${id}`).pipe(take(1));
  }
  
}
