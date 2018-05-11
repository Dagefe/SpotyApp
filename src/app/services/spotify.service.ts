import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable()
export class SpotifyService {

  artistas: any[] = [];

  constructor( public http: HttpClient) { 

    console.log("Servicio de Spotify funcionando")
  }

  getArtistas() {

    let url = "https://api.spotify.com/v1/search?query=metalica&type=artist&limit=20"

    let headers = new HttpHeaders({
      'authorization' : 'Bearer BQBidcQK7phX7tbibtvuHfMvOmVXFMJVhM5-DKhhNnkl9zhECLYwZKm7CvsLiOpT9Y33VB_Guo8d4c4X4aQ'
    })

    return this.http.get(url, { headers })

  }
  
}
