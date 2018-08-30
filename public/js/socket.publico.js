var socket = io();

var ticket1 = $('#lblTicket1');
var escritorio1 = $('#lblEscritorio1');
var ticket2 = $('#lblTicket2');
var escritorio2 = $('#lblEscritorio2');
var ticket3 = $('#lblTicket3');
var escritorio3 = $('#lblEscritorio3');
var ticket4 = $('#lblTicket4');
var escritorio4 = $('#lblEscritorio4');

var tickets = [ticket1, ticket2, ticket3, ticket4];
var escritorios = [escritorio1, escritorio2, escritorio3, escritorio4];

socket.on('getUltimoTicket', function(data) {
    actualizaHTML(data.ultimosCuatro);
});

socket.on('ultimosCuatro', function(data) {

    var audio = new Audio('audio/new-ticket.mp3');
    audio.play();
    actualizaHTML(data.ultimosCuatro);

});

function actualizaHTML(ultimosCuatro) {
    for (var i = 0; i < ultimosCuatro.length; i++) {
        tickets[i].text('Ticket ' + ultimosCuatro[i].numero);
        escritorios[i].text('Escritorio ' + ultimosCuatro[i].escritorio)
    }
}