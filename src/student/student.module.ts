import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ValidateStudentMiddleware } from 'src/common/middleware/validateStudent.middleware';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';

@Module({
    controllers: [StudentController],
    providers: [StudentService],
    exports: [StudentService]
})
export class StudentModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(ValidateStudentMiddleware).forRoutes({
            path: "students/:studentId",
            method: RequestMethod.GET
        });
        consumer.apply(ValidateStudentMiddleware).forRoutes({
            path: "students/:studentId",
            method: RequestMethod.PUT
        })
    }
}
