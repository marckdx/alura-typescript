import { IImprimivel } from "../interfaces/Index.js";

export function ImprimirUtil(...objetos: Array<IImprimivel>){
    for(let objeto of objetos){
        console.log(objeto.paraTexto());
    }
}