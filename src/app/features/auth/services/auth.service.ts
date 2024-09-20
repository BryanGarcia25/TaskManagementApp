import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    private apiUserUrl = 'http://localhost:3000/auth'

    constructor(private http: HttpClient) { }

    registerUser(userData: any) {
        return this.http.post(`${this.apiUserUrl}/register`, userData);
    }

    login(loginData: any) {
        return this.http.post<any>(`${this.apiUserUrl}/login`, loginData);
    }

    logout() {
        localStorage.removeItem('token')
    }
}