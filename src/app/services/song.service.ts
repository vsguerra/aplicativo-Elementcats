import { Injectable } from '@angular/core';


export interface Song {
  id: number; 
  title: string; 
  favorite: boolean; 
}


@Injectable({
  providedIn: 'root'

})
export class SongService {

  public songs: Song[] = [
    { id: 0, title: 'hoje é dia de baile ', favorite: true },
    { id: 1, title: 'uma sabadão desse ', favorite: false }, 
  ]; 

  constructor() { }
}
