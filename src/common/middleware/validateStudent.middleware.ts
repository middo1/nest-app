import { HttpException, Injectable, NestMiddleware} from "@nestjs/common"
import { Request, Response, NextFunction} from "express"
import { students } from "../../db"

@Injectable()
export class ValidateStudentMiddleware implements NestMiddleware {
    use(res: Response, req: Request, next: NextFunction) {
        const studentId = req.params.studentId;
        const studentExist = students.some(student => {
            return studentId === student.id
        });
        if(!studentExist) {
            throw new HttpException("Student not found", 400)
        }
        next()
    }
}