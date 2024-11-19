import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { NewstatComponent } from '../newstat/newstat.component';
import { ListestaComponent } from '../listesta/listesta.component';
import { ClientDialogComponent } from '../../Acc/client-dialog/client-dialog.component';
import { NouveaudepotComponent } from '../../Depo/nouveaudepot/nouveaudepot.component';
import { NouveauComponent } from '../../Pai/nouveau/nouveau.component';
import { DialogretraiComponent } from '../../Ret/work/dialogretrai/dialogretrai.component';
import { ListeretraiComponent } from '../../Ret/work/listeretrai/listeretrai.component';
import { ListedepotComponent } from '../../Depo/listedepot/listedepot.component';
import { ListeComponent } from '../../Pai/liste/liste.component';

@Component({
  selector: 'app-menustatistque',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './menustatistque.component.html',
  styleUrl: './menustatistque.component.css'
})
export class MenustatistqueComponent {
  constructor(public dialog: MatDialog) { }

  openDialogretrai() {
    this.dialog.open(ListeretraiComponent, {
      maxWidth: '80vw',
      maxHeight: '100vh',
      height: '95vh',
      width: '90vw',
      panelClass: 'blue-dialog'

      
    });
  }
  openDialogdepot() {
    this.dialog.open(ListedepotComponent, {
      maxWidth: '80vw',
      maxHeight: '100vh',
      height: '95vh',
      width: '90vw',
      panelClass: 'blue-dialog'      
    });
  }
  openNouveauDialog() {
    this.dialog.open(ListeComponent, {
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
}
