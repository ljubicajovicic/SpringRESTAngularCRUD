import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GRUPA_URI, PROJEKAT_URI } from '../constants';
import { Grupa } from '../models/grupa';

@Injectable({
    providedIn: 'root'
})

export class GrupaService {

    constructor(private httpClient: HttpClient) { }

    public getAllGrupa(): Observable<any> { //string podataka 
        return this.httpClient.get(`${GRUPA_URI}`)
    }

    public addGrupa(grupa: Grupa): Observable<any> {
        grupa.id = 100000;
        return this.httpClient.post(`${GRUPA_URI}`, grupa)
    }

    public updateGrupa(grupa: Grupa): Observable<any> {
        return this.httpClient.put(`${GRUPA_URI}`, grupa)
    }

    public deleteGrupa(id: number): Observable<any> {
        return this.httpClient.delete(`${GRUPA_URI}/${id}`)
    }
}