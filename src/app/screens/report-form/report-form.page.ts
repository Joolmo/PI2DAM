import { Component, OnInit } from '@angular/core';
import UserService from 'src/app/services/user.service';
import ReportsService from 'src/app/services/reports.service';
import { IReport } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.page.html',
  styleUrls: ['./report-form.page.scss'],
})
export class ReportFormPage implements OnInit {

  constructor(private _user: UserService, private _report: ReportsService) { }
  report: IReport= {
    childrenId: +this._user.getCurrentUser().id,
    description: "",
    id: ""
  }

  ngOnInit() {
  }

  save() {
    this._report.addReport(this.report)
  }
}
