import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SystemPressing } from '../../../MODELS/system-pressing';
import { Depot } from '../../../MODELS/depot';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-recu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recu.component.html',
  styleUrl: './recu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class RecuComponent {

  src$ = new BehaviorSubject<string>('initialSrc');

  updateSrc(newSrc: string) {
      this.src$.next(newSrc); // Mettre à jour la source de manière réactive
  }

  system: SystemPressing = {
    id: 0,
    nom: '',
    adresse: '',
    tel: '',
    tele: '',
    email: '',
    devise: '',
    logo: new Blob(),
    msgAttention: '',
    msgMerci: '',
    licenceExpire: new Date()
  };

  depots: Depot[] = [];



  dateDuJour: string;

  currentDate: string = '';

  constructor(private http: HttpClient,
    private route: ActivatedRoute) {

    this.dateDuJour = new Date().toLocaleDateString('fr-FR'); // Date du jour au format français
  }
  createImageUrl(logo: Blob): string {
    return URL.createObjectURL(logo);
  }
  


  ngOnInit(): void {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    this.currentDate = today.toLocaleDateString('fr-FR', options); // Formate la date en français

  }






}







