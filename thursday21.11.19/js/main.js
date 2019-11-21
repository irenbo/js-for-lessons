// Набор функций JavaScript, фокусирующийся на взаимодействии JavaScript и HTML.

// Ключевым моментом в использовании данной библиотеки являетя функция jQuery.
jQuery(document).ready(function(){/* здесь код функции.*/});

// или сокращенный вид функции
jQuery(function(){
    // здесь код функции

    // выборка элементов для дальнейших манипуляций
    // jQuery('*') - выборка всех элементов страницы
    // $("Element") - выборка по имени тега
    // $("#id") - выбор по идентификатору
    // $(".class") - по имени класса
    // $("ul>li") - по css селектору
    // $(".border, #btn, h2") - несколько селекторов

    jQuery('#table tr:even').css('background-color', 'orange');
    jQuery('#table tr:odd').css('background-color', 'yellow');

    // Работа с выборкой
    jQuery("#cards")
        .last().css("color", "red")
        .end()
        .first().css("color", "blue");

    jQuery("#cards div").each((index, elem)=>{
        console.log(index + ". " + elem.dataset.present);
    });

    // Фильтрация выборки
    // .find() - ищет внутри по селектору
    // not(селектор)
    // filter(селектор)
    // jQuery("#cards div").filter(()=>{
    //     return jQuery("#cards div").dataset.present !== 'cat';
    // }).css('background-color', 'green');

    jQuery("#cards>div")
        .filter((index, elem)=>elem.dataset.present === 'cat')
        .css('background-color', 'green');

    jQuery("#cards>div")
        .not((index, elem)=>elem.dataset.present === 'cat')
        .css('background-color', 'red');

    jQuery('nav li').has('ul').css('background-color', 'gray');

    jQuery('li').children('.submenu')
        .each(function(index, elem){
            console.log(elem.innerText)
        });


    // Атрибуты элементов
    jQuery("#table").attr("border", 1);
    console.log(jQuery("#table").attr("border"));
    jQuery("#table").removeAttr("border");

    // data атрибут
    jQuery("#cards div").each(function(){
           console.log($(this).data("present"));
        });


    // css стили
    // получение стилей
    console.log(jQuery('#cards').css('font-size'));
    jQuery('#cards').css('color', function(index, oldValue){
        if(oldValue ==='rgb(0, 0, 238)')
        {return 'red';}
        else
        {return 'green';}
    });

    jQuery('body').css({'color':'red', 'padding':'30px'});

    // работа с высотой и шириной
    console.log( jQuery('#cards').height());
    console.log( jQuery('#cards').width());
    jQuery('#cards').height(200);
    jQuery('#cards').width(700);

    jQuery('#cards div').first().addClass("black visible");
    jQuery('#cards div').first().hasClass("black");
    jQuery('#cards div').first().removeClass("black visible");
    jQuery('#cards div').first().toggleClass("visible");


    // Содержимое элементов
    jQuery('#cards div').each(function () {
        console.log($(this).html());
        console.log($(this).html("<span>Вас ждет подарок</span>"));
    });

    $('nav').html(function(index,oldValue){
        console.log("Старая разметка: " +oldValue);
        return oldValue+"<li> Новый параграф</li>";
    });

    jQuery('#cards div').each(function () {
        console.log($(this).text());
        console.log($(this).text("Вас ждет подарок"));
    });

    // $('nav').text(function(index,oldValue){
    //     console.log("Старая разметка: " +oldValue);
    //     return oldValue+"<li> Новый параграф</li>";
    // });

    $('#good').append('<div><img src="#"><p>Телефон</p></div>');
    $('#good').append('<div><img src="#"><p>Телефон</p></div>');

    var newList=$('<ul><li>Item1</li><li>Item2</li></ul>');
    console.log(newList.html());

    // replaceWith
    // remove([селектор])

    // работа с событиями
    jQuery("#accordion div").bind('click', function (event) {
        $(this).css('background-color', 'yellow');
    });

    // $('button').unbind();
    // $('button').one('click', function(e){});

    $('body').on('click', '#accordion div', function(e){
        console.log('Обработчик для кнопки: '+$(this).text());
    });

    // удаление обработчиков события click для кнопок
    $('body').off('click','button');
// удаление всех обработчиков для элементов внутри тега body
    $('body').off();

    $('#accordion h2').click(function(){
        $(this).siblings().toggle("fast");
    });

    // $('ul').show();
    // $('ul').hide();

    // $(this).slideUp();
    // $(this).slideDown();
    // $(this).slideToggle();

    // Эффекты прозрачности позволяют нам, плавно изменяя прозрачность элемента, скрыть его или отобразить.
    // Эффекты прозрачности реализованы с помощью методов fadeOut(), fadeIn(), fadeTo() и fadeToggle().

    $('#anim').click(function(){
        $('#ars').animate(
            {opacity: 0.25,
                'margin-left': '50',
                height: '200'},
            {
                duration: 1000,
                step: function(now, fx) {
                    $('body').append('<div>' + "kkk" + '</div>');
                },
                complete: function() {
                    alert('Анимация завершена');
                }
            });
    });
});



