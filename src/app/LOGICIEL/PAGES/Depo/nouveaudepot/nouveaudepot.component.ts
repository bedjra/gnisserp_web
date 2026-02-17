import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

interface Article {
  nom: string;
  categorie: string;
}

interface DepotItem {
  article: string;
  quantite: number;
  plus: number;
  prix: number;
  typeTraitement: string;
  detail: string;
}

interface ClientInfo {
  nom: string;
  contact: string;
  aSavoir: string;
}

@Component({
  selector: 'app-nouveaudepot',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nouveaudepot.component.html',
  styleUrl: './nouveaudepot.component.css'
})

export class NouveaudepotComponent implements OnInit {

  clientInfo: ClientInfo = { nom: '', contact: '', aSavoir: '' };

  selectedCategory = 'TOUS';
  selectedArticle = '';

  articlesDisponibles: Article[] = [
    { nom: 'Chemise', categorie: 'HOMME' },
    { nom: 'Pantalon', categorie: 'TOUS' },
    { nom: 'Veste', categorie: 'TOUS' },
    { nom: 'Costa', categorie: 'HOMME' },
    { nom: 'Good Luck Simple', categorie: 'TOUS' },
    { nom: 'Robe', categorie: 'FEMME' }
  ];

  currentItem: DepotItem = this.initItem();
  depotItems: DepotItem[] = [];

  dateDepot = '';
  dateRetrait = '';
  service = 'NORMAL';

  accompte = 0;
  remise = 0;

  constructor(private dialogRef: MatDialogRef<NouveaudepotComponent>) {}

  ngOnInit(): void {
    const today = new Date();
    this.dateDepot = this.formatDate(today);

    const retrait = new Date();
    retrait.setDate(today.getDate() + 3);
    this.dateRetrait = this.formatDate(retrait);
  }

  initItem(): DepotItem {
    return { article: '', quantite: 1, plus: 0, prix: 0, typeTraitement: '', detail: '' };
  }

  formatDate(date: Date): string {
    return date.toISOString().substring(0, 10);
  }

  selectClient(): void {
    this.clientInfo = {
      nom: 'ABALO Kossi',
      contact: '+228 90 02 39 52',
      aSavoir: 'Doit 1000 FCFA'
    };
  }

  selectCategory(cat: string): void {
    this.selectedCategory = cat;
  }

  get articlesAffiches(): Article[] {
    return this.selectedCategory === 'TOUS'
      ? this.articlesDisponibles
      : this.articlesDisponibles.filter(a => a.categorie === this.selectedCategory || a.categorie === 'TOUS');
  }

  selectArticle(article: Article): void {
    this.selectedArticle = article.nom;
    this.currentItem.article = article.nom;
    this.setPrix(article.nom);
  }

  setPrix(nom: string): void {
    const map: any = {
      Chemise: 1500,
      Pantalon: 2000,
      Veste: 2500,
      Costa: 3000,
      Robe: 2500
    };
    this.currentItem.prix = map[nom] || 1500;
  }

  incrementQuantite() {
    this.currentItem.quantite++;
  }

  decrementQuantite() {
    if (this.currentItem.quantite > 1) this.currentItem.quantite--;
  }

  addItem(): void {
    if (!this.currentItem.article || !this.currentItem.typeTraitement) {
      alert('Article et traitement obligatoires');
      return;
    }

    this.depotItems.push({ ...this.currentItem });
    this.currentItem = this.initItem();
    this.selectedArticle = '';
  }

  deleteItem(i: number) {
    this.depotItems.splice(i, 1);
  }

  calculateTotal(): number {
    return this.depotItems.reduce((t, i) =>
      t + (i.prix + i.plus) * i.quantite, 0);
  }

  calculateReste(): number {
    return this.calculateTotal() - this.accompte - this.remise;
  }

  submitDepot() {
    const depot = {
      client: this.clientInfo,
      items: this.depotItems,
      total: this.calculateTotal(),
      reste: this.calculateReste(),
      dateDepot: this.dateDepot,
      dateRetrait: this.dateRetrait,
      service: this.service
    };

    console.log('DEPOT = ', depot);
    this.dialogRef.close(depot);
  }

  refresh() {
    location.reload();
  }

  closeDialog() {
    if (this.depotItems.length && !confirm('Quitter sans sauvegarder ?')) return;
    this.dialogRef.close();
  }
}
