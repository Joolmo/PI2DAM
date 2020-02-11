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

        if (result.result == true) {
            this._source.addAuth(result.data[0].Token)
            this.currentUser = this.fromResponseToUser(result.data[0])

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
    
    async getChildrenById(id: number): Promise<IChildren> {
        let result = await this._source.makeRequest({
            path: "child",
            params: {
                id: id
            },
            method: "GET"
        })

        if (result.result == true) {
            return this.fromResponseToChild(result.data[0])
        }
        else {
            return undefined
        }
    }

    fromResponseToChild(response: any): IChildren {
        return {
            id: response.Id,
            name: response.Name,
            surname: response.Surname
        }
    }

    fromResponseToUser(response: any): IUsers {
        return {
            id: response.Id,
            user : response.UserName,
            password : response.Password,
            isTeacher : response.IsTeacher,
        }
    }
}