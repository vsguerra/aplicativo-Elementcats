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

  private songs: Song[] = [
    { id: 0, title: 'hoje é dia de baile ', favorite: true },
    { id: 1, title: 'uma sabadão desse ', favorite: false }, 
  ]; 

  public allSongs(): Readonly<Array<Readonly<Song>>> {
    return this.songs;
  }

 public find (id: number ): Song{
    return {...this.songs.find(s => s.id === id)};
 }

public update (updateSong: Song ) : void {
 const songIndex = this.songs.findIndex(s => s.id === updateSong.id); 
 this.songs[songIndex] = updateSong
}
    
}
