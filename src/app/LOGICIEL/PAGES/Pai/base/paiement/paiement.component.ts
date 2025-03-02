import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenupaiementComponent } from "../menupaiement/menupaiement.component";
import { HeaderComponent } from '../../../../COMPOSANTS/header/header.component';

@Component({
  selector: 'app-paiement',
  standalone: true,
  imports: [ RouterOutlet, HeaderComponent, MenupaiementComponent],
  templateUrl: './paiement.component.html',
  styleUrl: './paiement.component.css'
})
export class PaiementComponent {

}
