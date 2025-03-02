import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { ListeComponent } from '../../liste/liste.component';
import { NouveauComponent } from '../../nouveau/nouveau.component';

@Component({
  selector: 'app-menupaiement',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './menupaiement.component.html',
  styleUrl: './menupaiement.component.css'
})
export class MenupaiementComponent {
  constructor(public dialog: MatDialog) { }

  openNouveauDialog() {
    this.dialog.open(NouveauComponent, {
      maxWidth: '80vw',
      maxHeight: '100vh',
      height: '95vh',
      width: '90vw',
      panelClass: 'blue-dialog'

      
    });
  }

  openListeDialog() {
    this.dialog.open(ListeComponent, {
      maxWidth: '80vw',
      maxHeight: '100vh',
      height: '95vh',
      width: '90vw',
      panelClass: 'blue-dialog'
    });
  }
  
}
