import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Article } from '../../../../MODELS/article';
import { ArticleService } from '../../../../SERVICES/article.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialogue',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ IMPORTANT
  templateUrl: './dialogue.component.html',
  styleUrl: './dialogue.component.css'
})
export class DialogueComponent {

  article: Article = {
    id: 0,
    libelle: '',
    image: '',
    articlePrestations: []
  };

  loading: boolean = false;

  constructor(
    private articleService: ArticleService,
    private dialogRef: MatDialogRef<DialogueComponent>
  ) {}

  // ✅ AJOUT ARTICLE
  onSubmit(): void {

    if (!this.article.libelle) {
      alert('Le libellé est obligatoire');
      return;
    }

    this.loading = true;

    this.articleService.create(this.article).subscribe({
      next: (response) => {
        this.loading = false;
        console.log('✅ SUCCESS - Article ajouté :', response);
        this.dialogRef.close(true);
      },
      error: (err) => {
        this.loading = false;
        console.error('❌ Erreur ajout article', err);
      }
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}