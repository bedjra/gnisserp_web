import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-client-dialog',
  standalone: true,
  imports: [FormsModule, CommonModule,],
  templateUrl: './client-dialog.component.html',
  styleUrl: './client-dialog.component.css'
})
export class ClientDialogComponent {

  depots: any[] = []; // Liste des depots
  selectedDepot: string = '';



  onSearch(): void {
    if (!this.selectedDepot) {
      alert('Veuillez sélectionner un depot.');
      return;
    }
  
    const url = `http://localhost:8060/api/comptable/by-filiere-and-niveau?nomFiliere=${this.selectedDepot}`;
  
    console.log('Depot sélectionnée:', this.selectedDepot);
  
  }
}


