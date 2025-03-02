import { Component } from '@angular/core';
import { MatCardContent, MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { ListedepotComponent } from '../../listedepot/listedepot.component';
import { NouveaudepotComponent } from '../../nouveaudepot/nouveaudepot.component';

@Component({
  selector: 'app-menudepot',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './menudepot.component.html',
  styleUrl: './menudepot.component.css'
})
export class MenudepotComponent {
  constructor(public dialog: MatDialog) { }

  openNouveauDialog() {
    this.dialog.open(NouveaudepotComponent, {
      maxWidth: '80vw',
      maxHeight: '100vh',
      height: '95vh',
      width: '90vw',
      panelClass: 'blue-dialog'

      
    });
  }

  

  openListeDialog() {
    this.dialog.open(ListedepotComponent, {
      maxWidth: '80vw',
      maxHeight: '90vh',
      height: '90vh',
      width: '90vw',
      panelClass: 'blue-dialog'
    });
  }
  
}

