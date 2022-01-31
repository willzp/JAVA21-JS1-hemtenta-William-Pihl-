const KEY = 'c66991ade98d4961bdbf983d2123f35a';
const btn = document.querySelector('button');
const temp = document.getElementById('current-temp');
const wind = document.getElementById('current-wind');
const humidity = document.getElementById('current-humidity');
const description = document.getElementById('current-description');
const icon = document.getElementById('icon');





btn.addEventListener( 'click', function(event){
    const input = document.querySelector('input');
  

    const url = ` https://api.weatherbit.io/v2.0/current?city=${input.value}&key=c66991ade98d4961bdbf983d2123f35a&lang=sv`;

   
   
   fetch(url).then(
    function(response){
        if(response.status>=200 && response.status<300){
            return response.json();
        }
        else{

            showErrorText();
            return;
        }
    }
).then(
    function(data){
        temp.innerHTML = Math.round(data.data[0].temp) + '°C';
        wind.innerHTML = Math.round(data.data[0].wind_spd) + ' ' + 'm/s';
        humidity.innerHTML = Math.round(data.data[0].rh) + '% relativ luftfuktighet';
        description.innerHTML = data.data[0].weather.description;
        icon.src = 'https://www.weatherbit.io/static/img/icons/' + data.data[0].weather.icon + '.png';

    }

).catch(
    function(error){
        showErrorText();
    }
);
});
function showErrorText(){
    temp.innerHTML = '';
        wind.innerHTML = '';
        humidity.innerHTML = '';
        description.innerHTML = 'something went wrong';
        icon.src = '';
    
}





