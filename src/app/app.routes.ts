import { Routes } from '@angular/router';
import { AccueilComponent } from './LOGICIEL/PAGES/Acc/accueil/accueil.component';
import { RetraitComponent } from './LOGICIEL/PAGES/Ret/retrait/retrait.component';
import { ParametreComponent } from './LOGICIEL/PAGES/Para/parametre/parametre.component';
import { ServiceComponent } from './LOGICIEL/PAGES/Ser/service/service.component';
import { StatistiqueComponent } from './LOGICIEL/PAGES/Sta/statistique/statistique.component';
import { PaiementComponent } from './LOGICIEL/PAGES/Pai/base/paiement/paiement.component';
import { LoginComponent } from './LOGICIEL/app-connexion/app/login/login.component';
import { DepotComponent } from './LOGICIEL/PAGES/Depo/Base/depot/depot.component';
import { ButserviComponent } from './LOGICIEL/PAGES/Ser/butCom/butservi/butservi.component';
import { ButartiComponent } from './LOGICIEL/PAGES/Ser/butCom/butarti/butarti.component';
import { ButcatComponent } from './LOGICIEL/PAGES/Ser/butCom/butcat/butcat.component';
import { ButpresComponent } from './LOGICIEL/PAGES/Ser/butCom/butpres/butpres.component';
import { ConfigurationComponent } from './LOGICIEL/PAGES/Para/configuration/configuration.component';
import { UtilisateurComponent } from './LOGICIEL/PAGES/Para/utilisateur/utilisateur.component';
import { WhatsappComponent } from './LOGICIEL/PAGES/Para/whatsapp/whatsapp.component';

export const routes: Routes = [

      { path: '', component: LoginComponent },

      { path: 'accueil', component: AccueilComponent },
      { path: 'depot', component: DepotComponent },
      { path: 'retrait', component: RetraitComponent },
      { path: 'paiement', component: PaiementComponent },
      { path: 'statistique', component: StatistiqueComponent },
      { path: 'parametre', component: ParametreComponent,
            children: [
                  { path: 'configuration', component: ConfigurationComponent },
                  { path: 'utilisateur', component: UtilisateurComponent },
                  { path: 'whatsapp', component: WhatsappComponent },

            ]
       },
      {
            path: 'service', component: ServiceComponent,
            children: [
                  { path: 'services', component: ButserviComponent },
                  { path: 'article', component: ButartiComponent },
                  { path: 'categorie', component: ButcatComponent },
                  { path: 'prestation', component: ButpresComponent },

            ]
      }


];
