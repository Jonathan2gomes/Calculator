function calcNum(num) {
    var valor = document.calcform.visor.value;
    document.calcform.visor.value = valor + num;
}
 
function clearNum() {
    document.calcform.visor.value = '';
    delete num;
}

function result(){
    var res = 0;
    res = document.calcform.visor.value;
    document.calcform.visor.value = '';
    document.calcform.visor.value = eval(res);
}
function conversor(){
    var res = 0;
    res = document.calcform.visor.value;
    document.calcform.visor.value = '';
    document.calcform.visor.value = -1*(res);
}
function percent(){
    var perc = 0;
    perc = (num/100);
    document.calcform.visor.value = perc;
}