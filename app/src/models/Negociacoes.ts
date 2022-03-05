import { Negociacao } from "./Index.js";
import { IModelo } from "../interfaces/Index";

export class Negociacoes implements IModelo<Negociacoes> {
    
    private negociacoes:Negociacao[] = [];

    public adicionaNegociacao(negociacao: Negociacao): void{
        this.negociacoes = [...this.negociacoes, negociacao];
    }

    public listaNegociacoes(): readonly Negociacao[]{
        return this.negociacoes; 
    }

    public ultimaNegociacao(): Negociacao{
      return  this.negociacoes.slice(-1).pop() as Negociacao;
    }

    public adicionaNegociacoes(negociacoesParametro: Array<Negociacao>){
        this.negociacoes = [... this.negociacoes, ...negociacoesParametro];
    }

    public paraTexto(): string{
        return JSON.stringify(this.negociacoes, null, 2);
    }

    public isEquals(negociacoes: Negociacoes): boolean {
        return JSON.stringify(this.listaNegociacoes()) === JSON.stringify(negociacoes.listaNegociacoes());
    }
}
