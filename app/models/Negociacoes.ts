import { Negociacao } from "./Negociacao.js";

export class Negociacoes{
    private negociacoes:Negociacao[] = [];

    adicionaNegociacao(negociacao: Negociacao): void{
        this.negociacoes = [...this.negociacoes, negociacao];
    }

    listaNegociacoes(): readonly Negociacao[]{
        return this.negociacoes; 
    }

    ultimaNegociacao(): Negociacao{
      return  this.negociacoes.slice(-1).pop() as Negociacao;
    }
}
