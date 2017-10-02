
function Login()
{ 
	var done=0; 
	var usuario=document.getElementById("user").value; 
	var password=document.getElementById("pass").value;  

	if (usuario=="test" && password=="test1") { 
		window.location="ewallet.html"; 
		} 

	if (usuario=="USUARIO2" && password=="CONTRASEÑA2") { 
		window.location="ewallet.html"; 
		} 
	if (usuario=="" && password=="") { 
		alert("escriba algun dato"); 
		} 
} 
function reg()
{ 
	var done=0; 
	var usuario=document.getElementById("user").value; 
	var password=document.getElementById("pass").value;  

	if (usuario=="test" && password=="test1") { 
		window.location="ewallet.html"; 
		} 

	if (usuario=="USUARIO2" && password=="CONTRASEÑA2") { 
		window.location="ewallet.html"; 
		} 
	if (usuario=="" && password=="") { 
		alert("escriba algun dato"); 
		} 
} 



function mail(){
var email=document.getElementById("email").value;
emai= /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

   if (emai.test(email)) {
    	document.getElementById("email").style="box-shadow: 2px -2px 153px 5px ";
    	document.getElementById("email").style="border: solid 5px green ";
   } else {
      document.getElementById("email").style="box-shadow: 2px -2px 153px 5px rgba(255,0,0,1);";
   }
}

function mostrar(){

	if (document.getElementById("pass").type=="password") {

		document.getElementById("pass").type="text";
	}
	else{
		document.getElementById("pass").type="password";
	}
}
function contra(){

	var pass=document.getElementById("pass").value;
		xd= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,30}/;

   if (xd.test(pass)) {
    	document.getElementById("pass").style="box-shadow: 2px -2px 153px 5px ";
    	document.getElementById("pass").style="border: solid 5px green ";
   } else {
      document.getElementById("pass").style="box-shadow: 2px -2px 153px 5px rgba(255,0,0,1);";
   }
}
function nomb(){
var nombre=document.getElementById("nombre").value;


   if (!nombre=="") {
    	document.getElementById("nombre").style="box-shadow: 2px -2px 153px 5px ";
    	document.getElementById("nombre").style="border: solid 5px green ";
   } else {
      document.getElementById("nombre").style="box-shadow: 2px -2px 153px 5px rgba(255,0,0,1);";
   }
}


function ape(){
var apellido=document.getElementById("apellido").value;

   if (!apellido=="") {
    	document.getElementById("apellido").style="box-shadow: 2px -2px 153px 5px ";
    	document.getElementById("apellido").style="border: solid 5px green ";
   } else {
      document.getElementById("apellido").style="box-shadow: 2px -2px 153px 5px rgba(255,0,0,1);";
   }
}


function duiv(){

	var dui=document.getElementById("dui").value;
		duii= /^\d{8}-\d{1}$/;

   if (duii.test(dui)) {
    	document.getElementById("dui").style="box-shadow: 2px -2px 153px 5px ";
    	document.getElementById("dui").style="border: solid 5px green ";
   } else {
      document.getElementById("dui").style="box-shadow: 2px -2px 153px 5px rgba(255,0,0,1);";
   }
}


function nitv(){

	var nit=document.getElementById("nit").value;
		nitt= /^[0-9]{4}-[0-9]{6}-[0-9]{3}-[0-9]{1}$/;

   if (nitt.test(nit)) {
    	document.getElementById("nit").style="box-shadow: 2px -2px 153px 5px ";
    	document.getElementById("nit").style="border: solid 5px green ";
   } else {
      document.getElementById("nit").style="box-shadow: 2px -2px 153px 5px rgba(255,0,0,1);";
   }
}


function telv(){

	var tel=document.getElementById("tel").value;
		tell= /^[0-9]{4}-[0-9]{4}$/;

   if (tell.test(tel)) {
    	document.getElementById("tel").style="box-shadow: 2px -2px 153px 5px ";
    	document.getElementById("tel").style="border: solid 5px green ";
   } else {
      document.getElementById("tel").style="box-shadow: 2px -2px 153px 5px rgba(255,0,0,1);";
   }
}



function guardar() {
	var pre1=document.getElementById("pre1").value;
	var pre2=document.getElementById("pre2").value;
	var pre3=document.getElementById("pre3").value;
	var direc=document.getElementById("calle").value;
	var fech=document.getElementById("fecha").value;

if (nombre =="" || email=="" || pass=="" || dui=="" || nit=="" || tel=="" || nombre=="" || apellido=="" || direc=="" || pre1=="" || pre2=="" || pre3=="" || fech=="") {

	alert("Falta un dato, favor revise los campos");
}
else{


  localStorage.setItem("email", email.value);
  localStorage.setItem("pass", pass.value);

  localStorage.setItem("dui", dui.value);
  localStorage.setItem("nit", nit.value);


  localStorage.setItem("tel", tel.value);
  localStorage.setItem("nombre", nombre.value);


  localStorage.setItem("apellido", apellido.value);

  localStorage.setItem("dato", 0);

}

  


}
function entrar(){

	var oc2=document.getElementById("pass").value;
	var oc1=document.getElementById("email").value;

	var entrar1 = localStorage.getItem("email");
	var entrar2 = localStorage.getItem("pass");

	if (oc1==entrar1 && oc2==entrar2) {

		window.location="ewallet.html"; 
		localStorage.setItem("login", "simon");
	}
	else{
		alert("DATOS INCORRECTOS");
	}
}