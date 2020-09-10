import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { User } from 'src/app/models/User';
import * as bcrypt from 'bcryptjs';
import { DatePipe } from '@angular/common';
import { asLiteral } from '@angular/compiler/src/render3/view/util';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  userCred: any = {
    email : '',
    pass : ''
  }

  user : User = {
    identificador:0,
    nombre: '',
    apellidos: '',
    contrasenia: '[NOT ACCESIBLE]',
    correo: '',
    telefono: 0,
    fotografia: '',
    genero: 1,
    fechaNacimiento: null,
    direccion: '',
    claseUsuario: 3,
    estadoUsuario: 1
  };
  
  constructor(private userService: UsersService,private router: Router) { }

  ngOnInit(): void {
    this.chechRole();
  }

  login(){
    this.userService.getUserLogin(this.userCred.email).subscribe(
      res =>{
        if(res[0]){
          if(bcrypt.compareSync(this.userCred.pass, res[0][3])){
            console.log(res);
            if(res[0][13]==1){
              this.user.identificador = res[0][0];
              this.user.nombre = res[0][1];
              this.user.apellidos = res[0][2];
              this.user.correo = res[0][4];
              this.user.telefono = res[0][5];
              this.user.fotografia = res[0][6];
              this.user.genero = res[0][14];
              const date = new DatePipe('en-US').transform(res[0][7], 'dd/MM/yyyy')
              this.user.fechaNacimiento = date;
              this.user.direccion = res[0][9];
              this.user.claseUsuario = res[0][12];
              this.user.estadoUsuario = res[0][13];
              localStorage.setItem('loggedUser',JSON.stringify(this.user));
              this.chechRole();
            }else if(res[0][13]==3){
              alert('Cuenta congelada/no validada')
            }else if(res[0][13]==2){
              alert('Cuenta invalidada')
            }
            
          }else{
            alert('Contraseña incorrecta')
          }
        }
        else{
          alert('Correo no encontrado')
        }
        
      },
      err => alert('login incorrecto')
    );
  }

  chechRole(){
    let tempUser : User = JSON.parse(localStorage.getItem('loggedUser'));
    if(tempUser != undefined && tempUser != null){
      if(tempUser.claseUsuario == 1){
        this.router.navigate(['/admin/']);
      }
      else if(tempUser.claseUsuario == 2){
        this.router.navigateByUrl('/admin'); 
      }
      else if(tempUser.claseUsuario == 3){
        this.router.navigateByUrl('/client'); 
      }
    }
  }

}
