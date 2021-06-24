var somaGastos = 0;



function somadorDeGastos(){


    var form = document.getElementById("formulario");
    var campo = document.getElementById("campo");

    var gastos = document.querySelectorAll(".input-padrao");
    console.log(gastos);

    for(var i = 0; i < gastos.length; i++){
        if(gastos[i].value != ""){
            somaGastos += parseInt(gastos[i].value);
            console.log(gastos[i].value);
        }
        else{
            somaGastos += 0;
        }
    }

    form.addEventListener('submit', function(e) {
        
     // impede o envio do form
    e.preventDefault();
    } );

     document.gastos.valorgasto.value = somaGastos; 
    }

