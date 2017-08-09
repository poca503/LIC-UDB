var presupuesto = prompt('Ingrese el presupesto anual','');
var derma,trau,pedi;
if(isNaN(presupuesto)){
    derma =0;
    trau= 0;
    pedi = 0;
    alert("El monto debe ser numérico!");
    
} else {
    derma = presupuesto * 0.40;
    trau = presupuesto * 0.35;
    pedi = presupuesto * 0.25;
}
document.write("<div class='money'><h1>Ginecología:</h1><p> $ " + derma.toFixed(2) + "</p></div>");
document.write("<div class='money'><h1>Traumatología:</h1><p> $ " + trau.toFixed(2) + "</p></div>");
document.write("<div class='money'><h1>Pediatría:</h1><p> $ " + pedi.toFixed(2) + "</p></div>");