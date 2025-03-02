import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-nouveaudepot',
  standalone: true,
  imports: [],
  templateUrl: './nouveaudepot.component.html',
  styleUrl: './nouveaudepot.component.css'
})
export class NouveaudepotComponent {
  constructor(private dialogRef: MatDialogRef<NouveaudepotComponent>) {}

  closeDialog() {
    this.dialogRef.close();
  }
}
