import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Kontingent } from "./kontingent";
@Injectable({
  providedIn: 'root'
})
export class KontingentsService {
  private apiURL = "http://localhost:50016/api";
  constructor(private httpClient: HttpClient) { }
  getKontingents(): Observable<Kontingent[]> {
    return this.httpClient.get<Kontingent[]>('/api/kontingents')  
      .pipe(
        catchError(this.errorHandler)
      );
  }
  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
