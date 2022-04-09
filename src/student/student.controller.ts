import { Body, Controller, Get, Param, Post, Put, ParseUUIDPipe } from "@nestjs/common";
import { StudentResponseDto, FindStudentReasponseDto, CreateStudentDto, UpdateStudentDto } from "../student/dto/student.dto"
import { StudentService } from "./student.service";


@Controller('students')
export class StudentController {

    constructor(private readonly studentService : StudentService) {}


    @Get()
    getStudents() : FindStudentReasponseDto[] {
        return this.studentService.getStudents()
    }

    @Get('/:studentId')
    getStudent(
        @Param('studentId',new ParseUUIDPipe()) studentId : string
    ): FindStudentReasponseDto {
        return this.studentService.getStudentById(studentId)
    }

    @Post()
    createStudent(
        @Body() body : CreateStudentDto
    ): StudentResponseDto {
        return this.studentService.createStudent(body)
    }

    @Put('/:studentId')
    editStudents(
        @Param('studentId', new ParseUUIDPipe()) studentId : string,
        @Body() body : UpdateStudentDto
    ): StudentResponseDto{
        return this.studentService.updateStudent(body, studentId)
    }
}