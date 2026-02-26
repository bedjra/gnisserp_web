import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCommonModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogueComponent } from '../../1Dialog/dialogue/dialogue.component';
import { PlusdialogComponent } from '../../2Dialog/plusdialog/plusdialog.component';
import { Article } from '../../../../MODELS/article';
import { ArticleService } from '../../../../SERVICES/article.service';

@Component({
  selector: 'app-butarti',
  standalone: true,
  imports: [MatCommonModule, CommonModule],
  templateUrl: './butarti.component.html',
  styleUrl: './butarti.component.css'
})
export class ButartiComponent {
  articles: Article[] = [];
  selectedArticleId?: number;

  constructor(
    private articleService: ArticleService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getArticles();
  }

  // ✅ GET ALL ARTICLES
  getArticles(): void {
    this.articleService.getAll().subscribe({
      next: (data) => {
        this.articles = data;
      },
      error: (err) => {
        console.error('Erreur chargement articles', err);
      }
    });
  }

  // ✅ GET BY ID
  onSearch(): void {
    if (!this.selectedArticleId) {
      alert('Veuillez sélectionner un article.');
      return;
    }

    this.articleService.getById(this.selectedArticleId).subscribe({
      next: (data) => {
        console.log('Article trouvé', data);
      },
      error: (err) => {
        console.error('Erreur recherche article', err);
      }
    });
  }

  openDialogue() {
    this.dialog.open(DialogueComponent, {
      width: '50vw',
      height: '45vh',
      panelClass: 'blue-dialog'
    }).afterClosed().subscribe(() => {
      this.getArticles(); // refresh après ajout
    });
  }

  openplusDialogue() {
    this.dialog.open(PlusdialogComponent, {
      width: '50vw',
      height: '77vh',
      panelClass: 'blue-dialog'
    });
  }
}