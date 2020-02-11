import { NgModule } from "@angular/core";
import UserService from 'src/app/services/user.service';
import UserProvider from './user.provider';
import ApiRestSrc from './apiRest-dataSource';
import ReportsService from 'src/app/services/reports.service';
import ReportsProvider from '../hardCode/report.provider';

@NgModule({
    providers: [
        ApiRestSrc,
        {provide: UserService, useClass: UserProvider},
        {provide: ReportsService, useClass: ReportsProvider}

    ]
})
export default class ApiRestServicesModule {}