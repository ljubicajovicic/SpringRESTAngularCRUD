import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Grupa } from 'src/app/models/grupa';
import { Smer } from 'src/app/models/smer';
import { Student } from 'src/app/models/student';
import { GrupaService } from 'src/app/services/grupa.services';
import { GrupaDialogComponent } from '../../grupa-dialog/grupa-dialog.component';


@Component({
  selector: 'app-grupa',
  templateUrl: './grupa.component.html',
  styleUrls: ['./grupa.component.css']
})
export class GrupaComponent implements OnInit {


  dataSource!: MatTableDataSource<Grupa>;
  displayedColumns = ['id', 'oznaka', 'smer', 'actions']
  subscription!: Subscription;
  selectedGrupaTop!: Grupa;

  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;

  constructor(private grupaService: GrupaService, private dialog: MatDialog) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.loadData();
  }

  public loadData() {
    this.subscription = this.grupaService.getAllGrupa()
      .subscribe(data => {
        this.dataSource = new MatTableDataSource(data)
        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator
      }),
      (error: Error) => { console.log(error.name + " " + error.message) }
  }

  public openDialog(flag: number, id?: number, oznaka?: string, smer?: Smer) {
    const dialogRef = this.dialog.open(GrupaDialogComponent, { data: { id, oznaka, smer } });
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe
      (result => {
        if (result == 1) {
          this.loadData();
        }
      })
  }

  public selectRow(row: Grupa) {
    console.log(row);
    this.selectedGrupaTop = row;
  }


  public applyFilter(filter: any) {
    filter = filter.target.value;
    filter = filter.trim()
    filter = filter.toLocaleLowerCase();
    this.dataSource.filter = filter;
  }

}
