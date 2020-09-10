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

  constructor() { }

  ngOnInit(): void {
    
  }
}
