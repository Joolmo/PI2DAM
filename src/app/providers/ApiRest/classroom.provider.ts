import { Injectable } from "@angular/core";
import ClassroomService from 'src/app/services/classroom.service';
import {IClassroom, IServerResponse} from '../../interfaces/IUser'
import ApiRestSrc from './apiRest-dataSource';


@Injectable()
export default class ClassroomsProvider extends ClassroomService {
    readonly classroomsPath = "classrooms"

    constructor(private _source: ApiRestSrc) {
        super()
    }

    async getClassroomsByTeacher(idTeacher: string): Promise<IClassroom[]> {
        let result: IServerResponse
        try {
            result = await this._source.makeRequest({
                path: this.classroomsPath,
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

        if(result.result) return result.data.map(element => this.fromResponseToClass(element))
        else return []
    }
    
    async addClassroom(classroom: IClassroom): Promise<void> {
        let result: IServerResponse

        try {
            result = await this._source.makeRequest({
                path: this.classroomsPath,
                method: "POST",
                params: classroom
            })
        }
        catch(error) {
            console.warn(error)
            throw error
        }
    }

    async getClassrooms(): Promise<IClassroom[]> {
        let result: IServerResponse
        try {
            result = await this._source.makeRequest({
                path: this.classroomsPath,
                method: "GET"
            })
        }
        catch(error) {
            console.warn(error)
            throw error
        }

        if(result.result) return result.data.map(element => this.fromResponseToClass(element))
        else return []
    }

    async addClassroomToTeacher(idClass: string, idTeacher: string): Promise<void> {
        let result: IServerResponse

        try {
            result = await this._source.makeRequest({
                path: this.classroomsPath,
                method: "POST",
                params: {
                    IdClass: idClass,
                    IdTeacher: idTeacher
                }
            })
        }
        catch(error) {
            console.warn(error)
            throw error
        }
    }

    fromResponseToClass(response: any): IClassroom {
        return {
            id: response.Id,
            name: response.Name
        }
    }
}