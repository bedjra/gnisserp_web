import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../../SERVICES/client.service';
import { Client } from '../../../MODELS/client';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-client-dialog',
  standalone: true,
  imports: [FormsModule, CommonModule,

  ],
  templateUrl: './client-dialog.component.html',
  styleUrl: './client-dialog.component.css'
})
export class ClientDialogComponent implements OnInit {


  closeDialog() {
    this.dialogRef.close();
  } Client: Client[] = [];      // Tous les clients
  pagedClients: Client[] = []; // Clients affichés sur la page
  currentPage: number = 1;     // Page actuelle
  clientsPerPage: number = 10; // Nombre de clients par page
  totalPages: number = 1;

  client: Client = {
    id: 0,
    nom: '',
    prenom: '',
    sexe: '',
    contact: '',
    a_savoir: ''
  };


  constructor(private clientService: ClientService,
    private dialogRef: MatDialogRef<ClientDialogComponent>

  ) { }


  ngOnInit(): void {
    this.getAllClients();
  }

  // Récupération et initialisation de la pagination
getAllClients(): void {
  console.log("Appel API lancé"); // debug
  this.clientService.getAllClients().subscribe({
    next: (data) => {
      console.log('Données reçues :', data);
      console.log('Type de Client:', Array.isArray(this.Client)); // doit afficher true // ⚡ vérifie bien que c'est un tableau
      this.Client = data; 
      this.totalPages = Math.ceil(this.Client.length / this.clientsPerPage);
      this.updatePagedClients();
    },
    error: (error) => {
      console.error('Erreur lors de la récupération des clients :', error);
    }
  });
}

  // Mettre à jour les clients affichés selon la page
  updatePagedClients(): void {
    const start = (this.currentPage - 1) * this.clientsPerPage;
    const end = start + this.clientsPerPage;
    this.pagedClients = this.Client.slice(start, end);
  }

  // Page suivante
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagedClients();
    }
  }

  // Page précédente
  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagedClients();
    }
  }
  // Enregistrer un nouveau client

  onSave(): void {
    this.clientService.save(this.client).subscribe(
      (response) => {
        alert('Client enregistré avec succès !');
        this.getAllClients();   // 🔥 important
        this.resetForm();
      },
      (error) => {
        alert('Erreur lors de l\'enregistrement.');
      }
    );
  }
  // Modifier un client existant
  onUpdate(): void {
    if (!this.client.id) {
      alert('Veuillez sélectionner un client à modifier.');
      return;
    }

    this.clientService.update(this.client).subscribe(
      (response) => {
        console.log('Client modifié avec succès :', response);
        alert('Client modifié avec succès !');

        this.getAllClients();   // ✅ ici
        this.resetForm();       // optionnel mais recommandé
      },
      (error) => {
        console.error('Erreur lors de la modification du client :', error);
        alert('Erreur lors de la modification.');
      }
    );
  }

  // Supprimer un client existant
  onDelete(): void {
    if (!this.client.id) {
      alert('Veuillez sélectionner un client à supprimer.');
      return;
    }

    this.clientService.delete(this.client.id).subscribe(
      (response) => {
        console.log("Status:", response.status);
        alert('Client supprimé avec succès !');
        this.getAllClients();
        this.resetForm();
      },
      (error) => {
        console.log("Erreur réelle:", error);
        alert('Erreur lors de la suppression.');
      }
    );
  }

  // Réinitialiser le formulaire
  private resetForm(): void {
    this.client = {
      id: 0,
      nom: '',
      prenom: '',
      sexe: '',
      contact: '',
      a_savoir: ''
    };
  }

  visibleClients = 7; // Limite initiale

  loadMore() {
    this.visibleClients += 7; // Augmente de 7 à chaque clic
  }

  selectClient(client: Client): void {
    this.client = { ...client };
  }

}


