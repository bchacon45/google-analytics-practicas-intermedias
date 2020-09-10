import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: any = [];

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

}
