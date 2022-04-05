import { Controller, Post, Get, Put } from "@nestjs/common";

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
    @Get('')
    getStudentForEachTeacher() {
        return "students for each teacher"
    }
    @Put('/:studentId')
    updateStudentForEachTeacher() {
        return "updated students per teacher"
    }

}