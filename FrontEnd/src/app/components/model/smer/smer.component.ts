import { Component, OnInit, ViewChild } from '@angular/core';
import { SmerService } from 'src/app/services/smer.service';
import { Smer } from 'src/app/models/smer';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { SmerDialogComponent } from '../../smer-dialog/smer-dialog.component';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-smer',
  templateUrl: './smer.component.html',
  styleUrls: ['./smer.component.css']
})
export class SmerComponent implements OnInit {

  dataSource!: MatTableDataSource<Smer>;
  displayedColumns = ['id', 'naziv', 'oznaka', 'actions']
  subscription!: Subscription;

  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;

  constructor(private smerService: SmerService, private dialog: MatDialog) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.loadData();
  }

  public loadData() {
    this.subscription = this.smerService.getAllSmer()
      .subscribe(data => {
        this.dataSource = new MatTableDataSource(data)
        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator
      }),//jer metoda vraca Observable);
      (error: Error) => { console.log(error.name + " " + error.message) }
  }

  public openDialog(flag: number, id?: number, naziv?: string, oznaka?: string) {
    const dialogRef = this.dialog.open(SmerDialogComponent, { data: { id, naziv, oznaka } });
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe
      (result => {
        if (result == 1) {
          this.loadData();
        }
      })
  }

  public applyFilter(filter: any) {
    filter = filter.target.value;
    filter = filter.trim()
    filter = filter.toLocaleLowerCase();
    this.dataSource.filter = filter;
  }



}
