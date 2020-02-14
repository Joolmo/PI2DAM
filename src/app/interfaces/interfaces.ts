export interface IUser {
    id: string,
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
    id: string,
    name: string,
}

export interface IReport {
    id: string,
    description: string,
    childrenId: number, 
}

export interface IServerResponse{
    result: boolean,
    data: any
}