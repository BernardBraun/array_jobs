"use strict";
exports.__esModule = true;
var Job = /** @class */ (function () {
    function Job(id, descricao, data_limite, horas) {
        this.id = 0;
        this.id = id;
        this.descricao = descricao;
        this.data_limite = data_limite;
        this.horas = horas;
    }
    return Job;
}());
exports.Job = Job;
var job1 = new Job(1, 'Realizar o backup do servidor Windows.', '2020-03-12 16:00:00', '8 horas');
var job2 = new Job(2, 'Formatar o servidor Windows.', '2021-03-15 17:00:00', '8 horas');
var job3 = new Job(3, 'Configurar ActiveDirectory no servidor formatado.', '2020-03-16 12:00:00', '4 horas');
var job4 = new Job(4, 'Configurar FileServer no servidor formatado.', '2020-03-17 10:00:00', '6 horas');
var job5 = new Job(5, 'Configurar MailServer no servidor formatado.', '2020-03-17:00:00', '6 horas');
var job6 = new Job(6, 'Instalar anti-vírus no servidor.', '2020-03-18 12:00:00', '4 horas');
var job7 = new Job(7, 'Realizar os testes finais antes do envio para o cliente.', '2020-03-18 17:00:00', '4 horas');
var job8 = new Job(8, 'Efetuar a entrega e instalação do servidor no cliente', '2020-03-19 11:00:00', '3 horas');
var listaDeJobs = [job1, job2, job3, job4, job5, job6, job7, job8];
