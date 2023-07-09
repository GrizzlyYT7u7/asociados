import { Component } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  validarFormulario(event: Event) {
    event.preventDefault(); 
    const name = (<HTMLInputElement>document.getElementById('name')).value;
    const cedu = (<HTMLInputElement>document.getElementById('cedu')).value;
    const correo = (<HTMLInputElement>document.getElementById('correo')).value;
    const celular = (<HTMLInputElement>document.getElementById('celular')).value;
    const phonerepre = (<HTMLInputElement>document.getElementById('phonerepre')).value;
    const dire = (<HTMLInputElement>document.getElementById('dire')).value;
    const tipoDiscapacidad = (<HTMLSelectElement>document.getElementById('text1')).value;
    const gradoDependencia = (<HTMLSelectElement>document.getElementById('text2')).value;
    const genero = document.querySelector('input[name="gender"]:checked');
    const password = (<HTMLInputElement>document.getElementById('contraseña')).value;
    const repPassword = (<HTMLInputElement>document.getElementById('repcontra')).value;
    const terminos = (<HTMLInputElement>document.getElementById('terminosycondiciones')).checked;

    const nameError = document.querySelector('.name .warnings')!;
    const ceduError = document.querySelector('.cedu .warnings')!;
    const correoError = document.querySelector('.correo .warnings')!;
    const celularError = document.querySelector('.celular .warnings')!;
    const phonerepreError = document.querySelector('.phonerepre .warnings')!;
    const direError = document.querySelector('.dire .warnings')!;
    const tipoDiscapacidadError = document.querySelector('.text1 .warnings')!;
    const gradoDependenciaError = document.querySelector('.text2 .warnings')!;
    const generoError = document.querySelector('.tipgenero .warnings')!;
    const passwordError = document.querySelector('.pass .warnings')!;
    const repPasswordError = document.querySelector('.contra .warnings')!;
    const terminosError = document.querySelector('.terminosycondiciones .warnings')!;

    // Validar el nombre
    if (!name) {
      nameError.innerHTML = 'El campo de nombres es requerido';
    } else {
      nameError.innerHTML = '';
    }

    // Validar la cédula
    if (!cedu) {
      ceduError.innerHTML = 'El campo de cédula es requerido';
    } else {
      ceduError.innerHTML = '';
    }

    // Validar el correo electrónico
    if (!correo) {
      correoError.innerHTML = 'El campo de correo electrónico es requerido';
    } else if (!this.validarEmail(correo)) {
      correoError.innerHTML = 'El correo electrónico ingresado no es válido';
    } else {
      correoError.innerHTML = '';
    }

    // Validar el celular
    if (!celular) {
      celularError.innerHTML = 'El campo de celular es requerido';
    } else {
      celularError.innerHTML = '';
    }

    // Validar el celular del representante
    if (!phonerepre) {
      phonerepreError.innerHTML = 'El campo de celular del representante es requerido';
    } else {
      phonerepreError.innerHTML = '';
    }

    // Validar la dirección
    if (!dire) {
      direError.innerHTML = 'El campo de dirección es requerido';
    } else {
      direError.innerHTML = '';
    }

    // Validar el tipo de discapacidad
    if (tipoDiscapacidad === '0') {
      tipoDiscapacidadError.innerHTML = 'Debe seleccionar un tipo de discapacidad';
    } else {
      tipoDiscapacidadError.innerHTML = '';
    }

    // Validar el grado de dependencia
    if (gradoDependencia === '0') {
      gradoDependenciaError.innerHTML = 'Debe seleccionar un grado de dependencia';
    } else {
      gradoDependenciaError.innerHTML = '';
    }

    // Validar el género
    if (!genero) {
      generoError.innerHTML = 'Debe seleccionar un género';
    } else {
      generoError.innerHTML = '';
    }

    // Validar la contraseña
    if (!password) {
      passwordError.innerHTML = 'El campo de contraseña es requerido';
    } else {
      passwordError.innerHTML = '';
    }

    // Validar la repetición de contraseña
    if (!repPassword) {
      repPasswordError.innerHTML = 'Debe repetir la contraseña';
    } else if (password !== repPassword) {
      repPasswordError.innerHTML = 'Las contraseñas no coinciden';
    } else {
      repPasswordError.innerHTML = '';
    }

    // Validar los términos y condiciones
    if (!terminos) {
      terminosError.innerHTML = 'Debe aceptar los términos y condiciones';
    } else {
      terminosError.innerHTML = '';
    }
  }

  validarEmail(email: string): boolean {
    // Expresión regular para validar el formato de un email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
