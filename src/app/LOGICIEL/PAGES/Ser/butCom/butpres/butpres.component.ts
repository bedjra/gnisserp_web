import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCommonModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { DiaprestationComponent } from '../../1Dialog/diaprestation/diaprestation.component';

@Component({
  selector: 'app-butpres',
  standalone: true,
  imports: [MatCommonModule,FormsModule,CommonModule],
  templateUrl: './butpres.component.html',
  styleUrl: './butpres.component.css'
})
export class ButpresComponent {

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


  isModalOpen: boolean = false;



  constructor(public dialog: MatDialog) { }
  openDialogue() {
    this.dialog.open(DiaprestationComponent, {
      maxWidth: '37vw',
      maxHeight: '55vh',
      height: '45vh',
      width: '50vw',
      panelClass: 'blue-dialog'

      
    });
  }
}
