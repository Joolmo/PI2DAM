import {Injectable} from '@angular/core';
import { IFormStruct, IFormResponse } from '../interfaces/interfaces';


@Injectable()
export default abstract class FormsService {
    abstract getFormsStructsByTeacher(idTeacher: string): Promise<IFormStruct[]>;
    abstract addFormStructure(form: IFormStruct): Promise<string>;
    abstract addFormRespose(form: IFormResponse): Promise<string>;
    abstract getFormsResponseByChild(idChild: string): Promise<IFormResponse[]>
}