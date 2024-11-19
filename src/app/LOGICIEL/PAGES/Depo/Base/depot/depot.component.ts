import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenudepotComponent } from '../menudepot/menudepot.component';
import { HeaderComponent } from '../../../../COMPOSANTS/header/header.component';

@Component({
  selector: 'app-depot',
  standalone: true,
  imports: [MenudepotComponent,RouterOutlet,HeaderComponent],
  templateUrl: './depot.component.html',
  styleUrl: './depot.component.css'
})
export class DepotComponent {

}
