import {Injectable} from '@angular/core';
import { IReport } from '../interfaces/IUser';


@Injectable()
export default abstract class FormsService {
    abstract getFormsStructsByTeacher(idTeacher: string): Promise<IReport[]>;
    abstract addFormStructure(childId: string): Promise<IReport[]>;
    abstract addFormRespose(id: string): Promise<IReport[]>;
    abstract getFormsResponseByChild(report: IReport): Promise<void>
}