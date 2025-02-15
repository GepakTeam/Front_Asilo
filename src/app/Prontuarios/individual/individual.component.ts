import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { DateAdapter, MAT_DATE_FORMATS, MatDateFormats } from '@angular/material/core';
import { NavbarComponent } from "../../Core/NavBar/navbar.component";
import { IndividualService } from '../../_services/individual.service';

import { response } from 'express';
import { FormsModule } from '@angular/forms';
import { IndividualRequest } from '../../Models/IndividualRequest';

// Configuração dos formatos de data
export const MY_DATE_FORMATS: MatDateFormats = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'DD/MM/YYYY',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
    selector: 'app-individual',
    standalone: true,
    providers: [
        { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
        { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
    ],
    templateUrl: './individual.component.html',
    styleUrls: ['./individual.component.css'],
    imports: [
        MatTabsModule,
        MatDatepickerModule,
        MatInputModule,
        MatFormFieldModule,
        MatNativeDateModule,
        RouterLink,
        NavbarComponent,
        FormsModule
    ]
})
export class IndividualComponent {

  
  model: IndividualRequest;

  constructor(private dateAdapter: DateAdapter<Date>, 
    private individualService: IndividualService, 
    private router: Router
  ) {
    // Define o formato de data para o padrão brasileiro
    this.dateAdapter.setLocale('pt-BR'); 
    this.model={
    nome: '',
    dataNascimento: new Date(),
    idade: '',
    localNascimento: '',
    sexo: true,
    raca: true,
    telefone: '',
    nomeMae: '',
    nomePai: '',
    nomeResponsavel: '',
    endereco: '',
    cep: '',
    pontoReferencia: '',
    rg: '',
    cpf: '',
    carteiraTrabalho: '',
    tituloEleitoral: '',
    certidaoNascimento: '',
    relacaoAmigavel: '',
    relacaoDistanciados: '',
    relacaoConflituosa: '',
    quemResideCasa: '',
    filho: true,
    qntFilho: '',
    comQuemMoraFilhos: '',
    moradia: true,
    doenca: '',
    deficiencia: true,
    quaisDeficiencias: '',
    saude: true,
    atividadesLazer: '',
    parceiros: true,
    acompanhamento: true,
    qualMedicacao: '',
    planoSaude: true,
    qualPlanoSaude: '',
    usoDroga: true,
    quaisDrogasUsou: '',
    historicoUso: '',
    atendimentoPsicologico: true,
    localAtendimentoPsicologico: '',
    tratamentoPsiquiatrico: true,
    localTratamentoPsiquiatrico: '',
    tomaAlgumTipoMedicamento: '',
    motivoEncaminhamentoPsicologico: '',
  };
  }


    onFormSubmit(){
      console.log(this.model)
      this.individualService.salvarProntuarios(this.model)
      .subscribe({
        next:(response)=>
          this.router.navigateByUrl('http://localhost:5133/api/Prontuarios')
      });
    }

}
