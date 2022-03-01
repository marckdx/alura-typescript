/**
 * Classe para abstração das Views do sistema
 */
export abstract class View<T>{
    protected elemento: HTMLElement;
    private escapar:boolean;

    constructor(seletor: string, escapar: boolean = false){
        const elemento = document.querySelector(seletor);
        if(elemento){
            this.elemento = elemento as HTMLInputElement;
        }else{
            throw Error(`Seletor "${seletor}" não pode ser encontrado, verifique.`);
        }
        this.escapar = escapar;
    }

    /**
     * Gera o template HTML com base no model
     * @param model 
     */
    protected abstract template(model: T): string;

    /**
     * Atualiza o elemento DOM com base no modelo
     * @param model 
     */
    public update(model: T): void{
        let template = this.template(model);
        if(this.escapar){
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }
}