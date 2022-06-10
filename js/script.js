//Ejecutando funciones
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

//Declarando variables
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");
var data = [];

//FUNCIONES
function anchoPage(){
	if (window.innerWidth > 850){
		caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";
	}else{
		caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";   
    }
}
anchoPage();


function iniciarSesion(){
	if (window.innerWidth > 850){
		formulario_login.style.display = "block";
		contenedor_login_register.style.left = "10px";
		formulario_register.style.display = "none";
		caja_trasera_register.style.opacity = "1";
		caja_trasera_login.style.opacity = "0";
	}else{
		formulario_login.style.display = "block";
		contenedor_login_register.style.left = "0px";
		formulario_register.style.display = "none";
		caja_trasera_register.style.display = "block";
		caja_trasera_login.style.display = "none";
	}
}

function register(){
	if (window.innerWidth > 850){
		formulario_register.style.display = "block";
		contenedor_login_register.style.left = "410px";
		formulario_login.style.display = "none";
		caja_trasera_register.style.opacity = "0";
		caja_trasera_login.style.opacity = "1";
	}else{
		formulario_register.style.display = "block";
		contenedor_login_register.style.left = "0px";
		formulario_login.style.display = "none";
		caja_trasera_register.style.display = "none";
		caja_trasera_login.style.display = "block";
		caja_trasera_login.style.opacity = "1";
	}
}

function validarUsuarios(){
	var usuario;
	usuario = document.getElementById("usuario").value;
	var arrayData = new Array();
    var archivoTxt = new XMLHttpRequest();
    var fileRuta = 'text/reporteUsuarios.txt';
    var dataSum = "";
    
    archivoTxt.open("GET",fileRuta,false);
    archivoTxt.send(null);
    var txt = archivoTxt.responseText;
    for (var i = 0 ; i < txt.length ; i++){
        arrayData.push(txt[i]);
    }
    arrayData.forEach(function(data){
        dataSum += (data);
    });
    
    var lines = dataSum.split("\n");
    var tmp;

    for(var index in lines){
        tmp = lines[index].trim().split(",");
        data.push({
            cedula 	: tmp[0],
            nombre 	: tmp[1],
            mail 	: tmp[2],
            usuario	: tmp[3],
            clave	: tmp[4],
			estado  : tmp[5]
        });
    }
    data.splice(data.length - 1, 1);         
    console.log(data);

    var incluyeUsuario;
	
	data.forEach(object =>{
    if(object.usuario == usuario && object.estado == "Activo"){
        incluyeUsuario = true;
		}
    });
	
	console.log(incluyeUsuario);
	
	return incluyeUsuario;
	
}

function validarClave(){
	var clave;
	clave = document.getElementById("clave").value;
	var arrayData = new Array();
    var archivoTxt = new XMLHttpRequest();
    var fileRuta = 'text/reporteUsuarios.txt';
    var dataSum = "";
    
    archivoTxt.open("GET",fileRuta,false);
    archivoTxt.send(null);
    var txt = archivoTxt.responseText;
    for (var i = 0 ; i < txt.length ; i++){
        arrayData.push(txt[i]);
    }
    arrayData.forEach(function(data){
        dataSum += (data);
    });
    
    var lines = dataSum.split("\n");
    var tmp;

    for(var index in lines){
        tmp = lines[index].trim().split(",");
        data.push({
            cedula 	: tmp[0],
            nombre 	: tmp[1],
            mail 	: tmp[2],
            usuario	: tmp[3],
            clave	: tmp[4],
			estado  : tmp[5]
        });
    }
    data.splice(data.length - 1, 1);         
    console.log(data);

    var incluyeClave;
	
	data.forEach(object =>{
    if(object.clave == clave && object.estado == "Activo"){
        incluyeClave = true;
		}
    });
	
	console.log(incluyeClave);
	
	return incluyeClave;
}

function Acceso(){
	var usuario = document.getElementById("usuario").value;
	var clave = document.getElementById("clave").value;
	if(validarUsuarios()==true && validarClave()==true || usuario == "admin" && clave == "admin"){	
		window.open("html/crud.html", "_self");
	}else{
		alert("Usuario o contraseña incorrecta");
		document.getElementById("usuario").value = "";
		document.getElementById("clave").value = "";
	}
}
