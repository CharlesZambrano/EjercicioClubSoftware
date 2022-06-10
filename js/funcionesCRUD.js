// JavaScript Document
const fecha = new Date();
document.getElementById("fecha").innerHTML = fecha;

var data_json = [];
var Fila = null;

function leerTXT(){
    var arrayData = new Array();
    var archivoTxt = new XMLHttpRequest();
    var fileRuta = '../text/reporteUsuarios.txt';
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
        data_json.push({
            cedula 	: tmp[0],
            nombre 	: tmp[1],
            mail 	: tmp[2],
            usuario	: tmp[3],
            clave	: tmp[4],
			estado  : tmp[5]
        });
    }
    console.log(data_json);
    data_json.splice(data_json.length - 1, 1);         
    console.log(data_json); 
	
    //Imprimir arreglo 
    data_json.forEach(object =>{
        document.getElementById("tabla").innerHTML += '<tbody><td>'	
			+ object.cedula  + '</td><td>'		
			+ object.nombre	 + '</td><td>'		
			+ object.mail	 + '</td><td>'		
			+ object.usuario + '</td><td>'		
			+ object.clave	 + '</td><td>'
			+ object.estado  + '</td><td>'
			+ '<a href="#editModal" onClick="Editarr(this)" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Editar">&#xE254;</i></a>' 
			+ '<a href="#deleteModal" onClick="Borrarr(this)" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Borrar">&#xE872;</i></a>' 
			+ '</td></tbody>';
        });
}
leerTXT();

function agregarUsuarios(){
   function Usuario(cedula,nombre,mail,usuario,clave,estado){
	   this.cedula=cedula;
	   this.nombre=nombre;
	   this.mail=mail;
	   this.usuario=usuario;
	   this.clave=clave;
	   this.estado=estado;
   }
	
	var cedulaCapturar = document.getElementById("ced1").value;
	var nombreCapturar = document.getElementById("nom1").value;
	var mailCapturar = document.getElementById("mail1").value;
	var usuarioCapturar = document.getElementById("usu1").value;
	var claveCapturar = document.getElementById("pass1").value;
	var estadoCapturar = document.getElementById("estado1").value;
	
	var nuevoReporte = new Usuario(cedulaCapturar,nombreCapturar,mailCapturar,usuarioCapturar,claveCapturar,estadoCapturar);
	
	console.log(nuevoReporte);
	agregar(nuevoReporte);
	Vaciar();	
}

function agregar(nuevoReporte){
	data_json.push(nuevoReporte);
	console.log(data_json);
	
	document.getElementById("tabla").innerHTML += '<tbody><td>'	
			+ nuevoReporte.cedula  		+ '</td><td>'		
			+ nuevoReporte.nombre	 	+ '</td><td>'		
			+ nuevoReporte.mail	 		+ '</td><td>'		
			+ nuevoReporte.usuario 		+ '</td><td>'		
			+ nuevoReporte.clave	 	+ '</td><td>'
			+ nuevoReporte.estado 		+ '</td><td>'
			+ '<p style="font-size: 13px; text-align: center;"> Cargar datos para funciones de Editado y Borrado </p>'
			+ '</td></tbody>';
}

function Editarr(td) {
    Fila = td.parentElement.parentElement;
    document.getElementById("ced2").value = Fila.cells[0].innerHTML;
    document.getElementById("nom2").value = Fila.cells[1].innerHTML;
    document.getElementById("mail2").value = Fila.cells[2].innerHTML;
    document.getElementById("usu2").value = Fila.cells[3].innerHTML;
    document.getElementById("pass3").value = Fila.cells[4].innerHTML;
	document.getElementById("estado2").value = Fila.cells[5].innerHTML;
}

function Borrarr(td) {
    Fila = td.parentElement.parentElement;
	Fila.cells[5].innerHTML = ("Inactivo");
    document.getElementById("ced3").value = Fila.cells[0].innerHTML;
    document.getElementById("nom3").value = Fila.cells[1].innerHTML;
    document.getElementById("mail3").value = Fila.cells[2].innerHTML;
    document.getElementById("usu3").value = Fila.cells[3].innerHTML;
    document.getElementById("pass5").value = Fila.cells[4].innerHTML;
	document.getElementById("estado3").value = Fila.cells[5].innerHTML;
}

function Actualizar(){
	Fila.cells[0].innerHTML = document.getElementById("ced2").value;
	Fila.cells[1].innerHTML = document.getElementById("nom2").value;
	Fila.cells[2].innerHTML = document.getElementById("mail2").value;
	Fila.cells[3].innerHTML = document.getElementById("usu2").value;
	Fila.cells[4].innerHTML = document.getElementById("pass3").value; 
	Fila.cells[5].innerHTML = document.getElementById("estado2").value;
	
	data_json.forEach(object =>{
    if(object.cedula == Fila.cells[0].innerText){
        object.cedula 	= Fila.cells[0].innerText
		object.nombre 	= Fila.cells[1].innerText
		object.mail 	= Fila.cells[2].innerText
		object.usuario 	= Fila.cells[3].innerText
		object.clave 	= Fila.cells[4].innerText
		object.estado 	= Fila.cells[5].innerText
		}
    });
	
	document.getElementById("ced2").focus();
	alert("Cargar datos para guardar modificaciones");
    console.log(data_json);
}

function BorrarLogico() {
    Fila.cells[0].innerHTML = document.getElementById("ced3").value;
	Fila.cells[1].innerHTML = document.getElementById("nom3").value;
	Fila.cells[2].innerHTML = document.getElementById("mail3").value;
	Fila.cells[3].innerHTML = document.getElementById("usu3").value;
	Fila.cells[4].innerHTML = document.getElementById("pass5").value; 
	Fila.cells[5].innerHTML = document.getElementById("estado3").value;
	
	data_json.forEach(object =>{
    if(object.cedula == Fila.cells[0].innerText){
        object.cedula 	= Fila.cells[0].innerText
		object.nombre 	= Fila.cells[1].innerText
		object.mail 	= Fila.cells[2].innerText
		object.usuario 	= Fila.cells[3].innerText
		object.clave 	= Fila.cells[4].innerText
		object.estado 	= Fila.cells[5].innerText
		}
    });
	
	document.getElementById("ced3").focus();
	alert("Cargar datos para guardar usuarios borrados");
    console.log(data_json);
}


function Vaciar(){
	document.getElementById("ced1").value 		= ""
	document.getElementById("nom1").value 		= ""
	document.getElementById("mail1").value 		= ""
	document.getElementById("usu1").value 		= ""
	document.getElementById("pass1").value 		= ""
	document.getElementById("estado1").value    = "Activo"
	Fila = null
}

function descargar(nombre, texto) {
  const element = document.createElement("a")
  element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(texto))
  element.setAttribute("download", nombre)

  element.style.display = "none"
  document.body.appendChild(element)

  element.click()

  document.body.removeChild(element)
}

function generarUsuarioTxt(){
  var texto = "";
  data_json.forEach(object => {
    texto += object.usuario+","+object.clave+","+object.estado+",\n";
	console.log(texto);
  });
	descargar("Reporte.txt", texto);
}


function generarReporteTxt(){
  var texto = "";
  data_json.forEach(object => {
    texto += object.cedula+","+object.nombre+","+object.mail+","+object.usuario+","+object.clave+","+object.estado+"\n";
	console.log(texto);
  });
	descargar("reporteUsuarios.txt", texto);
	alert("Datos Cargados Exitosamente.");
	window.location.reload();
}

function doSearch(){
	const tableReg 	 = document.getElementById('tabla');
	const searchText = document.getElementById('s').value.toLowerCase();
	let total = 0;
	// Recorremos todas las filas con contenido de la tabla
	for (let i = 1; i < tableReg.rows.length; i++) {
		let found = false;
		const cellsOfRow = tableReg.rows[i].getElementsByTagName('td');
		// Recorremos todas las celdas
		for (let j = 0; j < cellsOfRow.length && !found; j++) {
			const compareWith = cellsOfRow[j].innerHTML.toLowerCase();
			// Buscamos el texto en el contenido de la celda
			if (searchText.length == 0 || compareWith.indexOf(searchText) > -1) {
				found = true;
				total++;
			}
		}
		if (found) {
			tableReg.rows[i].style.display = '';
		} else {
			// Si no ha encontrado ninguna coincidencia, esconde la fila de la tabla
			tableReg.rows[i].style.display = 'none';
		}
	}
}

function validarRepetidos(){
	var cedular = document.getElementById("ced1").value;
	var mailr = document.getElementById("mail1").value;
	var usuarior = document.getElementById("usu1").value;
	data_json.forEach(object =>{
    if(object.cedula == cedular){
		document.getElementById('resultado1').innerHTML = '<p class="error"><strong>Error: </strong>Esta cedula ya se encuentra registrada !</p>';
		document.getElementById("ced1").value = "";
		}else if(object.mail == mailr){
				document.getElementById('resultado3').innerHTML = '<p class="error"><strong>Error: </strong>Este mail ya se encuentra registrado !</p>';
				document.getElementById("mail1").value = ""; 
				 }else if(object.usuario == usuarior){
					 document.getElementById('resultado4').innerHTML = '<p class="error"><strong>Error: </strong>Este usuario ya se encuentra registrado !</p>';
					document.getElementById("usu1").value = ""; 
		}
    });
}
function validarRepetidos2(){
	var cedular = document.getElementById("ced2").value;
	var mailr = document.getElementById("mail2").value;
	var usuarior = document.getElementById("usu2").value;
	data_json.forEach(object =>{
    if(object.cedula == cedular){
		document.getElementById('resultado6').innerHTML = '<p class="error"><strong>Error: </strong>Esta cedula ya se encuentra registrada !</p>';
		document.getElementById("ced2").value = "";
		}else if(object.mail == mailr){
				document.getElementById('resultado8').innerHTML = '<p class="error"><strong>Error: </strong>Este mail ya se encuentra registrado !</p>';
				document.getElementById("mail2").value = ""; 
				 }else if(object.usuario == usuarior){
					 document.getElementById('resultado9').innerHTML = '<p class="error"><strong>Error: </strong>Este usuario ya se encuentra registrado !</p>';
					document.getElementById("usu2").value = ""; 
		}
    });
}