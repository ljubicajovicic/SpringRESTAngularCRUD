import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Smer } from 'src/app/models/smer';
import { SmerService } from 'src/app/services/smer.service';

@Component({
  selector: 'app-smer-dialog',
  templateUrl: './smer-dialog.component.html',
  styleUrls: ['./smer-dialog.component.css']
})
export class SmerDialogComponent implements OnInit {

  flag!: number;

  constructor(public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<SmerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Smer,
    public smerService: SmerService) { }

  ngOnInit(): void {
  }

  public add() {
    this.smerService.addSmer(this.data).subscribe
      (data => (
        this.snackBar.open('Uspešno ste dodali novi smer: ' + data.naziv, 'U redu', { duration: 3500 })
      )),
      (error: Error) => {
        console.log(error.name + ' ' + error.message),
          this.snackBar.open('Dogodila se greška! ', 'U redu', { duration: 3500 })
      }
  }

  public update() {
    this.smerService.updateSmer(this.data).subscribe
      (data => (
        this.snackBar.open('Uspešno ste ažurirali smer: ' + this.data.naziv, 'U redu', { duration: 3500 })
      )),
      (error: Error) => {
        console.log(error.name + ' ' + error.message),
          this.snackBar.open('Dogodila se greška! ', 'U redu', { duration: 3500 })
      }
  }

  public delete() {
    this.smerService.deleteSmer(this.data.id).subscribe
      (() => (
        this.snackBar.open('Uspešno ste obrisali smer! ', 'U redu', { duration: 3500 })
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
