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
        //throw new Error("Method not implemented.");
        let result = HardCodeDataSource.child.push(children);
        return true; 
    }

    async getChildrenById(id: number): Promise<IChildren> {
        let result = HardCodeDataSource.child.filter(e => e.id == id);
        return result[0];
    }

    async getUserById(id: number): Promise<IUsers> {
        let result = HardCodeDataSource.user.filter(e => e.id == id);
        return result[0];
        
    }
    
    getCurrentUser(): IUsers {
        throw new Error("Method not implemented.");
    }

    /*async modifyChildrenById(id: number, children: IChildren): Promise <IChildren>{

    }*/
}