/* Código simplório, apenas para fornecer o serviço para a aplicação */
var api = {}


api.dados = function(req, res) {

    res.json([
        { ticker:'ITUB4', montante: 200.5, vezes: 2 },
        { ticker:'BBDC4', montante: 100.2, vezes: 5 },
        { ticker:'PRIO3', montante: 50.5, vezes: 1 },
        { ticker:'DISB34', montante: 70.5, vezes: 2 }
    ]);
    
};


module.exports = api;