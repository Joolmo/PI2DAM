import { Component, OnInit } from '@angular/core';
import { IReports } from 'src/app/interfaces/IUser';
import { ActivatedRoute } from '@angular/router';
import ReportsService from 'src/app/services/reports.service';

@Component({
  selector: 'app-reports-screen',
  templateUrl: './reports-screen.page.html',
  styleUrls: ['./reports-screen.page.scss'],
})
export class ReportsScreenPage implements OnInit {
  reports: IReports[]=[];
  id: number;
  description: string; 
  childrenId: number;

  

  constructor(private _report: ReportsService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.id = +this._activatedRoute.snapshot.paramMap.get('id'); 

    this._report.getReportById(this.id).then(result=>{
      this.reports = result;
    })

    //IT WORKS 
    /*this._report.reportByChild(this.id).then(result =>{
      this.reports = result;
    })*/
  }

}
