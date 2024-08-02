import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {
  AuthCredentials,
  AuthResponse,
  ReserCredentials,
  VerifyOTPPayload,
} from "../utils/types";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private apiUrl = "https://users-service-enu3.onrender.com/api/v1";

  constructor(private http: HttpClient) {}

  login(credentials: AuthCredentials): Observable<AuthResponse> {
    const headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded",
      accept: "application/json",
    });
    const body = new HttpParams()
      .set("username", credentials.username)
      .set("password", credentials.password);

    return this.http.post<AuthResponse>(
      `${this.apiUrl}/login`,
      body.toString(),
      { headers }
    );
  }

  refreshToken(): Observable<AuthResponse> {
    const refresh = this.getRefreshToken();
    return this.http.post<AuthResponse>(`${this.apiUrl}/refresh`, { refresh });
  }

  sendOTP(payload: { email: string }): Observable<string> {
    return this.http.post<string>(
      `${this.apiUrl}/password-reset-request`,
      payload
    );
  }


  verifyOTP(payload: VerifyOTPPayload): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/verify-otp`, payload);
  }

  resetPassword(payload: ReserCredentials): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/password-reset`, payload);
  }

  setToken(data: AuthResponse): void {
    localStorage.setItem("authToken", JSON.stringify(data));
  }

  getToken(): string | null {
    const data = localStorage.getItem("authToken");
    if (data) {
      const dataDecoded: AuthResponse = JSON.parse(data);
      return dataDecoded.access_token;
    }
    return null;
  }

  getRefreshToken(): string | null {
    const data = localStorage.getItem("authToken");
    if (data) {
      const dataDecoded: AuthResponse = JSON.parse(data);
      return dataDecoded.refresh_token;
    }
    return null;
  }

  isAuthenticated(): boolean {
    return this.getToken() !== null;
  }

  clearToken(): void {
    localStorage.removeItem("authToken");
  }
}
