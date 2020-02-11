import {Injectable} from '@angular/core';
import { ITeacher, IChild, IUser } from '../interfaces/IUser';

@Injectable()
export default abstract class UserService {
    abstract login(userName: string, password: string): Promise <boolean>;
    abstract registerTeacher(teacher: ITeacher): Promise <boolean>;
    abstract registerChildren(children: IChild): Promise <boolean>;
    abstract getCurrentUser(): IUser;
    abstract getChildById(id: number): Promise<IChild>;    
}