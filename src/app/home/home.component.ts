import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    noticias: Array<any> = [];
    publicacoes: Array<any> = [];

    constructor() {

        this.noticias.push({
            titulo:'Health-Related Quality of Life and Well-Being',
            descricao: 'Health-related quality of life (HRQoL) is a multi-dimensional concept that includes domains related to physical, mental, emotional, and social functioning.',
            link: 'https://www.healthypeople.gov/2020/about/foundation-health-measures/Health-Related-Quality-of-Life-and-Well-Being',
            imagem: ''
        });
        this.publicacoes.push({
            titulo: 'Documentação SSEQV',
            descricao: 'Sinopse do Projeto SSEQV',
            label: 'PDF',
            link: 'assets/anexos/Sinopse_ProjetoSSEQV.pdf'
        });

    }

    ngOnInit() {

    }

}
