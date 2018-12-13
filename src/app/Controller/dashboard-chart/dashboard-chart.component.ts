import { TalleresService } from '../../Service/talleres.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-chart',
  templateUrl: './dashboard-chart.component.html',
  styleUrls: ['./dashboard-chart.component.css']
})
export class DashboardChartComponent implements OnInit {

  data_iniciados:any[] = [];
  data_finalizados:any[] = [];

  constructor(private Pro_talleres:TalleresService) {

    this.Pro_talleres.getTalleresFinalizados().subscribe(dd=>{
       this.data_iniciados = dd.map(rr=> rr.iniciados);
       this.data_finalizados = dd.map(rr=> rr.finalizados);
       this.barChartLabels = dd.map(rr=> rr.mes);

       this.barChartData = [
           {data: this.data_iniciados, label: 'Creados'},
           {data: this.data_finalizados, label: 'Finalizados'}
       ];

    })

   this.Pro_talleres.getVoluntariosActivos().subscribe(dd=>{
     this.doughnutChartData.push(dd[0].activos)
     this.doughnutChartData.push(dd[0].inactivos)
   })
  }

  barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  barChartLabels:string[] = [];
  barChartType:string = 'bar';
  barChartLegend:boolean = true;

  barChartData:any[] = [
    {data: [], label: 'Creados'},
    {data: [], label: 'Finalizados'}
  ];

  doughnutChartLabels:string[] = ['Activos', 'Inhactivos'];
  doughnutChartData:number[] = [];
  doughnutChartType:string = 'doughnut';

  ngOnInit() {
  }

}
