import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ListeparaComponent } from '../listepara/listepara.component';
import { MatDialog } from '@angular/material/dialog';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserdialogComponent } from '../userdialog/userdialog.component';

@Component({
  selector: 'app-menuparametre',
  standalone: true,
  imports: [MatCardModule,CommonModule,RouterLink,FormsModule],
  templateUrl: './menuparametre.component.html',
  styleUrl: './menuparametre.component.css'
})
export class MenuparametreComponent {
  constructor(public dialog: MatDialog,
    private router: Router
  ) { }

  isActive(route: string): boolean {
    return this.router.isActive(route, true); // "true" pour vérifier aussi les sous-routes
  }
activeSection: string = 'articles'; // Par défaut

setActive(section: string) {
    this.activeSection = section;
}
openUserDialog() {
  this.dialog.open(UserdialogComponent, {
    maxWidth: '80vw',
    maxHeight: '100vh',
    height: '95vh',
    width: '90vw',    
    panelClass: 'blue-dialog'
  });
}

  openListeDialog() {
    this.dialog.open(ListeparaComponent, {
      maxWidth: '65vw',
      maxHeight: '95vh',
      height: '90vh',
      width: '90vw',
      
      panelClass: 'blue-dialog'
    });
  }
  
}
