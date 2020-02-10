import UserService from 'src/app/services/user.service';
import { ITeacher, IChildren, IUsers } from 'src/app/interfaces/IUser';
import ApiRestSrc from './apiRest-dataSource';

export default class UserProvider extends UserService{
    currentUser: IUsers
    
    constructor(private _source: ApiRestSrc) {
        super();
    }

    async login(userName: string, password: string): Promise<boolean> {
        let result = await this._source.makeRequest({
            path: "login",
            method: "POST",
            params: {
                UserName: userName,
                Password: password
            }
        })

        if (result.response == true) {
            this.currentUser = result.data[0]
            return true
        }
        else {
            this.currentUser = undefined
            return false
        }
    }
    registerTeacher(teacher: ITeacher): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    registerChildren(children: IChildren): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    getCurrentUser(): IUsers {
        return this.currentUser
    }
    getChildrenById(id: number): Promise<IChildren> {
        throw new Error("Method not implemented.");
    }

    
}