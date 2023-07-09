import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent {}

document.addEventListener('DOMContentLoaded', () => {
  const usuario = document.getElementById('user') as HTMLInputElement;
  const password = document.getElementById('passw') as HTMLInputElement;
  const form = document.getElementById('form') as HTMLFormElement;
  const parrafo = document.getElementById('warnings') as HTMLElement;
  const listinput = document.querySelectorAll('.botons');

  form.addEventListener('submit', (e: SubmitEvent) => {
    e.preventDefault();
    let condicion = validar();
    if (condicion) {
      location.href = 'inicio';
    }
  });

  function validar(): boolean {
    let condicion = true;
    listinput.forEach((element: Element) => {
      element.firstElementChild!.innerHTML = '';
    });
    if (usuario.value.length < 1 || usuario.value.trim() === '') {
      mjserror('correo', 'Correo no válido');
      condicion = false;
    }
    if (password.value.length < 6 || password.value.trim() === '') {
      mjserror('pass', 'Contraseña no válida');
      condicion = false;
    }
    return condicion;
  }

  function mjserror(classboton: string, mensaje: string) {
    let elemento = document.querySelector(`.${classboton}`) as HTMLElement;
    elemento.firstElementChild!.innerHTML = mensaje;
  }
});
