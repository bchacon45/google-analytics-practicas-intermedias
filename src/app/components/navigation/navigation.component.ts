import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public userLogged : boolean;
  public userRole : number;
  public userName : string;
  public userLastName : string;
  public userPicture : string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.checkLoggedUser();
  }
  
  checkLoggedUser(){
    if(localStorage.getItem('loggedUser') != (null || undefined)){
      this.userLogged = true;
    }
    else{
      this.userLogged = false;
    }
    let tempUser : User = JSON.parse(localStorage.getItem('loggedUser'));
    if(tempUser != undefined && tempUser != null){
      if(tempUser.claseUsuario == 1){
        this.userRole = 1;
      }
      else if(tempUser.claseUsuario == 2){
        this.userRole = 2;
      }
      else if(tempUser.claseUsuario == 3){
        this.userRole = 3 ;
      }
    }
    this.userName = tempUser.nombre;
    this.userLastName = tempUser.apellidos;
    this.userPicture = tempUser.fotografia;
  }

  cerrarSesion(){
    localStorage.removeItem('loggedUser');
    this.userLogged = false;
    this.router.navigate(['/']);
  }

  iniciarSesion(){
    this.router.navigate(['/login']);
    this.checkLoggedUser();
  }

  registrar(){
    this.router.navigate(['/signin']);
    this.checkLoggedUser();
  }

  irHome(){
    this.router.navigate(['/']);
    this.checkLoggedUser();
  }

}
