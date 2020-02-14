import UserService from 'src/app/services/user.service';
import { ITeacher, IChild, IUser, IServerResponse } from 'src/app/interfaces/interfaces';
import ApiRestSrc from './apiRest.dataSource';


/* 
    RETURN PATTERN:
    si se busca un solo recurso como "IChild" y no se encuentra => undefined
    si se busca una lista de recursos y no se encutran => [],
    si ocurre una excepcíon no esperada como una falta de permisos (excepto login) => throw error
    si se enctra el recurso o lista de de recursos => se devuelve noramalmente
*/
export default class UserProvider extends UserService{
    currentUser: IUser
    readonly childrenPath = "child"
    readonly teachersPath = "teacher"
    readonly loginPath = "login"

    constructor(private _source: ApiRestSrc) {
        super();
    }

    async getChildrenByClass(idClass: string): Promise<IChild[]> {
        let result: IServerResponse
        
        try {
            result = await this._source.makeRequest({
                path: this.childrenPath,
                method: "GET",
                params: {
                    idClass: idClass
                }
            })
        }

        catch(error) {
            console.warn(error)
            throw error
        }

        if(result.result) return result.data.map(element => this.fromResponseToChild(element))
        else return []

    }

    async login(userName: string, password: string): Promise<boolean> {
        let result: IServerResponse
        try {
            result = await this._source.makeRequest({
                path: this.loginPath,
                method: "POST",
                params: {
                    UserName: userName,
                    Password: password
                }
            })
        }
        catch(error) {
            if(error != 401){
                console.warn(error)
                throw error
            }
            else {
                return false
            }
        }

        if (result.result) {
            this._source.addAuth(result.data[0].Token)
            this.currentUser = this.fromResponseToUser(result.data[0])

            return true
        }
        else {
            this.currentUser = undefined

            return false
        }
    }
    
    async registerChildren(children: IChild): Promise<void> {
        let result: IServerResponse
        try {
            result = await this._source.makeRequest({
                path: this.childrenPath,
                params: {
                    UserName: children.userName,
                    Password: children.password,
                    Surname: children.surname,
                    Name: children.name,
                },
                method: "POST"
            })
        }
        catch(error) {
            console.warn(error)
            throw error
        } 
    }

    getCurrentUser(): IUser | undefined {
        return this.currentUser
    }
    
    async getChildById(id: string): Promise<IChild | undefined> {
        let result: IServerResponse

        try {
            result = await this._source.makeRequest({
                path: this.childrenPath,
                params: {
                    id: id
                },
                method: "GET"
            })   
        }
        catch(error) {
            console.warn(error)
            throw error
        }

        if (result.result == true) return this.fromResponseToChild(result.data[0])
        else return undefined
    }

    async logOff() {
        this._source.removeAuth()
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