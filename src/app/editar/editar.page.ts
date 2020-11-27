import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Song, SongService } from '../services/song.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {
  
  public song: Song; 

  constructor(
   private songService: SongService,
   private route: ActivatedRoute, 
   private navCtrl: NavController

   ) { }

  ngOnInit() {
      const id = + this.route.snapshot.paramMap.get('id'); 
      this.song = this.songService.find(id);
  }

  save () {
    this.songService.update(this.song); 
    this.navCtrl.back(); 
  }

}
