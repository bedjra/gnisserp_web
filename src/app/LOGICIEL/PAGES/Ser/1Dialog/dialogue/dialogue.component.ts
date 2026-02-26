import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Article } from '../../../../MODELS/article';
import { ArticleService } from '../../../../SERVICES/article.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialogue',
  standalone: true,
  imports: [CommonModule, FormsModule],
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
  isEditMode: boolean = false;

  constructor(
    private articleService: ArticleService,
    private dialogRef: MatDialogRef<DialogueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Article
  ) {

    // 🔥 Mode EDIT automatique si data existe
    if (data) {
      this.article = { ...data };
      this.isEditMode = true;
    }

  }

  // ✅ AJOUT + EDIT ARTICLE
  onSubmit(): void {

    if (!this.article.libelle) {
      alert('Libelle obligatoire');
      return;
    }

    this.loading = true;

    // 🔥 MODE EDIT
    if (this.isEditMode && this.article.id) {

      this.articleService.update(this.article).subscribe({
        next: () => {
          console.log('✅ Article modifié avec succès');
          this.dialogRef.close(true);
        },
        error: err => console.error('Erreur modification', err),
        complete: () => this.loading = false
      });

    }

    // 🔥 MODE AJOUT
    else {

      this.articleService.create(this.article).subscribe({
        next: () => {
          console.log('✅ Article ajouté avec succès');
          this.dialogRef.close(true);
        },
        error: err => console.error('Erreur ajout', err),
        complete: () => this.loading = false
      });

    }

  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}