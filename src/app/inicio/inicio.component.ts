import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/services/general.service';
import { InicioService } from 'src/services/inicio.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(
    private incioService: InicioService,
  ) { }

  public todo: any = [];
  public delete: any = [];
  public id: any;

  ngOnInit(): void {
    this.listarTodo();
  }

  reload(){
    window.location.href = "";
  }
  listarTodo() {
    this.incioService.list().subscribe(
      (response: any) => {
        this.todo = response;
        console.log(this.todo);

      }
    )
  }

  eliminarRegistro(id: any) {
    GeneralService.ABRIR_CONFIRMACION().subscribe(
      (reponse: any) => {
        this.incioService.deleteBy(id).subscribe(
          (reponse: any) => {
            GeneralService.ABRIR_MENSAJE("Eliminado correctamente", "success")
            //window.location.href = '';
            location.reload();
          }, (error: any) => {
            console.error(error);
          }
        )
      }
    )
  }


}
