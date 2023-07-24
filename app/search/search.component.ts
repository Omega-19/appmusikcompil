import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent {
    // Propriété pour stocker le critère de recherche saisi par l'utilisateur
    searchQuery: string = '';
    search = 'Search Albums';

    // Événement émis lorsque l'utilisateur effectue une recherche
    @Output() searchChanged = new EventEmitter<string>();

    // Méthode pour déclencher l'événement de recherche avec le critère saisi
    onSearchChange() {
        this.searchChanged.emit(this.searchQuery);
    }
}
