import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SupplierService } from '../services/supplier.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent {
  data: any;
  displayForm = false;
  formData = {
    code: '',
    label: ''
  };

  constructor(private supplierService: SupplierService, private dialog: MatDialog) {}

  ngOnInit() {
    this.fetchAllData();
  }

  fetchAllData() {
    this.supplierService.fetchAllData().subscribe((response) => {
      this.data = response;
    });
  }

  showForm() {
    this.displayForm = true;
  }

  submitForm() {
    // Hide the form after submission
    this.displayForm = false;
    this.addSupplier(this.formData); // Envoie le formData à la méthode addSupplier
  }

  addSupplier(supplierData: any) {
    // Vérifiez si les valeurs ne sont pas nulles avant d'envoyer la requête
    if (supplierData.code && supplierData.label) {
      this.supplierService.addSupplier(supplierData).subscribe((response) => {
        // Rafraîchit les données après l'ajout
        this.fetchAllData();
      });
    } else {
      console.log("Valeurs requises manquantes.");
    }
  }
}
