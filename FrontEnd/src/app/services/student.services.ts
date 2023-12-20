import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { STUDENT_URI, STUDENTI_URI } from '../constants';
import { Student } from '../models/student';

@Injectable({
    providedIn: 'root'
})
export class StudentService {

    constructor(private httpClient: HttpClient) { }

    public getAllStudent(): Observable<any> { //string podataka 
        return this.httpClient.get(`${STUDENTI_URI}`)
    }

    public getStudentByGrupa(idGrupe: number): Observable<any> { //string podataka 
        return this.httpClient.get(`${STUDENT_URI}/${idGrupe}`)
    }

    public addStudent(student: Student): Observable<any> {
        student.id = 100000;
        return this.httpClient.post(`${STUDENTI_URI}`, student)
    }

    public updateStudent(student: Student): Observable<any> {
        return this.httpClient.put(`${STUDENTI_URI}`, student)
    }

    public deleteStudent(id: number): Observable<any> {
        return this.httpClient.delete(`${STUDENTI_URI}/${id}`)
    }
}