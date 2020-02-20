import {Injectable} from '@angular/core';
import { IFormStruct, IFormResponse } from '../interfaces/interfaces';


@Injectable()
export default abstract class FormsService {
    abstract getFormsStructsByTeacher(idTeacher: string): Promise<IFormStruct[]>;
    abstract addFormStructure(form: IFormStruct): Promise<void>;
    abstract addFormRespose(form: IFormResponse): Promise<void>;
    abstract getFormsResponseByChild(idChild: string): Promise<IFormResponse[]>
}