import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  
  tiposUsuario = [
    { id: 1, nombre: 'Administrador' },
    { id: 2, nombre: 'Recepcionista' },
    { id: 3, nombre: 'Cliente' },
  ];

  tiposDocumento = [
    { id: 1, nombre: 'Cédula de Ciudadanía' },
    { id: 3, nombre: 'Cédula de Extranjería' },
    { id: 2, nombre: 'Pasaporte' },
  ];

  // users: any[] = [];
  // nuevoUsuario: any = {
  //   NRODOCUMENTO: '',
  //   NOMBRE: '',
  //   APELLIDO: '',
  //   EMAIL: '',
  //   TELEFONO: '',
  //   CONTRASENA: '',
  //   TIPO_DOCUMENTO_IDTIPODOCUMENTO: null,
  //   TIPO_PERSONA_IDTIPOPERSONA: 3,
  //   ESTADO_USUARIO_IDESTADO: 1,
  // };

  users: any[] = [];
  nuevoUsuario: any = {
    numero_documento: '',
    nombre: '',
    apellido: '',
    email: '',
    username: '',
    telefono: '',
    password: '',
    id_tipoDocumento: null,
    id_tipoPersona: 2
  };

  constructor(private authService: AuthService, private router: Router) { }

  crearNuevoUsuario(): void {

    this.nuevoUsuario.username = this.nuevoUsuario.email;

    this.authService.signup(this.nuevoUsuario).subscribe((data) => {
      console.log('Usuario creado:', data);
      alert('Registro exitoso');
      this.router.navigate(['/login'])
    });
  }
}
