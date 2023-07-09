import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent {
  validarFormulario(event: Event) {
    event.preventDefault(); // Detener la recarga de la página

    const email = (<HTMLInputElement>document.getElementById('user')).value;
    const password = (<HTMLInputElement>document.getElementById('passw')).value;
    const emailError = document.querySelector('.correo .warnings')!;
    const passwordError = document.querySelector('.pass .warnings')!;

    // Validar el email
    if (!email) {
      emailError.innerHTML = 'El campo de correo electrónico es requerido';
    } else if (!this.validarEmail(email)) {
      emailError.innerHTML = 'El correo electrónico ingresado no es válido';
    } else {
      emailError.innerHTML = '';
    }

    // Validar la contraseña
    if (!password) {
      passwordError.innerHTML = 'El campo de contraseña es requerido';
    } else {
      passwordError.innerHTML = '';
    }
  }

  validarEmail(email: string): boolean {
    // Expresión regular para validar el formato de un email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
