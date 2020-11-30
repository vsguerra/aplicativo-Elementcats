import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export interface comentario {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}



@Component({
  selector: 'app-busca',
  templateUrl: './busca.page.html',
  styleUrls: ['./busca.page.scss'],
})
export class BuscaPage implements OnInit {

  public pergunta = ''; 
  public commit: comentario [];   

  constructor(private http: HttpClient) { 
      this.chamarHttp(); 

  }
        
    async chamarHttp() {
     const url = 'https://jsonplaceholder.typicode.com/comments'; 
     this.commit = (await this.http.get(url).toPromise()) as comentario[];
    }
       
  ngOnInit() {
  }

}
