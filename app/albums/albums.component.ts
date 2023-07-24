import { Component, OnInit } from '@angular/core';

// Importez la définition de la classe et les albums
import { Album, List } from '../album';
import { ALBUMS, ALBUM_LISTS } from '../mock-albums';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})

export class AlbumsComponent implements OnInit{
  titlePage: string= "Page principale Albums Music";
  albums: Album[] = ALBUMS;
lists: List [] = ALBUM_LISTS;
  selectedAlbum! : Album;
  // filteredAlbums: Album[] = [];
constructor() { }
ngOnInit(){ }
onSelect(album: Album): void{
  this.selectedAlbum = album;
}

      // Méthode pour gérer l'événement "onPlay" émis par le composant "album-details"
      playParent(events : any) {
        this.selectedAlbum = events; // Mettez à jour l'album sélectionné avec celui émis par le détail de l'album
      }


}
