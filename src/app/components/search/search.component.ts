import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent  {

  constructor( public _spotify: SpotifyService) { 

    this._spotify.getArtistas().subscribe( resp => {

      console.log("Informacion lista");
      console.log(resp);
    })
  }

 

}
