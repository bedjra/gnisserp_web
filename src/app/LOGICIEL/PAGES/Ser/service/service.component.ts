import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../../COMPOSANTS/header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuserviceComponent } from '../menuservice/menuservice.component';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, HeaderComponent, MenuserviceComponent],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
  @Input() activeSection: string = '';

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


}

