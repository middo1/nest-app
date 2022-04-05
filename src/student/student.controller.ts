import { Controller, Get, Post, Put } from "@nestjs/common";


@Controller('students')
export class StudentController {
    @Get()
    getStudents(){
        return "All students"
    }

}