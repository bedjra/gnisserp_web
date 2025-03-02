import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-menuservice',
  standalone: true,
  imports: [MatCardModule,CommonModule,RouterLink,FormsModule],
  templateUrl: './menuservice.component.html',
  styleUrl: './menuservice.component.css'
})
export class MenuserviceComponent {
  constructor(private router: Router) {}

    isActive(route: string): boolean {
      return this.router.isActive(route, true); // "true" pour vérifier aussi les sous-routes
    }
  activeSection: string = 'articles'; // Par défaut

  setActive(section: string) {
      this.activeSection = section;
  }

 
}
