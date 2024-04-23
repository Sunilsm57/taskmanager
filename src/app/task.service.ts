import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/api/tasks';
  constructor(private http: HttpClient) {}

  addTask(title: string, description: string, status: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, {
      title,
      description,
      status,
    });
  }
  getTasks(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  deleteTask(taskId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${taskId}`);
  }
  updateTask(
    taskId: string,
    title: string,
    description: string,
    status: string
  ): Observable<any> {
    const url = `${this.apiUrl}/${taskId}`;
    return this.http.put<any>(url, { title, description, status });
  }
}
