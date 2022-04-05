import { Controller, Post, Get, Put } from "@nestjs/common";

@Controller('teachers')
export class TeacherController {
    @Get()
    getTeachers() {
        return "gotten the teachers"
    }

    @Get('/:teacherId')
    getTeacherbyId() {
        return "gotten a student by id"
    }

    @Get('/:teacher/students')
    getStudentForEachTeacher() {
        return "students for each teacher"
    }
    @Put('/:teacher:students/:studentId')
    updateStudentForEachTeacher() {
        return "updated students per teacher"
    }

}