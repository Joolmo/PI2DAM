import { AngularFireDatabase } from '@angular/fire/database';
import { element } from 'protractor';


interface IProps {
    action: "GET" | "CREATE" | "MODIFY" | "DELETE",
    path: string,
    params?: any
}

export default class FirebaseSrc {
    readonly baseUrl = "http://localhost:8100/"

    constructor(private _db: AngularFireDatabase) {}

    async makeRequest({action, path, params}: IProps): Promise<{value: any, key: string}[] | void> {
        if((action == "CREATE" || action == "MODIFY") && params == undefined) throw "BadRequest"
        let ref = this._db.database.ref(`${this.baseUrl}${path}`)

        switch(action) {
            case "CREATE":
                ref.push(params)
                break;
            case "DELETE":
                ref.remove()
                break;
            case "GET":
                let result = [] 
                ref.once("value").then(snap => {
                    snap.forEach(element => {
                        result.push({
                            value: element.val(),
                            key: snap.key
                        })
                    })
                })
                return result
            case "MODIFY": 
                ref.update(params)
                break
        }
    }
}