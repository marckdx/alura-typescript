export function DomInjector(selector: string)
{
    return function(
        target: any, 
        propertyKey: string){
              let elemento: HTMLElement;
              /**
                 * Getter que irá sobrescrever os Getters dos atributos que contém
                 * o DomInjector como decorator.
                 * @returns 
                 */
               const getter = function(){
                    if(!elemento){
                        elemento =<HTMLElement>document.querySelector(selector);
                    }
                    return elemento;
               }

               Object.defineProperty(
                    target, 
                    propertyKey, 
                    {
                        get: getter
                    }
               );
        }
}