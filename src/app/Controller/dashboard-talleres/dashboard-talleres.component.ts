import { TalleresService } from '../../Service/talleres.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-talleres',
  templateUrl: './dashboard-talleres.component.html',
  styleUrls: ['./dashboard-talleres.component.css']
})
export class DashboardTalleresComponent implements OnInit {

  talleres:any[] = []
  tallereList:any[] = []

  constructor(private Pro_talleres:TalleresService) { }

  ngOnInit() {
    this.Pro_talleres.getTalleresAsignar().subscribe(dd=>{
      this.talleres = dd;
    }, err=>{
    })
  }

  getTalleres(p_id_taller){
    this.tallereList = []
    this.Pro_talleres.getVoluntariosEnTaller(p_id_taller).subscribe(dd=>{
      this.tallereList = dd;
    })
  }
}
