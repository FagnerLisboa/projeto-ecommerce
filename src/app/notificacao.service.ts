import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {
  static notificar(arg0: string) {
    throw new Error('Method not implemented.');
  }

  constructor(
    private snackbar: MatSnackBar
  ) { }

  notificar(mensagem: string) {
    this.snackbar.open(mensagem, "OK", {
      duration: 2000,
      verticalPosition: "top",
      horizontalPosition: "center"
    }); 
  }
}
