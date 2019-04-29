import { Component } from '@angular/core';
import { QuestionarioManagerService } from './questionario-manager.service';
import { Pessoa } from './pessoa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  pessoas = [];
  nome = null;
  sexo = null;
  idade = null;
  cidade = null;
  cidades = ['Palmas','Porto Nacional','Lajeado','Paraiso']
  media_idade_mulheres = JSON.parse(localStorage.getItem("media-idade-mulheres"));
  media_idade_homens = JSON.parse(localStorage.getItem("media-idade-homens"));
  pessoa_mais_velha = JSON.parse(localStorage.getItem("pessoa-mais-velha"));
  media_idade_lajeado = JSON.parse(localStorage.getItem("media-idade-lajeado"));
  media_idade_palmas = JSON.parse(localStorage.getItem("media-idade-palmas"));
  media_idade_porto = JSON.parse(localStorage.getItem("media-idade-porto"));
  media_idade_paraiso = JSON.parse(localStorage.getItem("media-idade-paraiso"));

  porcentagem_homem_palmas = JSON.parse(localStorage.getItem("porcentagem-homem-palmas"));
  porcentagem_homem_lajeado = JSON.parse(localStorage.getItem("porcentagem-homem-lajeado"));
  porcentagem_homem_porto = JSON.parse(localStorage.getItem("porcentagem-homem-porto"));
  porcentagem_homem_paraiso = JSON.parse(localStorage.getItem("porcentagem-homem-paraiso"));
  porcentagem_mulher_palmas = JSON.parse(localStorage.getItem("porcentagem-mulher-palmas"));
  porcentagem_mulher_lajeado = JSON.parse(localStorage.getItem("porcentagem-mulher-lajeado"));
  porcentagem_mulher_porto = JSON.parse(localStorage.getItem("porcentagem-mulher-porto"));
  porcentagem_mulher_paraiso = JSON.parse(localStorage.getItem("porcentagem-mulher-paraiso"));

  constructor(private pessoa: QuestionarioManagerService){
    
  }


  salvar() {
      const pessoa = {
        id: Math.random() + 1,
        nome: this.nome,
        sexo: this.sexo,
        idade: this.idade,
        cidade: this.cidade,
    }
    
    this.pessoas.push(pessoa)

    this.calcular_media();
    this.calcularMediaCidade();
    this.CalcularMediaSexo();

    this.pessoa.salvar(pessoa)
    console.log(this.pessoa.calculodeidade() )
    }
    salvar_localStorage() {
      for (let pessoa of this.pessoas){
        localStorage.setItem(pessoa.id, JSON.stringify(pessoa))

      }
    }

    calcular_media(){
      var cont_mulher = 0;
      var cont_homem = 0;
      var idade_homem = 0;
      var idade_mulher = 0;
      for (let pessoa of this.pessoas){
        if (pessoa.sexo == "Masculino"){
          idade_homem = idade_homem + pessoa.idade
          cont_homem = cont_homem +1
        }
        else {
          idade_mulher = idade_mulher + pessoa.idade
          cont_mulher = cont_mulher +1
        }
      }
      if(cont_mulher >=1){
        this.media_idade_mulheres = idade_mulher / cont_mulher;
        localStorage.setItem("media-idade-mulheres", JSON.stringify(this.media_idade_mulheres))
      }
      else {
        this.media_idade_mulheres = null;
      }
      if(cont_homem >=1){
        this.media_idade_homens = idade_homem / cont_homem;
        localStorage.setItem("media-idade-homens", JSON.stringify(this.media_idade_homens))
      }
      else {
        this.media_idade_homens = null;
      }
    }

    calcularMediaCidade(){
      var cont_palmas = 0;
      var cont_paraiso = 0;
      var cont_lajeado = 0;
      var cont_porto = 0;
      var idade_palmas = 0;
      var idade_lajeado = 0;
      var idade_porto = 0;
      var idade_paraiso = 0;
      for (let pessoa of this.pessoas){
        if (pessoa.cidade == "Palmas"){
          idade_palmas = idade_palmas + pessoa.idade
          cont_palmas = cont_palmas+1
        }
        if (pessoa.cidade == "Lajeado"){
          idade_lajeado = idade_lajeado + pessoa.idade
          cont_lajeado = cont_lajeado+1
        }
        if (pessoa.cidade == "Porto Nacional"){
          idade_porto = idade_porto + pessoa.idade
          cont_porto = cont_porto+1
        }
        if (pessoa.cidade == "Paraíso"){
          idade_paraiso = idade_paraiso + pessoa.idade
          cont_paraiso = cont_paraiso+1
        }
      }
      if(cont_palmas >=1){
        this.media_idade_palmas = idade_palmas / cont_palmas;
        localStorage.setItem("media-idade-palmas", JSON.stringify(this.media_idade_palmas))
      }
      else {
        this.media_idade_palmas = null;
      }
      if(cont_lajeado >=1){
        this.media_idade_lajeado = idade_lajeado / cont_lajeado;
        localStorage.setItem("media-idade-lajeado", JSON.stringify(this.media_idade_lajeado))
      }
      else {
        this.media_idade_lajeado = null;
      }
      if(cont_porto >=1){
        this.media_idade_porto = idade_porto / cont_porto;
        localStorage.setItem("media-idade-porto", JSON.stringify(this.media_idade_porto))
      }
      else {
        this.media_idade_porto = null;
      }
      if(cont_paraiso >=1){
        this.media_idade_paraiso = idade_paraiso / cont_paraiso;
        localStorage.setItem("media-idade-paraiso", JSON.stringify(this.media_idade_paraiso))
      }
      else {
        this.media_idade_paraiso = null;
      }
    }
    CalcularMediaSexo(){
      var quantidade_homem_palmas = 0;
      var quantidade_mulheres_palmas = 0;
      var total_palmas = 0;
      var quantidade_homem_paraiso = 0;
      var quantidade_mulheres_paraiso = 0;
      var total_paraiso = 0;
      var quantidade_homem_lajeado = 0;
      var quantidade_mulheres_lajeado = 0;
      var total_lajeado = 0;
      var quantidade_homem_porto = 0;
      var quantidade_mulheres_porto = 0;
      var total_porto = 0;

      for (let pessoa of this.pessoas){
        if (pessoa.cidade == "Palmas") {
          if (pessoa.sexo == "Masculino"){
            quantidade_homem_palmas = quantidade_homem_palmas +1
          }
          else{
            quantidade_mulheres_palmas = quantidade_mulheres_palmas +1
            }
          total_palmas = total_palmas +1
          }
        else if (pessoa.cidade == "Paraíso") {
          if (pessoa.sexo == "Masculino"){
            quantidade_homem_paraiso = quantidade_homem_paraiso +1
          }
          else{
            quantidade_mulheres_paraiso = quantidade_mulheres_paraiso +1
            }
          total_paraiso = total_paraiso +1
          }
          else if (pessoa.cidade == "Lajeado") {
            if (pessoa.sexo == "Masculino"){
              quantidade_homem_lajeado = quantidade_homem_lajeado +1
            }
            else{
              quantidade_mulheres_lajeado = quantidade_mulheres_lajeado +1
              }
            total_lajeado = total_lajeado +1
            }
          else if (pessoa.cidade == "Porto Nacional") {
            if (pessoa.sexo == "Masculino"){
              quantidade_homem_porto = quantidade_homem_porto +1
            }
            else{
              quantidade_mulheres_porto = quantidade_mulheres_porto +1
              }
            total_porto = total_porto +1
            }
        }
        if (total_palmas >=1){
          this.porcentagem_homem_palmas = (quantidade_homem_palmas * 100) / total_palmas
          this.porcentagem_mulher_palmas = (quantidade_mulheres_palmas * 100) / total_palmas
          localStorage.setItem("porcentagem-homem-palmas",JSON.stringify(this.porcentagem_homem_palmas))
          localStorage.setItem("porcentagem-mulher-palmas",JSON.stringify(this.porcentagem_mulher_palmas))
        }
        else{
          this.porcentagem_homem_palmas = null;
          this.porcentagem_mulher_palmas = null;
        }
        if (total_paraiso >=1){
          this.porcentagem_homem_paraiso = (quantidade_homem_paraiso * 100) / total_paraiso
          this.porcentagem_mulher_paraiso = (quantidade_mulheres_paraiso * 100) / total_paraiso
          localStorage.setItem("porcentagem-homem-paraiso",JSON.stringify(this.porcentagem_homem_paraiso))
          localStorage.setItem("porcentagem-mulher-paraiso",JSON.stringify(this.porcentagem_mulher_paraiso))
        }
        else{
          this.porcentagem_homem_paraiso = null;
          this.porcentagem_mulher_paraiso = null;
        }
        if (total_lajeado >=1){
          this.porcentagem_homem_lajeado = (quantidade_homem_lajeado * 100) / total_lajeado
          this.porcentagem_mulher_lajeado = (quantidade_mulheres_lajeado * 100) / total_lajeado
          localStorage.setItem("porcentagem-homem-lajeado",JSON.stringify(this.porcentagem_homem_lajeado))
          localStorage.setItem("porcentagem-mulher-lajeado",JSON.stringify(this.porcentagem_mulher_lajeado))
        }
        else{
          this.porcentagem_homem_lajeado = null;
          this.porcentagem_mulher_lajeado = null;
        }
        if (total_porto >=1){
          this.porcentagem_homem_porto = (quantidade_homem_porto * 100) / total_porto
          this.porcentagem_mulher_porto = (quantidade_mulheres_porto * 100) / total_porto
          localStorage.setItem("porcentagem-homem-porto",JSON.stringify(this.porcentagem_homem_porto))
          localStorage.setItem("porcentagem-mulher-porto",JSON.stringify(this.porcentagem_mulher_porto))
        }
        else{
          this.porcentagem_homem_porto = null;
          this.porcentagem_mulher_porto = null;
        }
      }
}