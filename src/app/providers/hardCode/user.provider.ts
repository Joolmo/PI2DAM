import HardCodeDataSource from './hardCode-dataSource';
import UserService from 'src/app/services/user.service';
import { IChildren, ITeacher, IUsers } from 'src/app/interfaces/IUser';


export default class UserProvider extends UserService {
    async login(userName: string, password: string): Promise<boolean> {
        let result = HardCodeDataSource.user.filter(e => e.password === password && e.userName === userName);
        return result.length > 0;
    }
    async registerTeacher(teacher: ITeacher): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async registerChildren(children: IChildren): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    getCurrentUser(): IUsers {
        throw new Error("Method not implemented.");
    }
}