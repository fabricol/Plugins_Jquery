$(document).ready(function() {
    $('#carrossel-imagens').slick({
        autoplay: true,
        autoplaySpeed: 500,
    });
    
    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle();
    })
    $('#telefone').mask('(00) 00000-0000', {
        placeholder:'(00) 00000-0000'             
    })
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true,
            },
            veiculoDeInteresse: {
                required: false,
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome'
        },
        submitHandler: function(form) {
            console.log(form);
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
    $('.lista-veiculos button').click(function(){
        const destino = $('#contato');
        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})