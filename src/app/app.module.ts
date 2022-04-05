import { Module } from '@nestjs/common';
import { StudentController } from '../student/student.controller';
import { TeacherController } from '../teacher/teacher.controller';


@Module({
  imports: [],
  controllers: [StudentController, TeacherController]
})
export class AppModule {}
