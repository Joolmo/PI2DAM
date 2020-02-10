import {Injectable} from '@angular/core';
import { IReports } from '../interfaces/IUser';

@Injectable()
export default abstract class ReportsService {
    abstract getReports(): Promise <IReports[]>;
    abstract reportByChild(childId: number): Promise<IReports[]>;
    abstract getReportById(id: number): Promise<IReports[]>;
    
}