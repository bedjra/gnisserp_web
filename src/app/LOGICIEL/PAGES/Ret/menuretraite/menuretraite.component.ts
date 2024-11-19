import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { DialogretraiComponent } from '../work/dialogretrai/dialogretrai.component';
import { ListeretraiComponent } from '../work/listeretrai/listeretrai.component';

@Component({
  selector: 'app-menuretraite',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './menuretraite.component.html',
  styleUrl: './menuretraite.component.css'
})
export class MenuretraiteComponent {
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

  

  openListeDialog() {
    this.dialog.open(ListeretraiComponent, {
      maxWidth: '80vw',
      maxHeight: '100vh',
      height: '95vh',
      width: '90vw',
      panelClass: 'blue-dialog'
    });
  }
  
}
