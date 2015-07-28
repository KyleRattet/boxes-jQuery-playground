$( document ).ready(function() {

    $('#secretBox').css({
      'background-color': 'white',
      "color" : "black"
    });

    $('#secretBox').append('<h1>secret box!</h1>');

    $('#row1').children().removeClass().attr('class','box boxType3');

    $('#row4').children().last().hide();

    $('.boxType1').css("background-color", "white");

    $('#row2 div:lt(2)').css('visibility', 'hidden');

    $('.box').not("#secretBox").css('width', '2px');
});
