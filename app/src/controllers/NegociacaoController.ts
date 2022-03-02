import { LogarTempoExecucao } from "../decorators/LogarTempoExecucao.js";
import { DiasDaSemana } from "../enums/DiasDaSemana.js";
import { Negociacao } from "../models/Negociacao.js";
import { Negociacoes } from "../models/Negociacoes.js";
import { MensagemView } from "../views/MensagemView.js";
import { NegociacoesView } from "../views/NegociacoesView.js";

export class NegociacaoController{
    private inputTicker: HTMLInputElement;
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;

    private negociacoes: Negociacoes;
    private negociacoesView: NegociacoesView;
    private mensagemView: MensagemView;

    constructor(){
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesView');

        this.inputTicker = document.querySelector('#ticker') as HTMLInputElement;
        this.inputData = document.querySelector('#data') as HTMLInputElement;
        this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
        this.inputValor = document.querySelector('#valor') as HTMLInputElement;

        this.negociacoesView.update(this.negociacoes);
        this.inputData.value = new Date().toISOString().substring(0,10);
        this.mensagemView = new MensagemView('#mensagemView');
    }

    @LogarTempoExecucao()
    public adiciona(): void{
        const negociacao = Negociacao.criaDe(
            this.inputTicker.value,
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value,
        );
           
        if(!this.diaUtil(negociacao.data))
        {
            this.mensagemView.update(`Apenas negociações em dias úteis são aceitas`);
            return;
        }

        this.negociacoes.adicionaNegociacao(negociacao);
        this.limparFormulario();
        this.atualizaView();
    }

    /**
     * Verifica se a data provida representa um dia útil
     * @param data 
     * @returns 
     */
    private diaUtil(data: Date): boolean{
        return data.getDay() > DiasDaSemana.DOMINGO 
            && data.getDay() < DiasDaSemana.SABADO;
    }

    private limparFormulario(): void{
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputTicker.value = "";
        this.inputValor.value = "";
        this.inputTicker.focus();
    }

    private atualizaView(): void{
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update(`Negociação de ${this.negociacoes.ultimaNegociacao().ticker} adicionada com sucesso`);
    }
}