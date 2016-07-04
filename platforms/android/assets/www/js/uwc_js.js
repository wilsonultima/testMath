function faireLocalisation(){
	navigator.geolocation.getCurrentPosition(traiterLocation());

}



function traiterLocation(position){
alert(position.coords.latitude);

}