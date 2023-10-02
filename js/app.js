const changeLocation = document.getElementById('change-location')
const card = document.getElementById('card')
const details = document.getElementById('details')
const weatherIcon = document.getElementById('weather-icon')
const overlay = document.getElementById('overlay')

const updetaUI = (city)=>{
    details.innerHTML = `
    <h5 class="mb-3">${city.name}, ${city.sys.country}</h5>
    <p class="mb-3">${city.weather[0].main}</p>
    <div class="display-4 mb-3">
      <span>${Math.round(city.main.temp)}</span>
      <span>&deg;C</span>
    </div>
    `    
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }
    

    weatherIcon.src = `https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`;
    weatherIcon.alt = `${city.weather[0].icon} icons`;    
}




// get wather
const getWeather = async (city)=>{
    let data = await getData(city);
    return data;
}
// change form
changeLocation.addEventListener('submit', (e)=>{
    e.preventDefault();
    let cityName = changeLocation.city.value.trim();       
    changeLocation.reset();
    getWeather(cityName).then(data => updetaUI(data));
})

