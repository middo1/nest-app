import { HttpException, Injectable, NestMiddleware} from "@nestjs/common"
import { Request, Response, NextFunction} from "express"
import { teachers } from "../../db"

@Injectable()
export class ValidateTeacherMiddleware implements NestMiddleware {
    use(res: Response, req: Request, next: NextFunction) {
        const teacherId = req.params.teacherId;
        const teacherExist = teachers.some(teacher => {
            return teacherId === teacher.id
        });
        if(!teacherExist) {
            throw new HttpException("Teacher not found", 400)
        }
        next()
    }
}