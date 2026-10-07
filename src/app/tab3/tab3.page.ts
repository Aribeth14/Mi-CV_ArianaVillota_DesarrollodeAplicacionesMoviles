import { Component } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonCard, IonCardHeader, IonCardTitle, IonCardContent,
  IonChip, IonLabel, IonIcon, IonProgressBar,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  codeSlashOutline, globeOutline, serverOutline,
  fileTrayStackedOutline, constructOutline, languageOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent,
    IonChip, IonLabel, IonIcon, IonProgressBar,
  ],
})
export class Tab3Page {
  habilidades = [
    { categoria: 'Lenguajes', icono: 'code-slash-outline', color: 'primary', items: ['Python', 'Java'] },
    { categoria: 'Frontend', icono: 'globe-outline', color: 'secondary', items: ['HTML', 'CSS', 'JavaScript', 'React'] },
    { categoria: 'Backend', icono: 'server-outline', color: 'tertiary', items: ['Spring Boot'] },
    { categoria: 'Bases de datos', icono: 'file-tray-stacked-outline', color: 'success', items: ['MySQL', 'PostgreSQL'] },
    { categoria: 'Herramientas', icono: 'construct-outline', color: 'warning', items: ['Power BI', 'KNIME'] },
  ];

  constructor() {
    addIcons({
      codeSlashOutline, globeOutline, serverOutline,
      fileTrayStackedOutline, constructOutline, languageOutline,
    });
  }
}