import HardCodeDataSource from './hardCode-dataSource';
import ReportsService from 'src/app/services/reports.service';
import { IReports } from 'src/app/interfaces/IUser';

export default class ReportsProvider extends ReportsService {
    getReports(): IReports {
        throw new Error("Method not implemented.");
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