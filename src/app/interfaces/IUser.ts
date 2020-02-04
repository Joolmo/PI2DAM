export interface IUsers {
    "id" : number,
    "user" : string,
    "password" : string,
    "isTeacher" : boolean,
} 
export interface ITeacher {
    "id" : number,
    "surname" : string,
    "name" : string,
}
export interface IClassroom {
    "id" : number,
    "name" : string,
}
export interface IChildren {
    "id" : number,
    "name" : string,
    "surname" : string,
}
export interface IReports {
    "id" : number,
    "description" : string,
    "childrenId" : number, 
}