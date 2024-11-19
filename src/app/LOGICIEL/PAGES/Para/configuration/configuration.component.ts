import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SystemPressing } from '../../../MODELS/system-pressing';

@Component({
  selector: 'app-configuration',
  standalone: true,
  imports: [FormsModule,CommonModule  ],
  templateUrl: './configuration.component.html',
  styleUrl: './configuration.component.css'
})
export class ConfigurationComponent  {
 
 
  systemList: any[] = [];             

  system: SystemPressing = {
    id: 0,
    nom: '',
    adresse: '',
    tel: '',
    tele: '',
    email: '',
    devise: '',
    logo: new Blob(),
    msgAttention: '',
    msgMerci: '',
    licenceExpire: new Date()
  };

 

  onSearch(): void {
    if (!this.system) {
      alert('Veuillez sélectionner un depot.');
      return;
    }
  
    const url = `http://localhost:8060/api/comptable/by-filiere-and-niveau?nomFiliere=${this.system}`;
  
    console.log('Depot sélectionnée:', this.system);
  
  }
}

