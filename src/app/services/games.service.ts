import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'; 
import { map } from 'rxjs/operators';
import { juegoBE } from '../interfaces/JuegoBe'; 

import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(
    private Database: AngularFirestore,// SE INJECTA EN EL CONSTRUCTOR  AngularFirestore--
    private alertController: AlertController
  ) { }

  //CONFIGURACION DEL PATH DE FIREBASE
  DBref = this.Database.collection('Games');// SE DEFINE EL PATH DE FIREBASE

  readGames(){
       return this.DBref.snapshotChanges().pipe(map(games => {
          return games.map(game => { 
            const data  = game.payload.doc.data() as juegoBE;
            const id  = game.payload.doc.id;
            data.id = id;
            //console.log(data);
            return data ;
            //return {id, ...data};
            //return {data, ...id};
          })
        }))
  };


  //CRUD
  //CRUD
  //CRUD
  createGame(p_nombre:string ,p_genero : string){
    this.DBref.add ({
      nombre: p_nombre,
      genero: p_genero
    }).then(()=> {
      console.log('Juego fue creado correctamente');
    }).catch(err => console.log(err.message));
  }

  updateRoom(p_id:string , p_nombre:string , p_genero:string){
    this.DBref.doc(p_id).update({
      nombre: p_nombre,
      genero:p_genero
    }).then(()=> {
      console.log('Juego fue actualizado correctamente');
    }).catch(err => console.log(err.message));
  }

  deleteRoom(p_id:string){
    this.DBref.doc(p_id).delete().then(()=> {
      console.log('Juego fue eliminado correctamente');
    }).catch(err => console.log(err.message));
  }

  //COMPONENTS CREATE -- VENTANAS EMERGENTES 
  //COMPONENTS CREATE -- VENTANAS EMERGENTES 
  async PrompCreateGame() {
    const alert = await this.alertController.create({
      header: 'Agrega Nuevo Juego',
      buttons: [
        {
          text: 'No',
          cssClass: 'alert-button-cancel',
        },
        {
          text: 'Yes',
          cssClass: 'alert-button-confirm',
          //handler: (_nombre:string, _genero:string) => {
            handler: (prompData) => {
            console.log(prompData.NombreJuego + prompData.GeneroJuego);
            this.createGame(prompData.NombreJuego , prompData.GeneroJuego); //SE LLAMA SERVICIO createGame
          }
        },
      ],  
      inputs: [
        {
          name: 'NombreJuego',
          placeholder: 'Nombre',
        },
        {
          name: 'GeneroJuego',
          placeholder: 'Genero',
        },
        {
          type: 'textarea',
          placeholder: 'Descripcion',
        },
      ],
    });
    await alert.present();
  }


  //COMPONENTS UPDATE -- VENTANAS EMERGENTES 
  //COMPONENTS UPDATE -- VENTANAS EMERGENTES 
  async PrompUpdateGame(p_id_string:string , p_name :string ,p_genero:string) {
    const alert = await this.alertController.create({
      header: 'Actualiza Datos Juego',
      buttons: [
        {
          text: 'No',
          cssClass: 'alert-button-cancel',
        },
        {
          text: 'Yes',
          cssClass: 'alert-button-confirm',
          //handler: (_nombre:string, _genero:string) => {
            handler: (prompData) => {
            console.log(prompData.NombreJuego + prompData.GeneroJuego);
            this.updateRoom(p_id_string, prompData.NombreJuego ,prompData.GeneroJuego); //SE LLAMA SERVICIO CREAR updateRoom
          }
        },
      ],  
      inputs: [
        {
          name: 'NombreJuego',
          placeholder: p_name,
        },
        {
          name: 'GeneroJuego',
          placeholder: p_genero,
        },
        {
          type: 'textarea',
          placeholder: 'Descripcion',
        },
      ],
    });
    await alert.present();
  }



}
