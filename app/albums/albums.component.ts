import { Component, OnInit } from '@angular/core';
// Importez la définition de la classe et les albums
import { Album, List } from '../album';
import { ALBUMS } from '../mock-albums';
import { ALBUM_LISTS } from '../mock-albums';
import { SearchComponent  } from "../search/search.component";
@Component({
      selector: 'app-albums',
      templateUrl: './albums.component.html',
      styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
      titlePage: string = "Page princiaple Albums Music";
      albums: Album[] = ALBUMS;
      selectedAlbum !: Album;
      filteredAlbums: Album[] = [];

      constructor() { }
      ngOnInit() {
      }
      
      onSelect (album: Album) : void {
            this.selectedAlbum = album;            
      }
     
      // Méthode pour gérer l'événement "onPlay" émis par le composant "album-details"
      playParent(events : any) {
        this.selectedAlbum = events; // Mettez à jour l'album sélectionné avec celui émis par le détail de l'album
      }

      onSearchChanged(searchQuery: string) {
            if (searchQuery) {
              // Effectue le filtrage des albums en fonction du critère de recherche
              this.filteredAlbums = this.albums.filter(album => album.title.toLowerCase().includes(searchQuery.toLowerCase()));
            } else {
              // Si le critère de recherche est vide, afficher tous les albums
              this.filteredAlbums = this.albums;
            }
          }
}

