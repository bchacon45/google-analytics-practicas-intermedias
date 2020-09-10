import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/User';
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  API_URL = 'http://192.168.0.106:3000';

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(`${this.API_URL}/user`);
  }

  getUser(id: string){
    return this.http.get(`${this.API_URL}/user/${id}`);
  }

  getUserLogin(email: string){
    return this.http.get(`${this.API_URL}/user/login/${email}`,);
  }

  getUserByEmail(email: string){
    return this.http.get(`${this.API_URL}/user/edit/${email}`);
  }

  deleteUser(id: number){
    return this.http.delete(`${this.API_URL}/user/${id}`);
  }

  saveUser(user: User){
    return this.http.post(`${this.API_URL}/user`,user);
  }

  saveUserAdmBit(user: User){
    return this.http.post(`${this.API_URL}/user/createBit`,user);
  }

  updateUser(id: number,updatedUser: User): Observable<User>{
    return this.http.put<User>(`${this.API_URL}/user/${id}`,updatedUser);
  }

  updateClient(email: string,updatedUser: User): Observable<User>{
    return this.http.put<User>(`${this.API_URL}/client/${email}`,updatedUser);
  }

  uploadFile(formData){
    let urlApi = `${this.API_URL}/api/uploadFile`;
    return this.http.post(urlApi,formData);
  } 
  
  uploadCompressed(formData){
    let urlApi = `${this.API_URL}/api/uploadCompressed`;
    return this.http.post(urlApi,formData);
  }

  loadCategories(){
    return this.http.get(`${this.API_URL}/loadCategories`);
  }

  loadProducts(id: number){
    console.log("EL ID:"+id);
    return this.http.get(`${this.API_URL}/loadProducts/${id}`);
  }

  getProducts(){
    return this.http.get(`${this.API_URL}/products`);
  }

  getCategory(id : number){
    return this.http.get(`${this.API_URL}/categoria/${id}`);
  }

  activateUser(email: string,updatedUser: any): Observable<User>{
    return this.http.put<User>(`${this.API_URL}/validacion/${email}`,updatedUser);
  }

  recoverPassword(email : any){
    let urlApi = `${this.API_URL}/recoverPassword`;
    return this.http.post(urlApi,email);
  }

  changePassword(email : any){
    let urlApi = `${this.API_URL}/changePassword`;
    return this.http.post(urlApi,email);
  }

  getLogChages(){
    return this.http.get(`${this.API_URL}/LogChages`);
  }

  getOperation(id: string){
    return this.http.get(`${this.API_URL}/operacion/${id}`);
  }

  getReport2(anio: string){
    return this.http.get(`${this.API_URL}/report2/${anio}`);
  }

  getReport3(anio: string){
    return this.http.get(`${this.API_URL}/report3/${anio}`);
  }

  getReport8(){
    return this.http.get(`${this.API_URL}/report8`);
  }
  
  getReport10(cantidad: number){
    return this.http.get(`${this.API_URL}/report10/${cantidad}`);
  }

  getReport7(){
    return this.http.get(`${this.API_URL}/report7`);
  }
}
