import ReportsService from 'src/app/services/reports.service';
import { IReport, IServerResponse } from '../../interfaces/IUser'
import { Injectable } from '@angular/core';
import ApiRestSrc from './apiRest-dataSource';


@Injectable()
export default class ReportsProvider extends ReportsService {
    readonly reportsPath = "report"
    
    constructor(private _source: ApiRestSrc) {
        super()
    }

    async getReportsByTeacher(idTeacher: string): Promise<IReport[]> {
        let result: IServerResponse
        
        try{
            result = await this._source.makeRequest({
                path: this.reportsPath,
                method: "GET",
                params: {
                    teacher: idTeacher
                }
            })
        }
        
        catch(error) {
            console.warn(error)
            throw error
        }

        if(result.result) return result.data.map(element => this.fromResponseToReport(element))
        else return []
    }

    async reportByChild(childId: string): Promise<IReport[]> {
        let result: IServerResponse
        
        try{
            result = await this._source.makeRequest({
                path: this.reportsPath,
                method: "GET",
                params: {
                    child: childId
                }
            })
        }
        
        catch(error) {
            console.warn(error)
            throw error
        }

        if(result.result) return result.data.map(element => this.fromResponseToReport(element))
        else return []
    }

    async addReport(report: IReport): Promise<void> {
        let result: IServerResponse
        
        try{
            result = await this._source.makeRequest({
                path: this.reportsPath,
                method: "POST",
                params: {
                    Id: report.id,
                    ChildrenId: report.childrenId,
                    Description: report.description
                }
            })
        }
        
        catch(error) {
            console.warn(error)
            throw error
        }
    }

    fromResponseToReport(response: any): IReport {
        return {
            id: response.Id,
            description: response.Description,
            childrenId: response.ChildrenId
        }
    }
}