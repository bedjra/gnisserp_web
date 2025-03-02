import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../../COMPOSANTS/header/header.component';
import { MenuparametreComponent } from '../menuparametre/menuparametre.component';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-listepara',
  standalone: true,
  imports: [ CommonModule,FormsModule, CommonModule ],
  templateUrl: './listepara.component.html',
  styleUrl: './listepara.component.css'
})
export class ListeparaComponent {

  depots: any[] = []; // Liste des depots
  selectedDepot: string = '';
  constructor(private dialogRef: MatDialogRef<ListeparaComponent>) {}

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
