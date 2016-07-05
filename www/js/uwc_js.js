


function obtenirSession(){
	
		$.ajax({
			  type: "POST",
			  async: false ,
			  url: 'http://www.mathieuwilson.ca/tts/subscribe.php',
			  data: {'nom':'jean'},
			  success: function(data){
				//var retour = JSON.parse(data);
			
	
				data_json=JSON.parse(data);
				alert(data);
				alert(data_json.nomSession);
				localStorage.setItem("id_tts", data_json.nomSession);
			  }
		});
	
}

function voirLocalStorage(){
	
	navigator.vibrate(2000);
	navigator.geolocation.getCurrentPosition(geolocationSuccess());
		
		//alert(localStorage.id_tts);

}

function geolocationSuccess(position){
	alert(position);
	//alert(JSON.stringify(position));
	 /*alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
    };*/

}
/*function faireLocalisation(){
	navigator.geolocation.getCurrentPosition(traiterLocation());

}

*/



