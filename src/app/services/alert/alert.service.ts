import { Injectable, signal } from '@angular/core';
import { AlertMessage } from '../../models/alert.model';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

 alert = signal<AlertMessage | null>(null);

  showAlert(type: AlertMessage['type'], message: string) {

    this.alert.set({
      type,
      message
    });

    setTimeout(() => {
      this.alert.set(null);
    }, 3000);
  }
}
