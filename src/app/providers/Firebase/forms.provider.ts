import FirebaseSrc from './firebase.dataSource'
import FormsService from 'src/app/services/forms.service';
import {Injectable} from '@angular/core';
import { IFormStruct, IFormResponse } from '../../interfaces/interfaces';


@Injectable()
export default class FormsProvider extends FormsService {
    constructor(private _src: FirebaseSrc) {
        super()
    }

    async getFormsStructsByTeacher(idTeacher: string): Promise<IFormStruct[]> {
        let result = await this._src.makeRequest({
            action: "GET",
            path: `teachers/${idTeacher}/structs`
        })

        let notVoid = result as unknown as {
            value: any;
            key: string;
        }
        
        if(notVoid.value != undefined) {
            return notVoid.value as IFormStruct[]
        } else {
            return []
        }
    }
    addFormStructure(form: IFormStruct): Promise<void> {
        throw new Error("Method not implemented.");
    }
    addFormRespose(form: IFormResponse): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async getFormsResponseByChild(idChild: string): Promise<IFormResponse[]> {
        let result = await this._src.makeRequest({
            action: "GET",
            path: `children/${idChild}/responses`
        })

        let notVoid = result as unknown as {
            value: any;
            key: string;
        }
        
        if(notVoid.value != undefined) {
            return notVoid.value as IFormResponse
        } else {
            return undefined
        }
    }
}