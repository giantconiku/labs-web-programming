import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { StudentService } from "../services/student.service";
import { Student } from "../models/student.interface";
import { Location } from "@angular/common";

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent {

  student!: Student;

  constructor(private activatedRoute: ActivatedRoute,
              private studentService: StudentService,
              private location: Location) {
    this.getStudent();
  }

  getStudent(): void {
    // @ts-ignore
    const id: number = +(this.activatedRoute.snapshot.paramMap.get('id'));
    this.studentService.getStudent(id)
      .subscribe(resp => this.student = resp);
  }

  goBack(): void {
    this.location.back()
  }

  save(): void {
    this.studentService.editStudent(this.student)
      .subscribe(() => this.goBack())
  }
}
