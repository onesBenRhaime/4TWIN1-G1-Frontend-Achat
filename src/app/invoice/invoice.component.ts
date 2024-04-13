import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  invoices: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getAllInvoices();
  }

  getAllInvoices(): void {
    this.http.get<any[]>('http://192.168.33.10:8050/invoice')
      .subscribe(
        (data) => {
          this.invoices = data;
        },
        (error) => {
          console.error('Error fetching invoices:', error);
        }
      );
  }
}
