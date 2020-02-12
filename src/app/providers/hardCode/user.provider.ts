import HardCodeDataSource from './hardCode-dataSource';
import UserService from 'src/app/services/user.service';
import { IChild, ITeacher, IUser } from 'src/app/interfaces/IUser';

export default class UserProvider extends UserService {
    async login(userName: string, password: string): Promise<boolean> {
        let result = HardCodeDataSource.user.filter(e => e.password === password && e.userName === userName);
        return result.length > 0;
    }
    async registerTeacher(teacher: ITeacher): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async registerChildren(children: IChild): Promise<boolean> {
        //throw new Error("Method not implemented.");
        let result = HardCodeDataSource.child.push(children);
        return true; 
    }

    async getChildById(id: number): Promise<IChild> {
        let result = HardCodeDataSource.child.filter(e => e.id == id);
        return result[0];
    }

    async getUserById(id: number): Promise<IUser> {
        let result = HardCodeDataSource.user.filter(e => e.id == id);
        return result[0];
        
    }
    
    getCurrentUser(): IUser {
        throw new Error("Method not implemented.");
    }

    /*async modifyChildrenById(id: number, children: IChildren): Promise <IChildren>{

    }*/
}