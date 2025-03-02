import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../../COMPOSANTS/header/header.component';
import { MenuparametreComponent } from "../menuparametre/menuparametre.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parametre',
  standalone: true,
  imports: [ RouterOutlet,CommonModule,FormsModule, HeaderComponent ,MenuparametreComponent],
  templateUrl: './parametre.component.html',
  styleUrl: './parametre.component.css'
})
export class ParametreComponent {

 
}
