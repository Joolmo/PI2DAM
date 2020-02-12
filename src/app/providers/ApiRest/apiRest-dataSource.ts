import { IServerResponse } from 'src/app/interfaces/IUser'

interface IProps {
    path: string,
    method: "POST" | "GET" | "PUT" | "DELETE",
    params?: any,
}

export default class ApiRestSrc {
    baseUrl = "https://backendpi.azurewebsites.net/api/"
    headers: any = {
        'Content-Type': 'application/json'
    }

    convertParamsToGet(params: any): string {
        let result = Object.keys(params).reduce((acum, key) => `${acum}&${key}=${params[key]}`, "")
        return `?${result.slice(1)}`
    }

    addAuth(token: string) {
        this.headers["Authorization"] = `Bearer ${token}`
    }

    removeAuth() {
        let newHeaders = Object.keys(this.headers)
            .filter(ele => ele != "Authorization")
            .reduce((acum, ele) => ({...acum, [ele]: this.headers[ele]}), {})
        
        this.headers = newHeaders
    }

    async makeRequest({path, method, params}: IProps): Promise<IServerResponse> {
        if(method === "GET") {
            path += this.convertParamsToGet(params)
            params = undefined
        }

        let result = await fetch(`${this.baseUrl}${path}`, {
            body: JSON.stringify(params),
            headers: this.headers,
            method: method,
            mode: 'cors'
        })

        if(result.ok) {
            let json = await result.json()

            if(method == "GET" && json.Result == undefined) {
                throw "Unparseable response"
            }
            if(method != "GET" && json.Result == undefined)
                return {
                    result: true,
                    data: []    
                }
            else
                return {
                    result: json.Result,
                    data: json.Data
                }
        }
        else {
            throw result.status
        }
    }
}