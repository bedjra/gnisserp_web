import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-plusdialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plusdialog.component.html',
  styleUrl: './plusdialog.component.css'
})
export class PlusdialogComponent {
  depots: any[] = []; // Liste des depots
  selectedDepot: string = '';
  constructor(private dialogRef: MatDialogRef<PlusdialogComponent>) {}

  closeDialog() {
    this.dialogRef.close();
  }

  onSearch(): void {
    if (!this.selectedDepot) {
      alert('Veuillez sélectionner un depot.');
      return;
    }
  
    const url = `http://localhost:8060/api/comptable/by-filiere-and-niveau?nomFiliere=${this.selectedDepot}`;
  
    console.log('Depot sélectionnée:', this.selectedDepot);
  
  }
}
