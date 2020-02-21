import FirebaseSrc from './firebase.dataSource'
import FormsService from 'src/app/services/forms.service';
import {Injectable} from '@angular/core';
import { IFormStruct, IFormResponse, IFirebaseResponse } from '../../interfaces/interfaces';


@Injectable()
export default class FormsProvider extends FormsService {
    constructor(private _src: FirebaseSrc) {
        super()
    }

    async getFormsStructsByTeacher(idTeacher: string): Promise<IFirebaseResponse<IFormStruct>[]> {
        let result = await this._src.makeRequest({
            action: "GET",
            path: `teachers/${idTeacher}/formStructs`
        })

        let notVoid = result as {
            value: IFormStruct;
            key: string;
        }[]
        
        if(notVoid.length != undefined && notVoid.length > 0) {
            return notVoid
        } else {
            return []
        }
    }

    async addFormStructure(form: IFormStruct): Promise<string> {
        let result = await this._src.makeRequest({
            action: "CREATE",
            path: `teachers/${form.teacherId}/formStructs`,
            params: form
        })

        let notVoid = result as string
        
        if(notVoid != undefined) {
            return notVoid
        } else {
            return ""
        }
    }
    
    async addFormRespose(form: IFormResponse): Promise<string> {
        let result = await this._src.makeRequest({
            action: "CREATE",
            path: `children/${form.idChild}/formResponses`,
            params: form
        })

        let notVoid = result as string
        
        if(notVoid != undefined) {
            return notVoid
        } else {
            return ""
        }
    }
    
    async getFormsResponseByChild(idChild: string): Promise<IFirebaseResponse<IFormResponse>[]> {
        let result = await this._src.makeRequest({
            action: "GET",
            path: `children/${idChild}/formResponses`
        })

        let notVoid = result as {
            value: IFormResponse;
            key: string;
        }[]
        
        if(notVoid.length != undefined && notVoid.length > 0) {
            return notVoid
        } else {
            return []
        }
    }
}