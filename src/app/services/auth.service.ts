import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(
  private angularFireAuth:AngularFireAuth
  ) { 
    //this.userData = angularFireAuth.user;
  }

  //private userData : Observable<any>;
  //private user: Observable< angularFireAuth.user | null >;


  //LOGIN FIREBASE --
  loginUserEmail(email:string , password:string){
    this.angularFireAuth.signInWithEmailAndPassword(email,password).then(user => {
    //console.log(user.user.email);
    console.log("Logeado Exitosamente")
    });
  }


  //LOGGOUT FIREBASE --
  loggout(){
    this.angularFireAuth.signOut().then(() => {
    console.log("Session Cerrada Exitosamente");
  }).catch(err => console.log(err.message));
  }


  //GUARD RUTAS --
  IsAuthenticated(){
    console.log('authState:' + this.angularFireAuth.authState) // => OBSERVABLE
    console.log('user:' + this.angularFireAuth.user) // => OBSERVABLE
    //console.log('userOBS:' + this.userData) 
    //console.log(JSON.parse(this.angularFireAuth.authState));

    //// NO SE LOGRA Leer la variable observable  angularFireAuth.currentUser  :(
    //return this.angularFireAuth.currentUser !== null ;

    //SE DEBE PASAR A true para simular logeado en la aplicacion.
    //SE DEBE PASAR A true para simular logeado en la aplicacion.
    //SI EL USAURIO APARECE LOGEADO SE HABILIATA -- TRUE OR FASLE--
    return true ;
  }
}
