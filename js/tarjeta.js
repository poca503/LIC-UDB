window.onload = function empezar(){
var pase = localStorage.getItem("login");
var dato = JSON.parse(localStorage.getItem("dato"));
var id = localStorage.getItem("id");
if (pase=="simon") {

		if (dato[id]==0) {
				window.location="primera.html";


		}
		else{

var dataEMA= JSON.parse(localStorage.getItem("email"));
var dataP= JSON.parse(localStorage.getItem("pass"));
var dataN= JSON.parse(localStorage.getItem("nombre"));
var dataA= JSON.parse(localStorage.getItem("apellido"));
var dataDUI= JSON.parse(localStorage.getItem("dui"));
var dataNIT= JSON.parse(localStorage.getItem("nit"));
var dataTEL= JSON.parse(localStorage.getItem("tel"));
var dataDA= JSON.parse(localStorage.getItem("dato"));
var dataPR= JSON.parse(localStorage.getItem("pre"));
var dataRE= JSON.parse(localStorage.getItem("pre1"));
var dataCU= JSON.parse(localStorage.getItem("cuentas"));
var dataTA= JSON.parse(localStorage.getItem("tarjeta"));
var conteoCU= JSON.parse(localStorage.getItem("contcu"));
var conteoTA= JSON.parse(localStorage.getItem("contta"));
var dataDA= JSON.parse(localStorage.getItem("dato"));
var conCU= JSON.parse(localStorage.getItem("conteo"));
var conteo = JSON.parse(localStorage.getItem("contta"));

			if (dataTA==null) {

				document.getElementById("tabla").insertAdjacentHTML("beforeBegin","<H1>No hay tarjetas</H1>");

			}
			else{
				var monto = []; 
		  	
		  	var yyy = parseInt(conteo[id]);
		  	var yy = (parseInt(conteo[id])+1);
		  	var xx=0;
		  	var suma= 0;
		for (var i = 1; i<yy ; i++) {
			xx= parseInt(dataTA[id][i][0]);
			suma= suma+xx;

		}	

			var total= (suma);
			

			document.getElementById("efe").innerHTML=" $ " + total;

			for (var j = 1; j<yy ; j++) {
			
			  
			 
			document.getElementById("tabla").insertAdjacentHTML("beforeBegin","<td>"+dataTA[id][j][2]+"</td><td>"+dataTA[id][j][1]+"</td><td>$"+dataTA[id][j][0]+"</td><td>"+dataTA[id][j][3]+"</td><td>"+dataTA[id][j][4]+"</td>");

		}
			
			
			


		}

			}
			
}
else{
	alert("ACCESO DENEGADO");
	window.location="login.html";
}





};
function nueva(){
	var idxd=localStorage.getItem("id");
	
	var saldo=0;
	var banco=document.getElementById("banco").value;
	var cuentas=document.getElementById("cuenta").value;



var u = localStorage.getItem("users");

var x = parseInt(u);
if (banco==""|| cuentas=="") {

	alert("Falta un dato, favor revise los campos");
}
else{
var dataDA= JSON.parse(localStorage.getItem("dato"));
var dataTA= JSON.parse(localStorage.getItem("tarjeta"));
var conCU= JSON.parse(localStorage.getItem("conteo"));
var conteo = JSON.parse(localStorage.getItem("contta"));



var conteoc=[];
 var datosG = [];
  var conG = [];


var cuentasG = [[[]]];



var j =parseInt(1); 

if (dataDA==null) {

}
else{




		for (;u>j;) {
			 cuentasG[j]=dataTA[j];
			 conteoc[j]=conteo[j];
			 j++
		} 
		 


}
		var y =((parseInt(conteo[idxd]))+1);
		
	conteoc[idxd] = y
	conteo[idxd] = y

	var saldo=0;
	var banco=document.getElementById("banco").value;
	var cuentas=document.getElementById("cuenta").value;
	var inter=document.getElementById("inter").value;
	var fecha=document.getElementById("fecha").value;
	cuentasG[idxd][y] = [saldo,cuentas,banco,inter,fecha] ;

 

 	


  localStorage.setItem("tarjeta", JSON.stringify(cuentasG));
  localStorage.setItem("contta", JSON.stringify(conteo));

  j=1;


  window.location="tarjetas.html";

  alert("Tarjeta agregada co exito");

} }
function cuentav(){

	var cuenta=document.getElementById("cuenta").value;
		cuentat= /^[0-9]{11}$/;

   if (cuentat.test(cuenta)) {
    	document.getElementById("cuenta").style="box-shadow: 2px -2px 153px 5px ";
    	document.getElementById("cuenta").style="border: solid 5px green ";
   } else {
      document.getElementById("cuenta").style="box-shadow: 2px -2px 153px 5px rgba(255,0,0,1);";
   }
}
function montov(){

	var monto=document.getElementById("monto").value;
		

   if (monto=="") {
   	document.getElementById("monto").style="box-shadow: 2px -2px 153px 5px rgba(255,0,0,1);";
    	
   } else {
      document.getElementById("monto").style="box-shadow: 2px -2px 153px 5px ";
    	document.getElementById("monto").style="border: solid 5px green ";
   }
}
function bancov(){

	var banco=document.getElementById("banco").value;

   if (banco=="") {
    	document.getElementById("banco").style="box-shadow: 2px -2px 153px 5px rgba(255,0,0,1);";
    	
   } else {
      document.getElementById("banco").style="box-shadow: 2px -2px 153px 5px ";
    	document.getElementById("banco").style="border: solid 5px green ";
   }
}



function saldov(){

	var saldo=document.getElementById("saldo").value;

   if (saldo=="") {
    	document.getElementById("saldo").style="box-shadow: 2px -2px 153px 5px rgba(255,0,0,1);";
   } else {
   	document.getElementById("saldo").style="box-shadow: 2px -2px 153px 5px ";
    	document.getElementById("saldo").style="border: solid 5px green ";
      
   }
   }
function salir(){

	localStorage.setItem("login", "nel");
	localStorage.setItem("id", 0);

	window.location="login.html";
	
	
}