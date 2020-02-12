import {Injectable} from '@angular/core';
import { ITeacher, IChild, IUser } from '../interfaces/IUser';

@Injectable()
export default abstract class UserService {
    abstract login(userName: string, password: string): Promise <boolean>;
    abstract registerTeacher(teacher: ITeacher): Promise <void>;
    abstract registerChildren(children: IChild): Promise <void>;
    abstract getCurrentUser(): IUser | undefined;
    abstract getChildById(id: string): Promise<IChild | undefined>;
    abstract getChildrenByClass(idClass: string): Promise<IChild[]>
}