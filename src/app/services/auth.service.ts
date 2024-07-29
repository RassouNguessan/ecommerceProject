import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthCredentials, AuthResponse, ReserCredentials } from '../utils/types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://users-service-enu3.onrender.com/api/v1';

  constructor(private http: HttpClient) { }

  login(credentials: AuthCredentials): Observable<AuthResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'accept': 'application/json'
    });
    const body = new HttpParams()
      .set('username', credentials.username)
      .set('password', credentials.password);

    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, body.toString(), { headers });
  }
  sendOTP(payload: { email: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/password-reset-request`, payload);
  }

  verifyOTP(email: string, otp: string): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/verify-otp`, { email, otp });
  }

  resetPassword(email: string, password: string): Observable<ReserCredentials> {
    return this.http.post<ReserCredentials>(`${this.apiUrl}/password-reset`, { email, password });
  }

  setToken(data: AuthResponse): void {
    localStorage.setItem('authToken', JSON.stringify(data));
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  clearToken(): void {
    localStorage.removeItem('authToken');
  }
}
