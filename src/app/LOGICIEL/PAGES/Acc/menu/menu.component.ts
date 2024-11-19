import { MatCardModule } from '@angular/material/card';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NouveauComponent } from '../../Pai/nouveau/nouveau.component';
import { DialogretraiComponent } from '../../Ret/work/dialogretrai/dialogretrai.component';
import { NouveaudepotComponent } from '../../Depo/nouveaudepot/nouveaudepot.component';
import { ClientDialogComponent } from '../client-dialog/client-dialog.component';
import { RapportDialogComponent } from '../rapport-dialog/rapport-dialog.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  constructor(public dialog: MatDialog) { }
  openDialogretrai() {
    this.dialog.open(DialogretraiComponent, {
      maxWidth: '80vw',
      maxHeight: '100vh',
      height: '95vh',
      width: '90vw',
      panelClass: 'blue-dialog'

      
    });
  }
  openDialogdepot() {
    this.dialog.open(NouveaudepotComponent, {
      maxWidth: '80vw',
      maxHeight: '100vh',
      height: '95vh',
      width: '90vw',
      panelClass: 'blue-dialog'      
    });
  }
  openNouveauDialog() {
    this.dialog.open(NouveauComponent, {
      maxWidth: '80vw',
      maxHeight: '100vh',
      height: '95vh',
      width: '90vw',
      panelClass: 'blue-dialog'

      
    });
  }

  openClientDialog() {
    this.dialog.open(ClientDialogComponent, {
      maxWidth: '80vw',
      maxHeight: '100vh',
      height: '95vh',
      width: '90vw',
      panelClass: 'blue-dialog'
    });
  }
  openRapportDialog() {
    this.dialog.open(RapportDialogComponent, {
      maxWidth: '80vw',
      maxHeight: '100vh',
      height: '95vh',
      width: '90vw',
      panelClass: 'blue-dialog'      
    });
  }
  
}
