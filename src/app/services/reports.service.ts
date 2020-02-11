import {Injectable} from '@angular/core';
import { IReport } from '../interfaces/IUser';

@Injectable()
export default abstract class ReportsService {
    abstract getReportsByTeacher(): Promise <IReport[]>;
    abstract reportByChild(childId: number): Promise<IReport[]>;
    abstract getReportById(id: number): Promise<IReport[]>;
    
}