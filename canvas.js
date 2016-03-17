$(document).ready(function () {
    var isDraw = false;
    var dot = 5;
    var color = 'rgb(0, 0, 0)';
    
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');    
    context.fillStyle = 'rgb(255, 255, 255)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    $('#color').bind('change', function () {
        color = $('#color').val();
    });

    $('#canvas').mousedown(function (e) {
        if (e.button === 0) {
            isDraw = true;
            draw(e);
        }
    });
    $('#canvas').mouseup(function (e) {
        isDraw = false;
    });
    $('#canvas').mousemove(function (e) {
        if (isDraw)
            draw(e);
    });
    function draw(e)
    {
        context.fillStyle = color;
        context.fillRect(e.offsetX, e.offsetY, dot, dot);
    }
});