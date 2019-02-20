import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit {

  coordenadores: Array<any> = new Array();
  bolsistas: Array<any> = new Array();

  constructor() {
    this.coordenadores.push({
      nome: "Prof. Dr. Eliomar Araújo de Lima",
      cargo: "Coordenador Técnico",
      lattes: "http://lattes.cnpq.br/1362170231777201"
    },
      {
        nome: "Prof. Dr. Fábio Nogueira de Lucena",
        cargo: "Subcoordenador Técnico",
        lattes: "http://lattes.cnpq.br/6428011745982173"
      })

    this.bolsistas.push({
      nome: "Carlos Hernane Oliveira",
      cargo: "Graduado em Sistemas de Informação",
      lattes: ""
    },
      {
        nome: "Douglas Tonetto Pfeifer",
        cargo: "Graduando em Ciências da Computação",
        lattes: ""
      },
      {
        nome: "Hyago Vieira de Souza",
        cargo: "Graduando em Engenharia de Software",
        lattes: ""
      },
      {
        nome: "Karine Pires de Araújo",
        cargo: "Graduanda em Ciências da Computação",
        lattes: ""
      },
      {
        nome: "Luísa Nunes C. de Oliveira",
        cargo: "Graduanda em Gestão da Informação",
        lattes: ""
      },
      {
        nome: "Max Stival Rocha",
        cargo: "Graduando em Sistemas de Informação",
        lattes: ""
      },
      {
        nome: "Nicolas de Sousa E. Da Cruz",
        cargo: "Graduando em Gestão da Informação",
        lattes: ""
      },
      {
        nome: "Raquel de Andrade Corrêa",
        cargo: "Graduanda em Sistemas de Informação",
        lattes: ""
      },
      {
        nome: "Thaynara Mabille Marques Ribeiro",
        cargo: "Graduanda em Ciências da Computação",
        lattes: ""
      },
      {
        nome: "Túlio Alcântara Magalhães",
        cargo: "Graduando em Ciências da Computação",
        lattes: ""
      },
      {
        nome: "Vinícius Borges Alencar",
        cargo: "Graduando em Ciências da Computação",
        lattes: ""
      },
      {
        nome: "Ygor Galvão Lourenço",
        cargo: "Graduado em Gestão da Informação",
        lattes: ""
      })
  }

  ngOnInit() {
  }

}
