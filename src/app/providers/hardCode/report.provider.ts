import HardCodeDataSource from './hardCode-dataSource';
import ReportsService from 'src/app/services/reports.service';
import { IReport } from 'src/app/interfaces/IUser';
import hardCodeDataSource from './hardCode-dataSource';

export default class ReportsProvider extends ReportsService {
    async getReportsByTeacher(): Promise<any[]> {
        throw new Error("Method not implemented.");
    }

    async getReports(): Promise<IReport[]> {
        return hardCodeDataSource.reports;
    }

    async reportByChild(childId: number): Promise<IReport[]> {
        let result = HardCodeDataSource.reports.filter(e => e.childrenId == childId);
        return result;
    }

    async getReportById(id: number): Promise<IReport[]>{
        let result = HardCodeDataSource.reports.filter(e => e.id == id);
        return result;
    }

    //TO DO
    /*async reportByClassRoom(id: number): Promise<IReports[]> {
        let result = HardCodeDataSource.reports.filter(e => e.id == id);
        return result;
    }*/


}