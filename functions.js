/**
 * 
 */
function validar() {
	//alert("hola");
	Username = document.getElementById("username");
	Password = document.getElementById("password");
	Password2 = document.getElementById("password2");
	Email = document.getElementById("email");
	Name = document.getElementById("name");
	Surname = document.getElementById("surname");
	passw =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
	if(Username.value.length==0) {
		alert("Introduzca nombre de usuario!");
	} else {
		alert("1");
	}
	if(Password.value.match(passw)) {
		alert("Password correct");
	} else {
		alert("Password incorrect");
	}
	if(Password2.value!=Password.value) {
		alert("Las contraseñas no coinciden!");
	} else {
		
	}
	if(Email.value) {
		
	} else {
		
	}
	//if(Username==null || Username==""){
		//alert("Username field is empty!");
		//return false;
	//}
	//if(!Password.match(passw)){
		//alert('Password must have between 7-15 characters and at least one digit and one special character lique / or &');
		//return false;
	//}
	//alert("hola");
}