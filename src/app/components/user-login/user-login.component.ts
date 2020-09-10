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

  constructor() { }

  ngOnInit(): void {
  }

}
