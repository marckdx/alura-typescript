import { LogarTempoExecucao, InspectDecorator, DomInjector } from "../decorators/Index.js";

import { DiasDaSemana } from "../enums/DiasDaSemana.js";
import { Negociacao } from "../models/Negociacao.js";
import { Negociacoes } from "../models/Negociacoes.js";
import { MensagemView } from "../views/MensagemView.js";
import { NegociacoesView } from "../views/NegociacoesView.js";

export class NegociacaoController{
    @DomInjector('#ticker')
    private inputTicker: HTMLInputElement;
    @DomInjector('#data')
    private inputData: HTMLInputElement;
    @DomInjector('#quantidade')
    private inputQuantidade: HTMLInputElement;
    @DomInjector('#valor')
    private inputValor: HTMLInputElement;
    //@DomInjector('#negociacoesView')
    private negociacoesView: NegociacoesView;
    //@DomInjector('#mensagemView')
    private mensagemView: MensagemView;
    
    private negociacoes: Negociacoes;

    constructor(){
        this.negociacoes = new Negociacoes();        
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.mensagemView = new MensagemView('#mensagemView');

        
        this.negociacoesView.update(this.negociacoes);
    }

    @LogarTempoExecucao()
    @InspectDecorator
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