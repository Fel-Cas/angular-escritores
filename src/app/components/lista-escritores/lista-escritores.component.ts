import { Component, OnInit } from '@angular/core';
import { EscritoresService } from 'src/app/services/escritores.service';
import { Escritor } from '../../models/escritor.model';

@Component({
  selector: 'app-lista-escritores',
  templateUrl: './lista-escritores.component.html',
  styleUrls: ['./lista-escritores.component.css']
})
export class ListaEscritoresComponent implements OnInit {

  escritores: Escritor[];

  constructor(private escritoresService: EscritoresService) { 
    this.escritores=[];
  }

  async ngOnInit(){
    this.escritores= await this.escritoresService.getAll();
  }

  async onChange(pais:any){
    if(pais.target.value==='todos'){
      this.escritores= await this.escritoresService.getAll()
    }else{
      this.escritores= await this.escritoresService.getByCountry(pais.target.value)
    }
    
  }

}
