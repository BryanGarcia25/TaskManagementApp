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

    createTask(taskData: any) {
        return this.http.post<any>(`${this.apiTaskUrl}/createTask`, taskData, { headers: new HttpHeaders({ 'Authorization': `${localStorage.getItem('token')}` }) })
    }

    getAllTasks(): Observable<Task[]> {
        return this.http.get<any[]>(`${this.apiTaskUrl}/tasks`, {headers: new HttpHeaders({'Authorization': `${localStorage.getItem('token')?.toString()}`})}).pipe(
            map((response: any[]) => {
                return response.map(task => ({
                    id: task._id,
                    title: task.title,
                    description: task.description,
                    dueDate: new Date(task.dueDate),
                    completed: task.completed
                }));
            })
        )
    }

    getTaskById(idTask: string) {
        return this.http.get<Task>(`${this.apiTaskUrl}/task/${idTask}`, { headers: new HttpHeaders( { 'Authorization': `${localStorage.getItem('token')}` }) })
    }

    deleteTask(idTask: string) {
        return this.http.delete<any>(`${this.apiTaskUrl}/deleteTask/${idTask}`, { headers: new HttpHeaders( { 'Authorization': `${localStorage.getItem('token')}` } ) });
    }
    
}