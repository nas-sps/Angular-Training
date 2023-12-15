import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GET_USER, USER_TYPE } from '../interfaces/user.interfaces';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: GET_USER[] = [
    { id: 1, name: 'Amit Thakur', email: 'amit@gmail.com', verified:false },
    { id: 2, name: 'Nashra Mirza', email: 'nashra@gmail.com', verified:true },
    { id: 3, name: 'Fazil Bhat', email: 'fazil@gmail.com',verified:true }
  ]

  constructor(
    private readonly http:HttpClient
  ) { }

  getUsers():GET_USER[]{
    return this.users;
  }
  getUsersFromHttp():Observable<any>{
    return this.http.get<any>("https://dummyjson.com/users?limit=30");
  }
  getAllUsers():Observable<USER_TYPE[]>{
    return this.http.get<USER_TYPE[]>("https://jsonplaceholder.typicode.com/users");
  }
  getUserDetailsById(id:number):Observable<USER_TYPE>{
    return this.http.get<USER_TYPE>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
}
