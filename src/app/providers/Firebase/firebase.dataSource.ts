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

    async makeRequest({action, path, params}: IProps): Promise<{value: any, key: string}[] | string> {
        if((action == "CREATE" || action == "MODIFY") && params == undefined) throw "BadRequest"
        let ref = this._db.database.ref(`${this.baseUrl}${path}`)
        let result

        switch(action) {
            case "CREATE":
                result = await ref.push(params)
                return result.key
            case "DELETE":
                await ref.remove()
                return ""
            case "GET":
                result = [] 
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
                await ref.update(params)
                return ""
        }
    }
}