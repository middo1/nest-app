import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { ValidateTeacherMiddleware } from 'src/common/middleware/validateTeacher.middleware';
import { StudentController } from 'src/student/student.controller';
import { StudentModule } from 'src/student/student.module';
import { TeacherController } from './teacher.controller';
import { TeacherService } from './teacher.service';

@Module({
    imports: [StudentModule],
    controllers: [TeacherController, StudentController],
    providers: [TeacherService]
})
export class TeacherModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(ValidateTeacherMiddleware).forRoutes({
            path: "teachers/:teacherId",
            method: RequestMethod.GET
        });
        consumer.apply(ValidateTeacherMiddleware).forRoutes({
            path: "teachers/:teacherId",
            method: RequestMethod.PUT
        })
    }}
