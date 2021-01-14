import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UsersResponse} from "../models/UsersResponce";

@Injectable({
  providedIn: "root"
})

export class UserService {
  Root_URL = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {
  }

  getUsersArr(page: number): Observable<UsersResponse> {
    const params = {
      per_page: '2',
      page: `${page}`
    }
    return this.http.get<UsersResponse>(this.Root_URL, {params})
  }
}
