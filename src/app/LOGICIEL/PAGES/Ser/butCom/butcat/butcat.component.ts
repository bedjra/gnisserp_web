import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCommonModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { DiacategorieComponent } from '../../1Dialog/diacategorie/diacategorie.component';
import { ScondeplusComponent } from '../../2Dialog/scondeplus/scondeplus.component';

@Component({
  selector: 'app-butcat',
  standalone: true,
  imports: [MatCommonModule,CommonModule],
  templateUrl: './butcat.component.html',
  styleUrl: './butcat.component.css'
})
export class ButcatComponent {

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
    this.dialog.open(DiacategorieComponent, {
      maxWidth: '37vw',
      maxHeight: '55vh',
      height: '45vh',
      width: '50vw',
      panelClass: 'blue-dialog'

      
    });
  }
  opensecondeplus() {
    this.dialog.open(ScondeplusComponent, {
      maxWidth: '37vw',
      maxHeight: '55vh',
      height: '45vh',
      width: '50vw',
      panelClass: 'blue-dialog'

      
    });
  }
}
