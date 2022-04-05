import { Controller, Get, Post, Put } from "@nestjs/common";


@Controller('students')
export class StudentController {
    @Get()
    getStudents(){
        return "All students"
    }

    @Get('/:studentId')
    getStudent(){
        return "getting student by ID"
    }

    @Post()
    createStudent(){
        return "student was created"
    }

    @Put('/:studentId')
    editStudents(){
        return "updated some things in student"
    }
}