// JavaScript Document
function validarCedula2(){
     var cedula = null;
	
	 cedula = document.getElementById("ced2").value;

     //Preguntamos si la cedula consta de 10 digitos
     if(cedula.length == 10){
        
        //Obtenemos el digito de la region que sonlos dos primeros digitos
        var digito_region = cedula.substring(0,2);
        
        //Pregunto si la region existe ecuador se divide en 24 regiones
        if( digito_region >= 1 && digito_region <=24 ){
          
          // Extraigo el ultimo digito
          var ultimo_digito   = cedula.substring(9,10);
			
          var pares = parseInt(cedula.substring(1,2)) + parseInt(cedula.substring(3,4)) + parseInt(cedula.substring(5,6)) + parseInt(cedula.substring(7,8));

          var numero1 = cedula.substring(0,1);
          var numero1 = (numero1 * 2);
          if( numero1 > 9 ){ var numero1 = (numero1 - 9); }

          var numero3 = cedula.substring(2,3);
          var numero3 = (numero3 * 2);
          if( numero3 > 9 ){ var numero3 = (numero3 - 9); }

          var numero5 = cedula.substring(4,5);
          var numero5 = (numero5 * 2);
          if( numero5 > 9 ){ var numero5 = (numero5 - 9); }

          var numero7 = cedula.substring(6,7);
          var numero7 = (numero7 * 2);
          if( numero7 > 9 ){ var numero7 = (numero7 - 9); }

          var numero9 = cedula.substring(8,9);
          var numero9 = (numero9 * 2);
          if( numero9 > 9 ){ var numero9 = (numero9 - 9); }

          var impares = numero1 + numero3 + numero5 + numero7 + numero9;

          var suma_total = (pares + impares);

          var primer_digito_suma = String(suma_total).substring(0,1);

          var decena = (parseInt(primer_digito_suma) + 1)  * 10;

          var digito_validador = decena - suma_total;

          if(digito_validador == 10)
            var digito_validador = 0; 

          if(digito_validador == ultimo_digito){
			  document.getElementById('resultado6').innerHTML = '<p class="correcto"><strong>✓ Correcto: </strong>Cedula valida.</p>';
          }else{
			  document.getElementById('resultado6').innerHTML = '<p class="error"><strong>Error: </strong>¡Esta cédula no pertenece a ninguna región!</p>';
			  document.getElementById("ced2").value = "";
          }
          
        }else{
			document.getElementById('resultado6').innerHTML = '<p class="error"><strong>Error: </strong>¡Solo se permiten caracteres numéricos!</p>';
			document.getElementById("ced2").value = "";
        }
     }else{
		 document.getElementById('resultado6').innerHTML = '<p class="error"><strong>Error: </strong>¡La cédula tiene menos de 10 caracteres!</p>';
		 document.getElementById("ced2").value = "";
     }
}

function validarNombre2() {
	var regName = /^\b([A-ZÀ-ÿ][-,a-z]+[ ]*)+$/; 
	var nombre = document.getElementById('nom2').value;
	
	if(nombre != ''){
	
		if (! regName.test (nombre)) {
		document.getElementById('resultado7').innerHTML = '<p class="error"><strong>Error: </strong>¡Ingrese un nombre y apellido correctamente!</p>';
		document.getElementById('nom2').focus();
		document.getElementById("nom2").value = "";
		} else {
			document.getElementById('resultado7').innerHTML = '<p class="correcto"><strong>✓ Correcto: </strong>Nombre y Apellido validos.</p>';
		}
  }	else {
		//si los campos o uno, este vacio
		document.getElementById('resultado7').innerHTML = '<p class="error"><strong>Error: </strong>¡Los campos no deben estar vacios!</p>';
		document.getElementById("nom2").value = "";
  }
}

function validarEmail2() {
	var regName = /^[\w]+@{1}[\w]+\.[a-z]{2,3}$/;
	var email = document.getElementById('mail2').value;
	
	if(email != ''){
		
		if (! regName.test (email)) {
		document.getElementById('resultado8').innerHTML = '<p class="error"><strong>Error: </strong>¡Ingrese correo electronico valido!</p>';
		document.getElementById('mail2').focus();
		document.getElementById("mail2").value = "";
		} else {
			document.getElementById('resultado8').innerHTML = '<p class="correcto"><strong>✓ Correcto: </strong>Correo Electronico valido.</p>';
		}
	} else {
		//si los campos o uno, este vacio
		document.getElementById('resultado8').innerHTML = '<p class="error"><strong>Error: </strong>¡Los campos no deben estar vacios!</p>';
		document.getElementById("mail2").value = "";
  }	
}

function validarUsuario2() {
	var regName = /^[a-zA-Z0-9]+$/;
	var usuario = document.getElementById('usu2').value;
	
	if(usuario != ''){
		
		if (! regName.test (usuario)) {
		document.getElementsByName('resultado9').innerHTML = '<p class="error"><strong>Error: </strong>¡Ingrese un nombre de usuario valido!</p>';
		document.getElementById('usu2').focus();
		document.getElementById("usu2").value = "";
		} else {
			document.getElementById('resultado9').innerHTML = '<p class="correcto"><strong>✓ Correcto: </strong>Usuario valido.</p>';
		}
	} else {
		//si los campos o uno, este vacio
		document.getElementById('resultado9').innerHTML = '<p class="error"><strong>Error: </strong>¡Los campos no deben estar vacios!</p>';
		document.getElementById("usu2").value = "";
  }		
}

function validarContraseña2(){
	var regName = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;
	var pass = document.getElementById('pass3').value
	var pass2 = document.getElementById('pass4').value
	if(pass != '' && pass2 != ''){
		if(pass != pass2){
			//si las contraseñas no coinciden
			document.getElementById('resultado10').innerHTML = '<p class="error"><strong>Error: </strong>¡Las contraseñas no coinciden!</p>';	
			document.getElementById("pass3").value = "";
			document.getElementById("pass4").value = "";
		}else if (! regName.test (pass)){
			document.getElementById('resultado10').innerHTML = '<p class="error"><strong>Error: </strong>¡Ingrese una contrasena valida!</p>';
			document.getElementById("pass3").value = "";
			document.getElementById("pass4").value = "";
		} else {
			document.getElementById('resultado10').innerHTML = '<p class="correcto"><strong>✓ Correcto: </strong>Contraseña valida.</p>';
		}
	} else {
		//si los campos o uno, este vacio
		document.getElementById('resultado10').innerHTML = '<p class="error"><strong>Error: </strong>¡Los campos no deben estar vacios!</p>';
		document.getElementById("pass3").value = "";
		document.getElementById("pass4").value = "";
	}
}

function letrasMenores2() {
  var x = document.getElementById("mail2");
  x.value = x.value.toLowerCase();
}