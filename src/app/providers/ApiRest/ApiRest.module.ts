import { NgModule } from "@angular/core";
import UserService from 'src/app/services/user.service';
import UserProvider from './user.provider';
import ApiRestSrc from './apiRest-dataSource';

@NgModule({
    providers: [
        ApiRestSrc,
        {provide: UserService, useClass: UserProvider}
    ]
})
export default class ApiRestServicesModule {}