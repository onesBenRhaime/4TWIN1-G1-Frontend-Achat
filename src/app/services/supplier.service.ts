import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  private apiUrl = 'http://192.168.33.10:8082/supplier';

  constructor(private http: HttpClient) {
  }
  public fetchAllData(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }
  public fetchData(id: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  public addSupplier(supplier: any): Observable<any> {

    return this.http.post(`${this.apiUrl}`, supplier);
  }

}
