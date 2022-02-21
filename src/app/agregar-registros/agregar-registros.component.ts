import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralService } from 'src/services/general.service';
import { InicioService } from 'src/services/inicio.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-agregar-registros',
  templateUrl: './agregar-registros.component.html',
  styleUrls: ['./agregar-registros.component.css']
})
export class AgregarRegistrosComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private incioService : InicioService,
    private location: Location,
  ) { }

  public formulario! : FormGroup;
  public registros : any = null;

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      nacionalidad: ['', Validators.required],
      telefono: ['', Validators.required],
      edad: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],

    });
  }

  volver(){
    this.location.back();
  }

  reset(){
    this.formulario.reset();
  }

  agregar()
  {
    let data = {
      'nombre' : this.formulario.value.nombre,
      'apellido' : this.formulario.value.apellido,
      'nacionalidad' : this.formulario.value.nacionalidad,
      'telefono' : this.formulario.value.telefono,
      'edad' : this.formulario.value.edad,
      'fechaNacimiento' : this.formulario.value.fechaNacimiento,
    };

    console.log("data", data);
    

    this.incioService.agregar(data).subscribe(
      (response : any) => {
        this.formulario.reset();
        GeneralService.ABRIR_MENSAJE("Agregado correctamente", "success");
        this.location.back();
      },
      (error: any) => {
        GeneralService.ABRIR_MENSAJE("Ha ocurrido un error", "error");
        console.error(error);
      }
    );
  }

}
