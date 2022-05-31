
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Medlem } from "./medlem";
import { Kontingent } from "./kontingent";
@Injectable({
  providedIn: 'root'
})
export class MedlemsService {
  private apiURL = "http://localhost:50016/api";  //  Here is the WRONG CODE 
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private httpClient: HttpClient) { }
  getMedlems(): Observable<Medlem[]> {
     return this.httpClient.get<Medlem[]>('/api/medlems') 
      .pipe(
        catchError(this.errorHandler)
      );
  }
  getMedlem(id): Observable<Medlem> {
    return this.httpClient.get<Medlem>('/api/medlems/' + id)
      .pipe(
        catchError(this.errorHandler)
      );
  }
  getMedlemEtternavn(etternavn): Observable<Medlem[]> {
    return this.httpClient.get<Medlem[]>('/api/medlems/' +  etternavn)
      .pipe(
        catchError(this.errorHandler)
      );
  }
  getMedlemFullnavn(navn): Observable<Medlem[]> {
    return this.httpClient.get<Medlem[]>('/api/medlems/' +  navn)
      .pipe(
        catchError(this.errorHandler)
      );
  }
  createKon(medlem): Observable<Kontingent> {
    return this.httpClient.post<Kontingent>('api/medlems/', JSON.stringify(medlem), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }
  createMedlem(medlem): Observable<Medlem> {
    return this.httpClient.post<Medlem>('/api/medlems/', JSON.stringify(medlem), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }
  updateMedlem(id, medlem): Observable<Medlem> {
	return this.httpClient.put<Medlem>('/api/medlems/' + id, JSON.stringify(medlem), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  deleteMedlem(id) {
    return this.httpClient.delete<Medlem>('api/medlems/' + id, this.httpOptions)
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
