var socket = io();
var label = $('#lblNuevoTicket');


socket.on('connect', function() {
    console.log('conectado al servidor');
});

socket.on('disconnect', function() {
    console.log("servidor caido");
});

socket.on('getUltimoTicket', function(data) {
    label.text(data.actual);
});

$('button').on('click', function() {

    socket.emit('siguienteTicket', null, function(ticket) {
        label.text(ticket);
    })


});