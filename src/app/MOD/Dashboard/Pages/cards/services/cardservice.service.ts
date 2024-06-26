import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Currency } from '../interface/cardResponsive.interface';
import { TokenService } from '@/CORE/Auth/services/token-service.service';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {


  constructor(
    private http: HttpClient,
    private tokenInterceptor: TokenService
  ) {}

  urlBase: string = 'https://api.bancodelapeseta.com';

  getCurrency(uri: string): Observable<Currency[]> {
    const tkn = this.tokenInterceptor.getToken() || '';
    const headers = new HttpHeaders({
      Authorization: `Bearer ${tkn}`,
    });

    return this.http
      .get<Currency[]>(`${this.urlBase}/${uri}`, { headers })
      .pipe(catchError(this.handleError));
  }

  private handleError(error:HttpErrorResponse){
    if(error.status === 0){
      console.log('An error has occurred', error.error);
    }else{
      console.log('Backend status code', error.status, error.error)
    }
    return throwError(()=>new Error('Something failed, try again.'))
  }
}
