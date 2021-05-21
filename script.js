
$(function(){

    var vez = 1;
    var vencedor = "";
    var a, b, c;
    var contador = 0;
    var pontosX = 0;
    var pontosO = 0;
    var ativado = true;

    window.onbeforeunload = function() {
        return "Dude, are you sure you want to leave? Think of the kittens!";
    }

    $('.casa').click(function(){

        contador++;
        // $("#resultado").html(contador);
        
        switch(this.id){
            case 'casa1':
                a = 1;
            case 'casa2':
                b = 2;
            case 'casa3':
                c = 3;
            case 'casa4':
                a = 4;
            case 'casa5':
                b = 5;
            case 'casa6':
                c = 6;
            case 'casa7':
                a = 7;
            case 'casa8':
                b = 8;
            case 'casa9':
                c = 9;
        }
        casasIguais(a,b,c)
    });

    function casasIguais(a, b, c){
        // a = 1;
        // b = 2;
        // c = 3;

        var bgA = $("#casa"+a).css("background-image");
        var bgB = $("#casa"+b).css("background-image");
        var bgC = $("#casa"+c).css("background-image");

        if( (bgA == bgB) && (bgB == bgC) && (bgA != "none" && bgA != "")){
            if(bgA.indexOf("1.png") >= 0)
                vencedor = "1";
            else
                vencedor = "2";
            return true;
        }
        else{
            return false;
        }
    }

    function verificarFimDeJogo(){
        if( casasIguais(1, 2, 3) || casasIguais(4, 5, 6) || casasIguais(7, 8, 9) ||
            casasIguais(1, 4, 7) || casasIguais(2, 5, 8) || casasIguais(3, 6, 9) ||
            casasIguais(1, 5, 9) || casasIguais(3, 5, 7)
            ){
                if(vencedor == 1){
                    pontosX++;
                    $('#x').html(pontosX);
                    $("#reiniciar").hide();
                    
                    $("#resultado").html("<p>X venceu! </p>");
                    $("#continuar").show();
            
                    $("#resultado").css({
                        "font-size": "100px", 
                        "color" : "white"
                    });
                    ativado = false;
                    // $(".casa").off("click");
                
                }
                else{
                    pontosO++;
                    $('#o').html(pontosO);

                    $("#resultado").html("<p>0 venceu! </p>");
                    $("#continuar").show();

                    $("#resultado").css({
                        "font-size": "100px", 
                        "color" : "white"
                    });
                    ativado = false;
                    // $(".casa").off("click");
                }

        }
        else if(contador == 9){
            $("#resultado").html("<p>Empate! </p>");
            $("#continuar").show();
                    $("#resultado").css({
                        "font-size": "100px", 
                        "color" : "white"
                    });
            ativado = false;
        }
    }

    $(".casa").click(function(){
        
        if(ativado){
            var bg = $(this).css("background-image");
            if(bg == "none" || bg == "")
            {           
                var fig = "url(" + vez.toString() + ".png)";
                $(this).css("background", fig);
                vez = (vez == 1? 2:1);  
                verificarFimDeJogo();
            }
        }
    });

    $("#continuar").click(function(){
        $(this).hide();
        $("#reiniciar").show();
        $(".casa").css("background", "none");
        $("#resultado").html("");   
        contador = 0;
        ativado = true;
    });

    $("#reiniciar").click(function(){
        $(".casa").css("background", "none");
        $("#resultado").html("");   
        contador = 0;
    });
});

