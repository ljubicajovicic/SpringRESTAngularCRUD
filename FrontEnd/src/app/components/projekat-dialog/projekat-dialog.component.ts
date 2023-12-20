import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Projekat } from 'src/app/models/projekat';
import { ProjekatService } from 'src/app/services/projekat.services';

@Component({
  selector: 'app-projekat-dialog',
  templateUrl: './projekat-dialog.component.html',
  styleUrls: ['./projekat-dialog.component.css']
})
export class ProjekatDialogComponent implements OnInit {

  flag!: number;
  constructor(public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<ProjekatDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Projekat,
    public projekatService: ProjekatService) { }

  ngOnInit(): void {
  }

  public add() {
    this.projekatService.addProjekat(this.data).subscribe
      (data => (
        this.snackBar.open('Uspešno ste dodali novi projekat: ' + data.naziv, 'U redu', { duration: 3500 })
      )),
      (error: Error) => {
        console.log(error.name + ' ' + error.message),
          this.snackBar.open('Dogodila se greška! ', 'U redu', { duration: 3500 })
      }
  }

  public update() {
    this.projekatService.updateProjekat(this.data).subscribe
      (data => (
        this.snackBar.open('Uspešno ste ažurirali projekat: ' + this.data.naziv, 'U redu', { duration: 3500 })
      )),
      (error: Error) => {
        console.log(error.name + ' ' + error.message),
          this.snackBar.open('Dogodila se greška! ', 'U redu', { duration: 3500 })
      }
  }

  public delete() {
    this.projekatService.deleteProjekat(this.data.id).subscribe
      (() => (
        this.snackBar.open('Uspešno ste obrisali projekat! ', 'U redu', { duration: 3500 })
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
