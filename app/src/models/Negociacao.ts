import { IModelo } from "../interfaces/Index";

export class Negociacao implements IModelo<Negociacao>
{
    constructor(
        public readonly ticker: string, 
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number
    ) {}


    get data(): Date{
        return new Date(this._data.getTime());
    }

    get volume(): number{
        return this.quantidade * this.valor;
    }

    public static criaDe(tickerString: string, dataString: string, quantidadeString: string, valorString: string): Negociacao{
        const data = new Date(dataString.replace(/-/g, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        const ticker = tickerString;

        return new Negociacao(ticker, data, quantidade, valor);
    }

    public paraTexto(): string{
        return`
        Ticker: ${this.ticker}
        Data: ${this.data}
        Quantidade: ${this.quantidade}
        Valor: ${this.valor}`;
    }

    public isEquals(negociacao: Negociacao): boolean{
        return this.data.getDate() == negociacao.data.getDate() &&
            this.data.getMonth() == negociacao.data.getMonth() &&
            this.data.getFullYear() == negociacao.data.getFullYear();
    }
}