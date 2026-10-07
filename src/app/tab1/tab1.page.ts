import { Component } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonAvatar,
  IonCard, IonCardHeader, IonCardTitle, IonCardContent,
  IonList, IonItem, IonIcon, IonLabel,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { mailOutline, callOutline, logoGithub, locationOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, IonAvatar,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent,
    IonList, IonItem, IonIcon, IonLabel,
  ],
})
export class Tab1Page {
  constructor() {
    addIcons({ mailOutline, callOutline, logoGithub, locationOutline });
  }
}
