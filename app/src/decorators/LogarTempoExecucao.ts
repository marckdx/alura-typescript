export function LogarTempoExecucao()
{
    return function(
        target: any, 
        property: string, 
        descriptor: PropertyDescriptor){
            return descriptor;
        }
}