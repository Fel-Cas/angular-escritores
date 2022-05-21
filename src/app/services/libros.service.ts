import { Injectable } from '@angular/core';
import { Libro } from '../models/libro.model';
import { LIBROS } from '../db/libros.db';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor() { }

  getByEscritor(idEscritor:number): Promise<Libro[]>{
    return new Promise((resolve, reject)=>{
        const libroEscrritor=LIBROS.filter((libro)=> libro.escritor===idEscritor);
        resolve(libroEscrritor);
    })
  }
}
