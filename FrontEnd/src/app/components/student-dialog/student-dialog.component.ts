import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Projekat } from 'src/app/models/projekat';
import { Student } from 'src/app/models/student';
import { ProjekatService } from 'src/app/services/projekat.services';
import { StudentService } from 'src/app/services/student.services';

@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styleUrls: ['./student-dialog.component.css']
})
export class StudentDialogComponent implements OnInit {
  flag!: number;

  projekti!: Projekat[];


  constructor(public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<StudentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Student,
    public studentService: StudentService,
    public projekatService: ProjekatService) { }

  //oninit metoda koja se izvrsava kada napravimo instancu klase
  ngOnInit(): void {
    this.projekatService.getAllProjekat().subscribe(
      result => {
        this.projekti = result;
      }
    )
  }

  public compare(a: any, b: any) {
    return a.id == b.id;
  }

  public add() {
    this.studentService.addStudent(this.data).subscribe
      (data => (
        this.snackBar.open('Uspešno ste dodali novog studenta: ' + data.ime, 'U redu', { duration: 3500 })
      )),
      (error: Error) => {
        console.log(error.name + ' ' + error.message),
          this.snackBar.open('Dogodila se greška! ', 'U redu', { duration: 3500 })
      }
  }

  public update() {
    this.studentService.updateStudent(this.data).subscribe
      (data => (
        this.snackBar.open('Uspešno ste ažurirali studenta: ' + this.data.ime, 'U redu', { duration: 3500 })
      )),
      (error: Error) => {
        console.log(error.name + ' ' + error.message),
          this.snackBar.open('Dogodila se greška! ', 'U redu', { duration: 3500 })
      }
  }

  public delete() {
    this.studentService.deleteStudent(this.data.id).subscribe
      (() => (
        this.snackBar.open('Uspešno ste obrisali studenta! ', 'U redu', { duration: 3500 })
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
