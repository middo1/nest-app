import { Controller, Post, Get, Put, Param, Body, ParseUUIDPipe } from "@nestjs/common";
import { FindStudentReasponseDto, StudentResponseDto } from "src/student/dto/student.dto";
import { StudentService } from "src/student/student.service";
import { FindStudentForTeacherIdResponseDto, TeacherResponseDto, UpdateStudentForEachTeacherById , FindTeacherResponseDto} from "../teacher/dto/teacher.dto"

@Controller(`teachers/:teacherId/students`)
export class StudentTeacherController {

    constructor(private readonly studentService : StudentService){}

    @Get()
    getStudentForEachTeacher(
       @Param('teacherId', new ParseUUIDPipe()) teacherId : string
    ): FindStudentReasponseDto[] {
        return this.studentService.getStudentByTeacherId(teacherId)
    }
    @Put('/:studentId')
    updateStudentForEachTeacher(
        @Param('teacherId', new ParseUUIDPipe()) teacherId : string,
        @Param('studentId', new ParseUUIDPipe()) studentId : string
    ): TeacherResponseDto {
        return this.studentService.updateStudentByTeacher(studentId,teacherId)
    }

}