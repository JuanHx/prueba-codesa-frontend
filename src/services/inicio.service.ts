import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GeneralService } from './general.service';

@Injectable({
  providedIn: 'root'
})
export class InicioService {

  constructor(
    private http : HttpClient
  ) { }

  url : any = GeneralService.API_URL + 'personasCrud/';

  list() : any{
  	return this.http.get(this.url + 'getAll');
  }

  listBy(id: number) : any
  {
  	return this.http.get(this.url + 'get/' + id); 
  }

  deleteBy(id: number) : any
  {
  	return this.http.get(this.url + 'deleteBy/' + id); 
  }

  listByDelete(deleteStatus: number) : any
  {
  	return this.http.get(this.url + 'getAllDelete/' + deleteStatus); 
  }

  listByOder(order: string) : any
  {
  	return this.http.get(this.url + 'getByOrder/' + order); 
  }

  agregar(form : any) :any{
    const data = form;
  	return this.http.post(this.url + 'new', data); 
  }

  editar(id: any, form: any){
    const data = form;
    return this.http.put(this.url + 'updateBy/' + id, data); 
  }

}
