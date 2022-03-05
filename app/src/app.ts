import { NegociacaoController } from './controllers/NegociacaoController.js';

const controller = new NegociacaoController();

const form = document.querySelector('.form')  as HTMLInputElement | null;

if(form){
    form.addEventListener('submit', event => {
        controller.adiciona();
        event.preventDefault();
    });
}else{
    throw Error('Não foi possível incializar a aplicação. Verifique se o form existe no DOM.');
}

const botaoImporta = document.querySelector("#botao-importa");
if(botaoImporta){
    botaoImporta.addEventListener('click', () => {
        controller.importarDados();
    });
}else{
    throw Error('Botão importa não foi encontrado');
}