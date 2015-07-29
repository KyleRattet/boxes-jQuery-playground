$( document ).ready(function() {
 //exercise 2
    $('#secretBox').css({
      'background-color': 'white',
      "color" : "black"
    });

    // $('#secretBox').append('<h1>secret box!</h1>');

    // $('#row1').children().removeClass().attr('class','box boxType3');

    // $('#row4').children().last().hide();

    // $('.boxType1').css("background-color", "white");

    // $('#row2 div:lt(2)').css('visibility', 'hidden');

    // $('.box').not("#secretBox").css('width', '2px');
   //exercise 3
    $('#container').on('click', function  () {
       console.log(event.pageX, event.pageY);
    });

    $('.boxType1').html('<a href="http://www.galvanize.com/">Galvanize</a>').on('click', function  () {
        event.preventDefault();
        alert("You can never leave!");
    });

    // $('.box').on('click', function () {
    //   $(this).append('<img src="https://socialsteve.files.wordpress.com/2012/07/social-media-puppy.jpg">').on('click', function  () {
    //     $('img').hide();
    //   });
    // });

    // $('.box').on('click', function() {
    //   $(this).css('background', 'white')
    //   $('#container').css('background', 'black')
    //     $('#container').on('click', function  () {
    //       $('#container').css('background', 'limegreen')
    //     });
    // });

    $('#container').on('click', function () {
      if (clicked container but not box) {
        $(this).css('background', 'lime')
        //code
      } else {
    })

    $('.box').on('click', function () {
      $(this).css('background', 'white')
      $('#container').css("background", 'black')
    })


});
