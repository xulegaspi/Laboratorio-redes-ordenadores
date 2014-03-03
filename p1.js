/**
 * 
 */
function validar() {
	Username = document.getElementById("username");
	Password = document.getElementById("password");
	Password2 = document.getElementById("password2");
	Email = document.getElementById("email");
	Name = document.getElementById("name");
	Surname = document.getElementById("surname");
	Day = document.getElementById("day");
	Month = document.getElementById("month");
	Year = document.getElementById("year");
	passw =  /^(?=.*[0-9])(?=.*[!@#$%^&_*])[a-zA-Z0-9!@#$%^&_*]{7,15}$/;
	
	if(Username.value.length == 0) {
		alert("Please, introduce a valid username!");
	} else {

	}
	if(Password.value.match(passw) || Password.value.length == 0) {
		//alert("Password correct");
	} else {
		alert("Password incorrect");
	}
	if(Password2.value != Password.value) {
		alert("Password doesn\'t match");
	}
	if(Email.value) {
		
	} else {
		
	}
	if(Month.value == 'April' || 'June' || 'September' || 'November'){
		if(Day.value == '31') {
			alert("Invalid date");
		}
	} else {
		if(Month.value == 'February') {
			if(Day.value == '31' || '30') {
				alert("Invalid date");
			}
			if(Day.value == '29') {
				year = parseInt(Year.value);
				if( !((year % 4 == 0) || (year % 100 != 0) || (year % 400 == 0)) ) {
					alert("Invalid date");
				} 
			}
		}
	}

}

function ChangeMethod(){
	form = document.getElementById("form");
	if(form.method=="post") form.method="get";
	else form.method="post";
}

function ChangeEncType(){
	form = document.getElementById("form");
    if(form.enctype=="application/x-www-form-urlencoded") form.enctype="multipart/form-data";
    else form.enctype="application/x-www-form-urlencoded";
}

function ChangeAction(){
	form=document.getElementById("form");
	alert(form.action);
	document.getElementById("formulario").action="http://clave.det.uvigo.es:8080/~lroprof/p1.php";
	if(form.action=="p1.php") ;
    else form.action="p1.php";
}

function get_browser(){
	var Agent = navigator.userAgent;

	// Opera
	Offset=Agent.indexOf("Opera");
	if (Offset!=-1) {
		Name = "Opera";
	 	Offset2=Agent.indexOf("Version");
	 	if (Offset2!=-1) Version = Agent.substring(Offset+8);
	 	else Version = Agent.substring(Offset+6);
	 	Version=trim_version(Version);
	 	return Name + " " + Version;
	}
	//MSIE
	Offset=Agent.indexOf("MSIE");
	if (Offset!=-1) {
	 	Name = "Microsoft Internet Explorer";
	 	Version = Agent.substring(Offset+5);
	 	Version=trim_version(Version);
	 	return Name + " " + Version;
	}
	//Chrome
	Offset=Agent.indexOf("Chrome");
	if (Offset!=-1) {
	 	Name = "Chrome";
	 	Version = Agent.substring(Offset+7);
	 	Version=trim_version(Version);
	 	return Name + " " + Version;
	}
	//Safari
	Offset=Agent.indexOf("Safari");
	if (Offset!=-1) {
	 	Name = "Safari";
	 	Offset2=Agent.indexOf("Version");
	 	if (Offset2!=-1) Version = Agent.substring(Offset+8);
	  	else Version = Agent.substring(Offset+7);
	  	Version=trim_version(Version);
	  	return Name + " " + Version;
	}
	//Firefox
	Offset=Agent.indexOf("Firefox");
	if (Offset!=-1) {
	 	Name = "Firefox";
	 	Version = Agent.substring(Offset+8);
	 	Version=trim_version(Version);
	 	return Name + " " + Version;
	}

	return Agent;
}

function trim_version(Version){
	colon=Version.indexOf(";");
	space=Version.indexOf(" ");
	if (colon!=-1) Version=Version.substring(0,colon);
	if (space!=-1) Version=Version.substring(0,space);
   	return Version;
}