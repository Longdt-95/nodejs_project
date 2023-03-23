import { StudentRepository } from '../repository/Student';

const studentRepository = new StudentRepository();

export class StudentServices {
  public getAllStudents() {
    const students = studentRepository.getAllStudent();
    return students;
  }
}
