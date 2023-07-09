import { Component } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {}

document.addEventListener('DOMContentLoaded', () => {
  const nombre = document.getElementById('name') as HTMLInputElement;
  const id = document.getElementById('cedu') as HTMLInputElement;
  const email = document.getElementById('correo') as HTMLInputElement;
  const telefono = document.getElementById('celular') as HTMLInputElement;
  const celurepre = document.getElementById('phonerepre') as HTMLInputElement;
  const ubica = document.getElementById('dire') as HTMLInputElement;
  const pass = document.getElementById('contraseña') as HTMLInputElement;
  const contra = document.getElementById('repcontra') as HTMLInputElement;
  const select = document.getElementById('text1') as HTMLSelectElement;
  const select2 = document.getElementById('text2') as HTMLSelectElement;
  const sexo = document.getElementById('tipgenero') as HTMLInputElement;
  const terminos = document.getElementById(
    'terminosycondiciones'
  ) as HTMLInputElement;
  const form = document.getElementById('form') as HTMLFormElement;
  const listinput = document.querySelectorAll('.botons');

  form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    let condicion = validacion();
    if (condicion) {
      location.href = 'index.html';
    }
    verificargenero();
  });

  function validacion(): boolean {
    let condicion = true;
    listinput.forEach((element: Element) => {
      (element as HTMLElement).firstElementChild!.innerHTML = '';
    });

    if (nombre.value.length < 1 || nombre.value.trim() === '') {
      mjserror('name', 'Nombre no válido');
      condicion = false;
    }
    if (
      id.value.length !== 10 ||
      id.value.trim() === '' ||
      isNaN(Number(id.value))
    ) {
      mjserror('cedu', 'Cédula no válida');
      condicion = false;
    }
    if (email.value.length < 1 || email.value.trim() === '') {
      mjserror('correo', 'Correo no válido');
      condicion = false;
    }
    if (
      telefono.value.length !== 10 ||
      telefono.value.trim() === '' ||
      isNaN(Number(telefono.value))
    ) {
      mjserror('celular', 'Celular no válido');
      condicion = false;
    }
    if (
      celurepre.value.length !== 10 ||
      celurepre.value.trim() === '' ||
      isNaN(Number(celurepre.value))
    ) {
      mjserror('phonerepre', 'Celular no válido');
      condicion = false;
    }
    if (ubica.value.length < 3 || ubica.value.trim() === '') {
      mjserror('dire', 'Dirección no válida');
      condicion = false;
    }
    if (select.value === '0' || select.value === '') {
      mjserror('text1', 'Elija un Tipo*');
      condicion = false;
    }
    if (select2.value === '0' || select2.value === '') {
      mjserror('text2', 'Elija un Grado*');
      condicion = false;
    }
    if (pass.value.length < 6 || pass.value.trim() === '') {
      mjserror('pass', 'Ingrese una Contraseña de al menos 6 caracteres');
      condicion = false;
    }
    if (contra.value !== pass.value) {
      mjserror('contra', 'Las Contraseñas no Coinciden');
      condicion = false;
    }
    if (!terminos.checked) {
      mjserror('terminosycondiciones', 'Acepte*');
      condicion = false;
    }
    return condicion;
  }

  function mjserror(classboton: string, mensaje: string) {
    let elemento = document.querySelector(`.${classboton}`) as HTMLElement;
    elemento.firstElementChild!.innerHTML = mensaje;
  }

  function verificargenero(): boolean {
    const tipe1 = document.getElementById('tipe1') as HTMLInputElement;
    const tipe2 = document.getElementById('tipe2') as HTMLInputElement;
    const tipe3 = document.getElementById('tipe3') as HTMLInputElement;

    if (tipe1.checked) {
      // Do something
      return true;
    } else if (tipe2.checked) {
      // Do something
      return true;
    } else if (tipe3.checked) {
      // Do something
      return true;
    } else {
      mjserror('tipgenero', 'Elija un Género');
      throw new Error('No gender selected');
    }
  }
});
