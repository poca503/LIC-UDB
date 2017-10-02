window.onload = function empezar(){
var pase = localStorage.getItem("login");
var dato = localStorage.getItem("dato");
if (pase=="simon") {

		if (dato==0) {
				window.location="primera.html";


		}

}
else{
	alert("ACCESO DENEGADO");
	window.location="login.html";
}

};