import { Injectable } from '@angular/core';
import { Pessoa } from './pessoa'

@Injectable({
  providedIn: 'root'
})
export class QuestionarioManagerService {

  lista_pessoas: Array<Pessoa> = []
  
  
  constructor() {
    this.calculodeidade()
    if (localStorage.getItem('pessoas')) {
      this.lista_pessoas = JSON.parse(localStorage.getItem('pessoas'));
    }
   }


  salvar(dados){

    this.lista_pessoas.push(new Pessoa(dados.nome, dados.sexo, dados.idade, dados.sexo))
    console.log(this.lista_pessoas)
    this.calculodeidade()

  }

  listaPessoas = (): Array<Pessoa> => this.lista_pessoas

  calculodeidade(){
    let mais_velho =  0
    let mais_novo = 999
    let velho
    let novo

     this.listaPessoas().filter(pessoa => {
      if(pessoa.idade > mais_velho){
        velho = pessoa.nome
        mais_velho = pessoa.idade
      }else if(pessoa.idade < mais_novo){
        novo = pessoa.nome
        mais_novo = pessoa.idade
      }
    })

    const velho_novo = {
      novo,
      velho
    }

    return velho_novo
  }
  

}


