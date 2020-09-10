import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../services/users.service';
import { User } from 'src/app/models/User';

import { DatePipe } from '@angular/common';
import * as bcrypt from 'bcryptjs';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  user : User = {
    nombre: '',
    apellidos: '',
    contrasenia: '',
    correo: '',
    telefono: 0,
    fotografia: 'http://localhost:3000/uploads/9gfbi7YU_eMNB_Scvr5rNOYs.jpg',
    genero: 1,
    fechaNacimiento: null,
    direccion: '',
    claseUsuario: 3,
    estadoUsuario: 3,
    identificadorOpr: 1,
    identificadorOperacion: 1,
    descripcionOperacion: ''
  };

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    
  }
 
  saveUser() {
    //formatting date
    const dateSendingToServer = new DatePipe('en-US').transform(this.user.fechaNacimiento, 'dd/MM/yyyy')
    this.user.fechaNacimiento = dateSendingToServer;

    let a = new Promise((ress,rejs)=>{
      const salt = bcrypt.genSaltSync(10);
      this.user.contrasenia = bcrypt.hashSync(this.user.contrasenia, salt);
    });

    let b = new Promise((ress,rejs)=>{
      this.userService.saveUser(this.user).subscribe(
        res =>{
          //console.log(res);
          alert('Usuario registrado');
        },
        err => console.error(err)
      )
    });

    /*let d = new Promise((ress,rejs)=>{
      this.userService.saveUserAdmBit(this.user).subscribe(
        res =>{
          //console.log(res);
        },
        err => console.error(err)
      )
    });*/

    Promise.all([a,b])
  }
}
