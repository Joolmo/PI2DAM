import {Injectable} from '@angular/core';
import { ITeacher, IChildren, IUsers } from '../interfaces/IUser';

@Injectable()
export default abstract class UserService {
    abstract login(userName: string, password: string): Promise <boolean>;
    abstract registerTeacher(teacher: ITeacher): Promise <boolean>;
    abstract registerChildren(children: IChildren): Promise <boolean>;
    abstract getCurrentUser(): IUsers;
}