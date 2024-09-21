import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Task } from "../model/task.model";
import { map, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class TaskService {
    private apiTaskUrl = 'http://localhost:3000/api'

    constructor(private http: HttpClient) { }

    getAllTasks(): Observable<Task[]> {
        return this.http.get<any[]>(`${this.apiTaskUrl}/tasks`, {headers: new HttpHeaders({'Authorization': `${localStorage.getItem('token')?.toString()}`})}).pipe(
            map((response: any[]) => {
                return response.map(task => ({
                    id: task._id,
                    title: task.title,
                    description: task.description,
                    dueDate: new Date(task.dueDate),  // Si el campo es Date
                    completed: task.completed
                }));
            })
        )
    }
    
}