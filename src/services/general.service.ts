import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  public static API_URL : string = 'http://localhost:8080/api/';
    
  constructor() {}
  
  public static Swal = require('sweetalert2')

  public static ABRIR_MENSAJE(msg : string, type : any) {
    let title = "Mensaje";
    if (type == "success")
      title = "¡Buen trabajo!"
    else
      title = "Error"

    Swal.fire(
      title,
      msg,
      type
    );
  }

  public static ABRIR_CONFIRMACION(): any {
    const confirmacion = new Observable(observer =>{
      Swal.fire({
        title: '¿Estas Seguro?',
        text: 'Esto cambiara el estado de eliminacion',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: '!Cancelar¡',
        confirmButtonText: '¡Confirmar!'
      }).then((result : any) =>{
        if (result.value) {
          observer.next(true);
        }
      });
    });
    return confirmacion;
  }

  
}
