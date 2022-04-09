import { Controller, Post, Get, Put, Param, ParseUUIDPipe } from "@nestjs/common";
import { FindTeacherResponseDto } from "../teacher/dto/teacher.dto";
import { TeacherService} from "../teacher/teacher.service"

@Controller('teachers')
export class TeacherController {

    constructor(private readonly teacherService: TeacherService){}

    @Get()
    getTeachers(): FindTeacherResponseDto[] {
        return this.teacherService.getTeacher()
    }

    @Get('/:teacherId')
    getTeacherbyId(
        @Param('teacherId', new ParseUUIDPipe()) teacherId : string
    ):FindTeacherResponseDto {
        return this.teacherService.getTeacherById(teacherId)
    }
}