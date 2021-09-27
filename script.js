window.addEventListener('load', (event) => {
   alert("loaded!!")
  
   if(navigator.geolocation){
       if(navigator.geolocation.getCurrentPosition((position) => { //get location from browser
            var long = position.coords.longitude;
            var lat = position.coords.latitude;
            var apiKey = '4bb5452cc73742da95943906212109';
            var url = `http://api.weatherapi.com/v1/current.json?q=${lat},${long}&key=${apiKey}`;
            console.log(url);
            fetch(url).then(result => result.json()) //fetch data from api with location
            .then(data => {
                console.log(data)
                console.log(data.current.temp_c);
                //print in html
                document.getElementsByClassName("timezone-name")[0].innerHTML = data.location.name;
                document.getElementsByClassName("farhen")[0].innerHTML = data.current.temp_f + 'F';
                document.getElementsByClassName("celcius")[0].innerHTML = data.current.temp_c + '°C';
                document.getElementsByClassName("temperature-description")[0].innerHTML = data.current.condition.text;
            })
            .catch(error => console.log(error));
            

        }));
   }
   

});