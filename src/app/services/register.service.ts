import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterParticular, RegisterProfessionnal,RegisterParticularResponse,RegisterProfessionnalResponse } from '../utils/types';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl = 'https://users-service-enu3.onrender.com/api/v1';

  constructor(private http: HttpClient) { }

  sendOTPRegister(email: string): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/send-otp?email=${encodeURIComponent(email)}`, null);
  }
  verifyOTP(email: string, otp: string): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/verify-register-otp`, { email, otp_code: otp });
  }
  registerParticulier(registerParticular: RegisterParticular): Observable<RegisterParticularResponse> {
        return this.http.post<RegisterParticularResponse>(`${this.apiUrl}/register/particular`,registerParticular);
  }

  registerProfessionnal(registerProfessionnal: RegisterProfessionnal): Observable<RegisterProfessionnalResponse> {
    return this.http.post<RegisterProfessionnalResponse>(`${this.apiUrl}/register/professional`,registerProfessionnal);    
  }


}
