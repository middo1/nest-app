import { Injectable } from '@nestjs/common';
import { students, teachers } from "../db";
import {v4 as uuid} from "uuid";
import { CreateStudentDto, FindStudentReasponseDto, StudentResponseDto, UpdateStudentDto } from './dto/student.dto';
import {FindTeacherResponseDto, UpdateStudentForEachTeacherById} from "../teacher/dto/teacher.dto"

@Injectable()
export class StudentService {
    private students = students
    private teachers = teachers
    getStudents(): FindStudentReasponseDto[] {
        return this.students
    }

    getStudentById(studentId : string) : FindStudentReasponseDto {
        return this.students.find(student => {
            return student.id === studentId
        })
    }

    createStudent(payload : CreateStudentDto) : FindStudentReasponseDto {
        let newStudent = {
            id : uuid(),
            ...payload
        }

        this.students.push(newStudent)
        return newStudent
    }

    updateStudent(payload : UpdateStudentDto, studentId : string){
        let updatedStudent : StudentResponseDto;

        const updatedStudentList = this.students.map(student => {
            if(student.id === studentId){
                updatedStudent = {
                    id : studentId,
                    ...payload
                } 
            } else return student
        });
        this.students = updatedStudentList

        return updatedStudent
    }

    getStudentByTeacherId(teacherId: string): FindStudentReasponseDto[] {
        return this.students.filter(student => {
            return student.teacher
        })
    }
    updateStudentByTeacher(payload : UpdateStudentForEachTeacherById, teacherId : string){
        let updatedStudent : StudentResponseDto;

        const updatedStudentList = this.students.map(student => {
            if(student.teacher === teacherId){
                updatedStudent = {
                    ...payload,
                    teacher : teacherId,
                } 
            } else return student
        });
        this.students = updatedStudentList

        return updatedStudent
    }
}