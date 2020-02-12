export interface IUser {
    id: number,
    userName: string,
    password: string,
    isTeacher: boolean,
}

export interface ITeacher extends IUser {
    surname: string,
    name: string,
}

export interface IChild extends IUser {
    name: string,
    surname: string,
}

export interface IClassroom {
    id: number,
    name: string,
}

export interface IReport {
    id: number,
    description: string,
    childrenId: number, 
}

export interface IServerResponse{
    result: boolean,
    data: any
}