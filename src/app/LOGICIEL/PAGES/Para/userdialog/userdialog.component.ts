import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-userdialog',
  standalone: true,
  imports: [FormsModule, CommonModule,],
  templateUrl: './userdialog.component.html',
  styleUrl: './userdialog.component.css'
})
export class UserdialogComponent {
  constructor(private dialogRef: MatDialogRef<UserdialogComponent>) {}


  depots: any[] = []; // Liste des depots
  selectedDepot: string = '';

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


