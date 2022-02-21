import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralService } from 'src/services/general.service';
import { InicioService } from 'src/services/inicio.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-registros',
  templateUrl: './editar-registros.component.html',
  styleUrls: ['./editar-registros.component.css']
})
export class EditarRegistrosComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private incioService : InicioService,
    private location: Location,
    private route: ActivatedRoute,
  ) { }

  public consulta : any = [];
  public id : any = [];
  public formulario! : FormGroup;

  ngOnInit(): void {
    this.route.params.subscribe(params => this.id = params['id']);
    console.log("id",this.id);
    this.consultar();
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

  consultar(){
    this.incioService.listBy(this.id).subscribe(
      (response : any ) => {
        this.consulta = response;
        console.log("consulta", this.consulta);  
      }, (error : any)=>{
        console.error(error); 
      }
    )
  }

  editarRegistro(){
    let data = {
      'nombre' : this.formulario.value.nombre,
      'apellido' : this.formulario.value.apellido,
      'nacionalidad' : this.formulario.value.nacionalidad,
      'telefono' : this.formulario.value.telefono,
      'edad' : this.formulario.value.edad,
      'fechaNacimiento' : this.formulario.value.fechaNacimiento,
    }

    this.incioService.editar(this.id, data).subscribe(
      (response : any) => {
        this.formulario.reset();
        GeneralService.ABRIR_MENSAJE("Agregado correctamente", "success");
        this.location.back();
      },
      (error: any) => {
        GeneralService.ABRIR_MENSAJE("Ha ocurrido un error", "error");
        console.error(error);
      }
    )
  }


}
