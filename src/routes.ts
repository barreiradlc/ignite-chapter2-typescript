import { Request, Response } from "express"; 
import { createCourseService } from "./CreateCourseService";

export function createCourse(request: Request, response: Response) {
  createCourseService.execute({
    name: 'Node JS', 
    duration: 23, 
    educator: "Dani"
  })

  response.send()
}