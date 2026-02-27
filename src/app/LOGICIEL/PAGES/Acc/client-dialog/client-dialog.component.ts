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
  clientsPerPage: number = 10;
  totalPages: number = 1;

  client: Client = {
    id: 0,
    nom: '',
    prenom: '',
    sexe: '',
    contact: '',
    a_savoir: ''
  };
  searchNom: string = '';  // ← champ de recherche séparé


  constructor(private clientService: ClientService,
    private dialogRef: MatDialogRef<ClientDialogComponent>

  ) { }


  ngOnInit(): void {
    this.getAllClients();
  }

  // Récupération et initialisation de la pagination
getAllClients(): void {
  this.clientService.getAllClients(this.currentPage - 1, this.clientsPerPage).subscribe({
    next: (data) => {
      this.pagedClients = data.content;           // ✅ les clients de la page
      this.totalClients = data.totalElements;     // ✅ total réel (26)
      this.totalPages = data.totalPages;          // ✅ pages réelles
    },
    error: (error) => { console.error(error); }
  });
}

// Plus besoin de updatePagedClients() et Client[] — l'API gère tout
nextPage(): void {
  if (this.currentPage < this.totalPages) {
    this.currentPage++;
    this.getAllClients();
  }
}

prevPage(): void {
  if (this.currentPage > 1) {
    this.currentPage--;
    this.getAllClients();
  }
}

  // On suppose que pagedClients est déjà défini
  totalClients: number = 0;    // nombre total affiché

  // Appelle cette fonction après avoir récupéré les clients
  updateTotalClients() {
    this.totalClients = this.Client.length;
  }

  onSearch(): void {
    this.currentPage = 1;
    this.getAllClients();
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


