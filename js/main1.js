//jQuery('document').ready(function(){
$('document').ready(()=>{
    //run your code
    // alert("Hello, World");

    //selector - element(p, li, img, h1), id, classes, multiple, css3,

    //element selector
    // $('p').hide();

    // $('img').hide();

    //id selector
    // $('#list').hide();

    //class selector
    // $('.para').hide();

    //multiple selectors
    // $('img, .para, #list, p').hide()

    //css3
    // $('#list li:first-child').hide();


    //Effects - hide(), show(), toggle(),
    //Events - click(), dblclick(), keypress, mouseover, mouseout, hover(mouseenter, mouseleave),

    $('.btn1').click(function(){

        $('p').hide(); //toggle()

    });

    // $('.btn2').on('click', () => {
    //     $('p').show();
    // });
    $('.btn2').click(() => {
        $('p').show();
    });

    $('.btn3').click(() => {
        $('p').toggle(2000);
    });

    $('.btn4').click(() => {
        $('p').fadeIn();
    });

    $('.btn5').click(() => {
        $('p').fadeOut();
    });

    $('.btn6').click(() => {
        $('p').fadeToggle();
    });

    //parameter - fast, slow, milliseconds (1000 - 1s)

    //Animations
    //this 
    $('.box1').on('mouseover', function() { //animations DONT like arrow functions
        // $(this).animate({'top':'300px', 'width':"200px"}, 2000);
        $(this).animate({'top':'300px'}, 2000);
        $(this).animate({'top':'0'}, 2000);
    });




});

