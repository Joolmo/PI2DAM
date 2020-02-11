import UserService from 'src/app/services/user.service';
import { ITeacher, IChild, IUser } from 'src/app/interfaces/IUser';
import ApiRestSrc from './apiRest-dataSource';

export default class UserProvider extends UserService{
    currentUser: IUser
    
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
    
    registerChildren(children: IChild): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    getCurrentUser(): IUser {
        return this.currentUser
    }
    
    async getChildById(id: number): Promise<IChild> {
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

    fromResponseToChild(response: any): IChild {
        return {
            id: response.Id,
            name: response.Name,
            surname: response.Surname,
            userName: response.UserName,
            password: response.Password,
            isTeacher: false
        }
    }

    fromResponseToUser(response: any): IUser {
        return {
            id: response.Id,
            userName : response.UserName,
            password : response.Password,
            isTeacher : response.IsTeacher,
        }
    }
}