import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Libro } from 'src/app/models/libro.model';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.css']
})
export class ListaLibrosComponent implements OnInit {

  libros: Libro[];
  constructor(
    private librosService: LibrosService,
    private activatedRote: ActivatedRoute
  ) { 
    this.libros=[]
  }

  ngOnInit(): void {
    this.activatedRote.parent?.params.subscribe(async params=>{
      this.libros=await this.librosService.getByEscritor(parseInt(params['idEscritor']));
    });
  }

}
