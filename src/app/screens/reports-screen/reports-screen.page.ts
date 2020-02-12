import { Component, OnInit } from '@angular/core';
import { IReport } from 'src/app/interfaces/IUser';
import { ActivatedRoute } from '@angular/router';
import ReportsService from 'src/app/services/reports.service';

@Component({
  selector: 'app-reports-screen',
  templateUrl: './reports-screen.page.html',
  styleUrls: ['./reports-screen.page.scss'],
})
export class ReportsScreenPage implements OnInit {
  
  reports: IReport[]=[];
  id: string;
  description: string; 
  childrenId: number;

  constructor(private _report: ReportsService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.id = this._activatedRoute.snapshot.paramMap.get('id');

    //Comprobamos si el id se pasa por parámetro, me dará el id del reporte que seleccionemos, si no, 
    //nos dará todos los reportes 
    if(this.id) {
      console.log("HOLA2");
      this._report.reportByChild(this.id).then(result=>{
        this.reports = result;
      })
    } else {
      this._report.getReportsByTeacher(this.id).then(result =>{
        this.reports = result;
      })
    }


    //IT WORKS 
    /*this._report.reportByChild(this.id).then(result =>{
      this.reports = result;
    })*/
  }


}
