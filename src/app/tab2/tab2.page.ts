import { Component } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonAccordionGroup, IonAccordion, IonItem, IonLabel,
  IonIcon, IonChip, IonList,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { schoolOutline, briefcaseOutline, ribbonOutline, checkmarkCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonAccordionGroup, IonAccordion, IonItem, IonLabel,
    IonIcon, IonChip, IonList,
  ],
})
export class Tab2Page {
  constructor() {
    addIcons({ schoolOutline, briefcaseOutline, ribbonOutline, checkmarkCircleOutline });
  }
}
