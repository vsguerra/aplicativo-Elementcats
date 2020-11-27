import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';


export interface Song {
  id: number; 
  title: string; 
  favorite: boolean; 
}


@Injectable({
  providedIn: 'root'

})
export class SongService {

  constructor(private storage: Storage ){
     this.loadData();

  }

  private songs: Song[] = []; 

  private async loadData(){
      
   const loadedSongs = await  this.storage.get('songs')as Song []; 
   this.songs.push(...loadedSongs); 
  }

  private storeData(){
    this.storage.set('songs', this.songs); 
  }

  public empty() : Song {
    return {
      id: null, 
      title: '', 
      favorite: false 
    }
  }

  public allSongs(): Readonly<Array<Readonly<Song>>> {
    return this.songs;
  }

 public find (id: number ): Song{
    return {...this.songs.find(s => s.id === id)};
 }

public update (updateSong: Song ) : void {
 const songIndex = this.songs.findIndex(s => s.id === updateSong.id); 
 this.songs[songIndex] = updateSong
  this.storeData();  
}

public create (newSong: Song) {
  const maxid = Math.max(...this.songs.map(s => s.id));
  this.songs.push({...newSong, id: maxid + 1}) ;
  this.storeData();
}
    
}
