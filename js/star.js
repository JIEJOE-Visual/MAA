

var cols = ['#f5d76e', '#f7ca18', '#f4d03f', '#ececec', '#ecf0f1', '#a2ded0'];
var stars = 250;

for (var i = 0; i <= stars; i++) {

    var size = Math.random() * 8;
    var color = cols[parseInt(Math.random() * 4)];
    $('#storyAboutUs').prepend('<span style=" width: ' + size + 'px; height: ' + size + 'px; top: ' + Math.random() * 100 + '%; left: ' + Math.random() * 100 + '%; background: ' + color + '; box-shadow: 0 0 ' + Math.random() * 10 + 'px' + color + ';"></span>');
    
    var sizewideback = Math.random() * 5;
    var colorwideback = cols[parseInt(Math.random() * 4)];
    $('#wideback').prepend('<span style=" width: ' + sizewideback + 'px; height: ' + sizewideback + 'px; top: ' + Math.random() * 100 + '%; left: ' + Math.random() * 100 + '%; background: ' + colorwideback+ '; box-shadow: 0 0 ' + Math.random() * 10 + 'px' + colorwideback + ';"></span>');
    
 };
setTimeout(function () {
    $('#storyAboutUs span').each(function() {
        $(this).css('top', Math.random() * 100 + '%').css('left', Math.random() * 100 + '%');
    });
    $('#wideback span').each(function() {
        $(this).css('top', Math.random() * 100 + '%').css('left', Math.random() * 100 + '%');
    });

}, 1);

setInterval(function() {
    $('#storyAboutUs span').each(function() {
        $(this).css('top', Math.random() * 100 + '%').css('left', Math.random() * 100 + '%');
    });
    $('#wideback span').each(function() {
        $(this).css('top', Math.random() * 100 + '%').css('left', Math.random() * 100 + '%');
    });
}, 100000);