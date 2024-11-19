import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../../COMPOSANTS/header/header.component';
import { MenudepotComponent } from '../../Depo/Base/menudepot/menudepot.component';
import { MenustatistqueComponent } from "../menustatistque/menustatistque.component";

@Component({
  selector: 'app-statistique',
  standalone: true,
  imports: [ RouterOutlet, HeaderComponent, MenustatistqueComponent],
  templateUrl: './statistique.component.html',
  styleUrl: './statistique.component.css'
})
export class StatistiqueComponent {

}
