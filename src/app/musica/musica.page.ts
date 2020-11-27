import { Component, OnInit } from '@angular/core';
import { SongService } from '../services/song.service';



@Component({
  selector: 'app-musica',
  templateUrl: './musica.page.html',
  styleUrls: ['./musica.page.scss'],
})
export class MusicaPage  {
  
public songs = this.songService.allSongs();
   

  constructor(private songService: SongService ) { 

  }

  public find(id: number){
    
  }  

}
