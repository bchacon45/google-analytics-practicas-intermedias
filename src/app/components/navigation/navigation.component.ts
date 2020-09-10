import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cerrarSesion(){
    this.router.navigate(['/']);
  }

  iniciarSesion(){
    this.router.navigate(['/login']);

  }

  registrar(){
    this.router.navigate(['/signin']);

  }

  irHome(){
    this.router.navigate(['/']);

  }

}
