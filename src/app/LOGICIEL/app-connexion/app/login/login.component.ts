import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'; // Importer les interceptors
import { JwtInterceptor } from '../service/JwtInterceptor'; // Votre intercepteur JWT
import { Router } from '@angular/router'; // Ensure this line is correct

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule], // Ajouter HttpClientModule
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true } // Configurer l'intercepteur ici
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  motDePasse: any;
ident: any;
  selectedDepot: string = '';

  constructor(private router: Router) {}

 
  onSearch() {
    // Logic for authentication goes here. 
    // For example:
    if (this.ident === 'user' && this.motDePasse === '12') {
      // If login is successful, navigate to the 'accueil' route.
      this.router.navigate(['/accueil']);
    } else {
      // Handle login failure (e.g., show an error message)
      alert('Identifiant ou mot de passe incorrect');
    }
  }
  passwordVisible = false;

togglePasswordVisibility() {
  this.passwordVisible = !this.passwordVisible;
}

}

