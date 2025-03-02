import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../../COMPOSANTS/header/header.component';
import { MenuretraiteComponent } from '../menuretraite/menuretraite.component';

@Component({
  selector: 'app-retrait',
  standalone: true,
  imports: [MatCardModule, HeaderComponent,MenuretraiteComponent,RouterOutlet],
  templateUrl: './retrait.component.html',
  styleUrl: './retrait.component.css'
})
export class RetraitComponent {

}
