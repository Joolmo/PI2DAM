import { Injectable } from '@angular/core';
import { IClassroom } from '../interfaces/IUser';


@Injectable()
export default abstract class ClassroomService {
    abstract getClassroomsByTeacher(idTeacher: string): Promise<IClassroom[]>;
    abstract addClassroom(classroom: IClassroom): Promise<void>;
    abstract getClassrooms(): Promise<IClassroom[]>;
    abstract addClassroomToTeacher(idClass: string, idTeacher: string): Promise<void>;
    abstract addChildrenToClassroom(idClass: string, idChild: string): Promise <void>;
}