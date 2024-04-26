import { Component } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Student } from '../models/student.interface';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent {

  date: Date = new Date();
  childText!: string;
  showP: boolean = false;

  students!: Student[];

  constructor(private studentService: StudentService) {
    studentService.getStudents().subscribe(
      (resp: Student[]) => this.students = resp)
  }

  notifyParent(value: any): void {
    this.childText = value;
  }

  add(name: string, email: string, uname: string): void {
    // Removal of whitespace from the data
    name = name.trim();
    email = email.trim();
    uname = uname.trim();

    // Stop execution when fields are empty
    if (!name || !email || !uname) {
      return;
    }

    // Stop execution when e-mail address does not contain "@"
    if (email.indexOf('@') < 1) {
      return;
    }

    let student: Student = {
      name: name,
      username: uname,
      email: email,
    };

    // Upload data to server and update local table
    this.studentService.addStudent(student)
      .subscribe((student: Student): void => {
      this.students.push(student);
    });
  }

  getStudents(): void {
    this.studentService.getStudents().subscribe((students: Student[]): void => {
      this.students = students;
    });
  }

  deleteStudent(student: Student): void {
    this.students = this.students.filter((s: Student): boolean => s !== student);
    this.studentService.deleteStudent(student).subscribe();
  }
}
