import { Injectable } from '@nestjs/common';
import { teachers } from '../db';
import {FindTeacherResponseDto, FindStudentForTeacherIdResponseDto, UpdateStudentForEachTeacherById} from '../teacher/dto/teacher.dto'

@Injectable()
export class TeacherService {
    private readonly teachers = teachers;
    getTeacher() : FindTeacherResponseDto[] {
        return this.teachers
    }
    getTeacherById(teacherId : string) : FindTeacherResponseDto {
        return this.teachers.find(teacher => {
           return teacher.id === teacherId
        })
    }
    

}
