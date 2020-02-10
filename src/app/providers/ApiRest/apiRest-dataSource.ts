import { IServerResponse } from 'src/app/interfaces/IUser'

interface IProps {
    path: string,
    method: "POST" | "GET" | "PUT" | "DELETE",
    params?: any,
}

export default class ApiRestSrc {
    baseUrl = "https://backendpi.azurewebsites.net/api/"
    headers = {
        'Access-Control-Allow-Origin':'*',
        'Content-Type': 'application/json'
    }

    convertParamsToGet(params: any): string {
        let result = Object.keys(params).reduce((acum, key) => `${acum}&${key}=${params[key]}`, "")
        return `?${result.slice(1)}`
    }

    async makeRequest({path, method, params}: IProps): Promise<IServerResponse> {
        if(method === "GET") {
            path += this.convertParamsToGet(params)
            params = undefined
        }

        let result = await fetch(`${this.baseUrl}${path}`, {
            body: params,
            headers: this.headers,
            method: method,
            mode: 'cors'
        })
        if(result.ok) {
            let json = await result.json()
            return {
                response: json.Response,
                data: json.Data
            }
        }
        else {
            return {
                response: false,
                data: `Status Code: ${result.status}`
            }
        }
    }
}