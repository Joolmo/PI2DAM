import { Component, OnInit } from '@angular/core';
import { IReports } from 'src/app/interfaces/IUser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reports-screen',
  templateUrl: './reports-screen.page.html',
  styleUrls: ['./reports-screen.page.scss'],
})
export class ReportsScreenPage implements OnInit {

  //report: IReports = {"id": 1, "description": "It was a figth. He punched me. So painfully", "childrenId": 1};
  //report: IReports;
  reports: IReports[]=[];
  id: number;
  description: string; 
  childrenId: number;

  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.id = +this._activatedRoute.snapshot.paramMap.get('id'); 
    //this.report;
  }

}
