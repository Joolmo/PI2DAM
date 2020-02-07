import { NgModule } from "@angular/core";
import UserService from 'src/app/services/user.service';
import UserProvider from './user.provider';

@NgModule({
    providers: [
        {provide: UserService, useClass: UserProvider}
    ]
})
export default class HardCodeServicesModule {}