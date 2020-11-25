import { Component, OnInit } from '@angular/core';
import { Song, SongService } from '../services/song.service';

@Component({
  selector: 'app-musica',
  templateUrl: './musica.page.html',
  styleUrls: ['./musica.page.scss'],
})
export class MusicaPage implements OnInit {

  public songs = this.songService.songs; 

  constructor( private songService: SongService) { }

  ngOnInit() {
  }

}
