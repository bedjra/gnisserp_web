import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dialogretrai',
  standalone: true,
  imports: [CommonModule,FormsModule ],
  templateUrl: './dialogretrai.component.html',
  styleUrl: './dialogretrai.component.css'
})
export class DialogretraiComponent {

  depots: any[] = []; // Liste des depots
  selectedDepot: string = '';

  constructor(private dialogRef: MatDialogRef<DialogretraiComponent>) {}

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
