import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Availability } from '../models/availability';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AvailabilityService {

    constructor(
        private _http: HttpClient
    ) { }

    findAll(productId: number): Observable<Availability[]> {
        return this._http.get<Availability[]>(`/availabilities/${productId}`);
    }
}
