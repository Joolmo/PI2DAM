import HardCodeDataSource from './hardCode-dataSource';
import ReportsService from 'src/app/services/reports.service';
import { IReports } from 'src/app/interfaces/IUser';
import hardCodeDataSource from './hardCode-dataSource';

export default class ReportsProvider extends ReportsService {
    async getReports(): Promise<IReports[]> {
        return hardCodeDataSource.reports;
    }

    async reportByChild(childId: number): Promise<IReports[]> {
        let result = HardCodeDataSource.reports.filter(e => e.childrenId == childId);
        return result;
    }

    async getReportById(id: number): Promise<IReports[]>{
        let result = HardCodeDataSource.reports.filter(e => e.id == id);
        return result;
    }

    //TO DO
    /*async reportByClassRoom(id: number): Promise<IReports[]> {
        let result = HardCodeDataSource.reports.filter(e => e.id == id);
        return result;
    }*/


}