import { INegociacaoDia } from "../interfaces/Index.js";
import { Negociacao } from "../models/Index.js";

export class NegociacoesService{
    public obterNegociacoesDoDia(): Promise<Array<Negociacao>>{
        return fetch('http://localhost:8080/dados')
        .then(res => res.json())
        .then((dados: Array<INegociacaoDia>) => {
           return dados.map(dadosDeHoje => {
                return new Negociacao(
                    dadosDeHoje.ticker, new Date(), dadosDeHoje.vezes, dadosDeHoje.montante
                );
            })
        })
    }
}