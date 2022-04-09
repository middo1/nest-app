import { Module } from '@nestjs/common';
import { StudentController } from 'src/student/student.controller';
import { StudentModule } from 'src/student/student.module';
import { TeacherController } from './teacher.controller';
import { TeacherService } from './teacher.service';

@Module({
    imports: [StudentModule],
    controllers: [TeacherController, StudentController],
    providers: [TeacherService]
})
export class TeacherModule {}
