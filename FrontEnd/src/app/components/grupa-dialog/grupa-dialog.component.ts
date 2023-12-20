import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Grupa } from 'src/app/models/grupa';
import { Smer } from 'src/app/models/smer';
import { GrupaService } from 'src/app/services/grupa.services';
import { SmerService } from 'src/app/services/smer.service';

@Component({
  selector: 'app-grupa-dialog',
  templateUrl: './grupa-dialog.component.html',
  styleUrls: ['./grupa-dialog.component.css']
})
export class GrupaDialogComponent implements OnInit {

  flag!: number;

  smerovi!: Smer[];


  constructor(public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<GrupaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Grupa,
    public grupaService: GrupaService,
    public smerService: SmerService) { }

  //oninit metoda koja se izvrsava kada napravimo instancu klase
  ngOnInit(): void {
    this.smerService.getAllSmer().subscribe(
      result => {
        this.smerovi = result;
      }
    )
  }

  public compare(a: any, b: any) {
    return a.id = b.id;
  }

  public add() {
    this.grupaService.addGrupa(this.data).subscribe
      (data => (
        this.snackBar.open('Uspešno ste dodali novu grupu: ' + data.oznaka, 'U redu', { duration: 3500 })
      )),
      (error: Error) => {
        console.log(error.name + ' ' + error.message),
          this.snackBar.open('Dogodila se greška! ', 'U redu', { duration: 3500 })
      }
  }

  public update() {
    this.grupaService.updateGrupa(this.data).subscribe
      (data => (
        this.snackBar.open('Uspešno ste ažurirali  grupu: ' + this.data.oznaka, 'U redu', { duration: 3500 })
      )),
      (error: Error) => {
        console.log(error.name + ' ' + error.message),
          this.snackBar.open('Dogodila se greška! ', 'U redu', { duration: 3500 })
      }
  }

  public delete() {
    this.grupaService.deleteGrupa(this.data.id).subscribe
      (() => (
        this.snackBar.open('Uspešno ste obrisali grupu! ', 'U redu', { duration: 3500 })
      )),
      (error: Error) => {
        console.log(error.name + ' ' + error.message),
          this.snackBar.open('Dogodila se greška! ', 'U redu', { duration: 3500 })
      }
  }

  public cancel() {
    this.dialogRef.close();
    this.snackBar.open('Odustali ste od izmena.', 'U redu', { duration: 3500 })
  }


}
