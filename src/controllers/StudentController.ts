import { Controller, Get, Middleware } from '@overnightjs/core';
import { NextFunction, Request, Response } from 'express';
import { Service } from 'typedi';
import { middlewareTest1, middlewareTest2 } from '../middleware/test1.middleware';
import { ResponseBase } from '../models/base/ResponseBase';
import { StudentServices } from '../services/StudentServices';

@Service()
@Controller('api/student')
export class StudentController {
  studentServices: StudentServices;

  constructor() {
    this.studentServices = new StudentServices();
  }

  @Get('list')
  @Middleware([middlewareTest1, middlewareTest2])
  private async getAllStudent(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const students = this.studentServices.getAllStudents();
      res.status(200).json(
        new ResponseBase({
          students: students
        })
      );
    } catch (ex) {
      next(ex);
    }
  }
}
