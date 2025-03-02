import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCommonModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogueComponent } from '../../1Dialog/dialogue/dialogue.component';
import { PlusdialogComponent } from '../../2Dialog/plusdialog/plusdialog.component';

@Component({
  selector: 'app-butarti',
  standalone: true,
  imports: [MatCommonModule,CommonModule],
  templateUrl: './butarti.component.html',
  styleUrl: './butarti.component.css'
})
export class ButartiComponent {

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
    this.dialog.open(DialogueComponent, {
      maxWidth: '37vw',
      maxHeight: '55vh',
      height: '45vh',
      width: '50vw',
      panelClass: 'blue-dialog'

      
    });
  }
  openplusDialogue() {
    this.dialog.open(PlusdialogComponent, {
      maxWidth: '37vw',
      maxHeight: '95vh',
      height: '77vh',
      width: '50vw',
      panelClass: 'blue-dialog'

      
    });
  }
}
