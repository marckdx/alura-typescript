import { Negociacoes } from "../models/Negociacoes.js";
import { View } from "./View.js";
import { ScapeDecorator } from '../decorators/Index.js';

export class NegociacoesView extends View<Negociacoes>{

    @ScapeDecorator
    protected template(model: Negociacoes) : string {
        return `
            <table class="table table-hover table-bordered thead-DARK">
                <thead>
                    <tr>
                        <th>TICKER</th>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>
                <tbody>
                    ${model.listaNegociacoes().map(negociacao => {
                        return `
                            <tr>
                                <td>${negociacao.ticker}</td>
                                <td>${this.formatar(negociacao.data)}</td>
                                <td>${negociacao.quantidade}</td>
                                <td>${negociacao.valor}</td>
                            </tr>
                        `;
                    })
                    .join('')}
                </tbody>
            </table>
        `;
    }

    private formatar(data: Date): string{
        return new Intl.DateTimeFormat().format(data);
    }
}