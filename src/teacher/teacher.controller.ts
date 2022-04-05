import { Controller, Post, Get, Put } from "@nestjs/common";

@Controller('teachers')
export class TeacherController {
    @Get()
    getTeachers() {
        return "gotten the teachers"
    }

    @Get('/:teacherId')
    getTeacherbyId() {
        return "gotten a teacher by id"
    }
}