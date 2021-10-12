import { Request, Response } from 'express';
import CreateCourseService from './CreateCourseService';

export function createCourse(request: Request, response: Response) {

    CreateCourseService.execute({
        name: "NodeJS",
        educator: "Vinicius Henrique",
        duration: 30,

    });

    //RECEBE VALORES DEFAULT
    CreateCourseService.execute({
        name: "REACTJS",
        educator: "Diego Fernandes",

    });

    return response.send();
}