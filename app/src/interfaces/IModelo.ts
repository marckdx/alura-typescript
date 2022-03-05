import { IImprimivel, IComparavel } from "./Index.js";

export interface IModelo<T> extends IImprimivel, IComparavel<T>
{

}