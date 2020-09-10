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

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    
    this.getProductsList();
  }

  getProductsList():void{
    this.usersService.getProducts().subscribe(
      res => {
        this.products = res;
        //console.log(this.users );
      },
      err => console.error(err)
    );
  }

  verIndividual(product: any){
    this.router.navigate(['/product'], { queryParams: {product}, skipLocationChange: true});
  }

}
