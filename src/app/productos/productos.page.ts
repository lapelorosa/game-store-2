import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {GamesService} from '../services/games.service'; 

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  public productos: string;
  public Listjuego :any = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private gamesService : GamesService  //SE INJECTA  servicio GamesService --
    ) { }

  ngOnInit() {
    //this.productos = this.activatedRoute.snapshot.paramMap.get('id');
  }

  //LISTA DE JUEGOS
  GetListGame(){
          this.gamesService.readGames().subscribe(juegosResult =>{   
          this.Listjuego = juegosResult;
    });
  }

  //CREAR JUEGOS
  CreateGame(){
    this.gamesService.PrompCreateGame();
  }

  //ACTUALIZAR JUEGOS
  UpdateGame(juego){
    console.log(juego)
    this.gamesService.PrompUpdateGame(juego.id,juego.nombre ,juego.genero);
  }

  //DELETE JUEGOS
  DeleteGame(juego){
    console.log(juego)
    this.gamesService.deleteRoom(juego.id);
  }


}
