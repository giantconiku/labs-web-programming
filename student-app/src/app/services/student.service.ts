import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student.interface';

@Injectable({
  providedIn: 'root',
})
export class StudentService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  addStudent(student: Student): Observable<Student> {
    return this.httpClient.post<Student>(this.apiUrl, student, this.httpOptions);
  }

  getStudents(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.apiUrl);
  }

  getStudent(id: number): Observable<Student> {
    return this.httpClient.get<Student>(this.apiUrl + '/' + id);
  }

  editStudent(student: Student): Observable<Student> {
    return this.httpClient.put<Student>(this.apiUrl, student, this.httpOptions);
  }

  deleteStudent(student: Student): Observable<Student> {
    return this.httpClient.delete<Student>(this.apiUrl + '/' + student.id, this.httpOptions);
  }
}
