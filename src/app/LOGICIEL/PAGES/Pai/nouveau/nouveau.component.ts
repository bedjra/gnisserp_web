import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-nouveau',
  standalone: true,
  imports: [CommonModule,FormsModule ],
  templateUrl: './nouveau.component.html',
  styleUrl: './nouveau.component.css'
})
export class NouveauComponent {
  depots: any[] = []; // Liste des depots
  selectedDepot: string = '';

  constructor(private dialogRef: MatDialogRef<NouveauComponent>) {}

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
