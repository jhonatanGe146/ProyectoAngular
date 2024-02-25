import { Component } from '@angular/core';
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

  users: any[] = [];
  nuevoUsuario: any = {
    NRODOCUMENTO: '',
    NOMBRE: '',
    APELLIDO: '',
    EMAIL: '',
    TELEFONO: '',
    CONTRASENA: '',
    TIPO_DOCUMENTO_IDTIPODOCUMENTO: null,
    TIPO_PERSONA_IDTIPOPERSONA: 3,
    ESTADO_USUARIO_IDESTADO: 1,
  };

  constructor(private userService: UserService) { }

  crearNuevoUsuario(): void {
    this.userService.postUser(this.nuevoUsuario).subscribe((data) => {
      console.log('Usuario creado:', data);
      // Aquí puedes actualizar la lista de usuarios o realizar otras acciones después de crear el usuario
    });
  }
}
