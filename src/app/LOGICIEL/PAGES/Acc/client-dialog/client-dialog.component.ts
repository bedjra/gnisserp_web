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
  }
  Client: any[] = [];
  currentPage: number = 1; // Page actuelle

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

  ) {}
  ngOnInit(): void {
    this.getAllClients();
    }


    getAllClients(): void {
      this.clientService.getAllClients().subscribe({
        next: (data) => {
          this.Client = data; // Remplir le tableau avec les données reçues
        },
        error: (error) => {
          console.error('Erreur lors de la récupération des clients :', error);
        }
      });
    }

  // Enregistrer un nouveau client
  onSave(): void {
    this.clientService.save(this.client).subscribe(
      (response) => {
        console.log('Client enregistré avec succès :', response);
        alert('Client enregistré avec succès !');
        this.resetForm();
      },
      (error) => {
        console.error('Erreur lors de l\'enregistrement du client :', error);
        alert('Erreur lors de l\'enregistrement.');
      }
    );
  }

  // Modifier un client existant
  onUpdate(): void {
    if (this.client.id === 0) {
      alert('Veuillez sélectionner un client à modifier.');
      return;
    }

    this.clientService.update(this.client).subscribe(
      (response) => {
        console.log('Client modifié avec succès :', response);
        alert('Client modifié avec succès !');
      },
      (error) => {
        console.error('Erreur lors de la modification du client :', error);
        alert('Erreur lors de la modification.');
      }
    );
  }

  // Supprimer un client existant
  onDelete(): void {
    if (this.client.id === 0) {
      alert('Veuillez sélectionner un client à supprimer.');
      return;
    }

    this.clientService.delete(this.client.id).subscribe(
      () => {
        console.log('Client supprimé avec succès');
        alert('Client supprimé avec succès !');
        this.resetForm();
      },
      (error) => {
        console.error('Erreur lors de la suppression du client :', error);
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


}


