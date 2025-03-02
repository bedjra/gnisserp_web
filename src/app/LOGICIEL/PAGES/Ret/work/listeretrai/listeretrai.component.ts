import { Component } from '@angular/core';
import { ListeComponent } from '../../../Pai/liste/liste.component';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listeretrai',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './listeretrai.component.html',
  styleUrl: './listeretrai.component.css'
})
export class ListeretraiComponent {
  depots: any[] = []; // Liste des depots
  selectedDepot: string = '';
  constructor(private dialogRef: MatDialogRef<ListeComponent>) { }
 // Création de groupes de nombres


selectedNumber: number | null = null;

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

  }}