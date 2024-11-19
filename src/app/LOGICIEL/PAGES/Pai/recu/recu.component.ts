import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recu.component.html',
  styleUrl: './recu.component.css'
})
export class RecuComponent {

  paiements: any[] = [];
  echeances: any[] = [];
  dateDuJour: string;
  selectedFiliere: string | undefined;
  selectedNiveau: string | undefined;
  currentYear: number = 0;
  currentDate: string = '';

  constructor(private http: HttpClient, 
    private route: ActivatedRoute) {
    
    this.dateDuJour = new Date().toLocaleDateString('fr-FR'); // Date du jour au format français
  }



  ngOnInit(): void {
    const today = new Date();
    this.currentYear = new Date().getFullYear();
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    this.currentDate = today.toLocaleDateString('fr-FR', options); // Formate la date en français
 
   // Récupérer les paramètres de l'URL
   this.route.queryParams.subscribe(params => {
    this.selectedFiliere = params['filiere'];
    this.selectedNiveau = params['niveau'];    

    // Vous pouvez maintenant utiliser selectedFiliere et selectedNiveau dans ce composant
    console.log("Filière :", this.selectedFiliere);
    console.log("Niveau :", this.selectedNiveau);


     // Charger les paiements si filière et niveau sont présents
     this.paiement();
    });
}


paiement(): void {

  

}



}







