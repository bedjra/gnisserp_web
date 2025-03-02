import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NouveauComponent } from '../../../Pai/nouveau/nouveau.component';

@Component({
  selector: 'app-dialogue',
  standalone: true,
  imports: [],
  templateUrl: './dialogue.component.html',
  styleUrl: './dialogue.component.css'
})
export class DialogueComponent {
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
