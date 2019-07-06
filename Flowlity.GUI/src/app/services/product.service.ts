import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    constructor(
        private _http: HttpClient
    ) { }

    findAll(): Observable<Product[]> {
        return this._http.get<Product[]>('/products');
    }
}
