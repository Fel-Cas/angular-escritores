import { Injectable } from '@angular/core';
import {ESCRITORES} from '../db/escritores.db'
import { Escritor } from '../models/escritor.model';


@Injectable({
  providedIn: 'root'
})
export class EscritoresService {

  constructor() { }

  getAll():Promise<Escritor[]>{
    return new Promise((resolve, reject)=>{
      resolve(ESCRITORES);
    })
  }

  getByCountry(pais:string):Promise<Escritor[]>{
    return new Promise((resolve, reject)=>{
      const escritoresByCountry: Escritor[]=[]
      for(let escritor of ESCRITORES){
        if(escritor.pais===pais) escritoresByCountry.push(escritor);
      }
      resolve(escritoresByCountry);
    })
  }

  getById(id:number): Promise<Escritor | any>{
    return new Promise((resolve, reject)=>{
      const escritorFound = ESCRITORES.find((escritor)=>{
        return escritor.id==id;
      });
      resolve(escritorFound);
    })
  }
}
