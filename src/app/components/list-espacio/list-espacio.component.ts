import { EspacioService } from './../../services/espacio.service';
import { Espacio } from './../../models/espacio';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-espacio',
  templateUrl: './list-espacio.component.html',
  styleUrls: ['./list-espacio.component.css']
})
export class ListEspacioComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'piso', 'numero', 'estado'];
  dataSource = new MatTableDataSource<Espacio>();
  
  @ViewChild(MatPaginator) paginator!:MatPaginator;

  constructor(private espacioService: EspacioService) { }

  ngOnInit(): void {
    this.getEspacio();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getEspacio(){
    this.espacioService.getEspacio().subscribe((data:Espacio[])=> {
      this.dataSource = new MatTableDataSource(data);
    })
  }

}
