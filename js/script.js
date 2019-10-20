function calcNum(num) {
    if (typeof gvisor == 'undefined') {
       document.calcform.visor.value = ''
    }
    document.calcform.visor.value = document.calcform.visor.value + num
    gvisor = 1
 }
 function calcOper(oper, valor1, valor2) {
     switch (oper){
         case "add":
             var valor = parseFloat(valor1) + parseFloat(valor2)
             break
         case "div":
             var valor = valor1 / valor2
             break
        case "mult":
            var valor = valor1 * valor2
            break
        case "sub":
            var valor = valor1 - valor2
            break   
        case "percent":
            var valor = valor1 % valor2
            break
        case "pi":
            var valor = 3.14
            break            
        
     }
     return (valor)
 } 


  function calcParse(oper){
     var valor = document.calcform.visor.value 
     delete gvisor

     if (typeof goper != 'undefined' && oper == 'res'){
         gvalor = calcOper(goper, gvalor,  valor)
         document.calcform.visor.value = gvalor
         delete oper
         delete gvalor
         return(0)
     }
     if (typeof gvalor != 'undefined'){
         gvalor = calcOper(goper, gvalor, valor)
         goper = operdocument.calcform.visor.value = gvalor
     } else {
         gvalor = valor
         goper = oper
     }


 }
 
 function clearNum() {
    document.calcform.visor.value = ''
    delete gvalor
    delete goper
    delete gvisor
 }


 function parseInput(input){
     //2 * 10% +  50 /  2

     //da  esqueda para a direita opere

    calculaPorcentagem(input);
    //2 * 0.1 + 50 / 2

    calculaMultDiv(input);
    //0.2 + 25

    calculaSomaSub(input);
    //25.2
 }