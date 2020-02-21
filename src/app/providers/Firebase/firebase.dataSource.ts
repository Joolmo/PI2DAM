import { AngularFireDatabase } from '@angular/fire/database';
import { element } from 'protractor';
import { IFirebaseResponse } from 'src/app/interfaces/interfaces';


interface IProps {
    action: "GET" | "CREATE" | "MODIFY" | "DELETE",
    path: string,
    params?: any
}

export default class FirebaseSrc {
    constructor(private _db: AngularFireDatabase) {}

    async makeRequest({action, path, params}: IProps): Promise<IFirebaseResponse[] | string> {
        if((action == "CREATE" || action == "MODIFY") && params == undefined) throw "BadRequest"

        let ref = this._db.database.ref(path)
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
                await ref.once("value", snap => {
                    snap.forEach(element => {
                        result.push({
                            value: element.val(),
                            key: element.key
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