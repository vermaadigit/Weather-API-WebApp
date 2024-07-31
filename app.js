const API_KEY = '5310a0a3ba3c9e90578cbeb274588afa';
const search = document.querySelector('[data-searchForm]');
const searchInput = document.querySelector('[data-searchInput]');

function renderWeatherInfo(data) {
    const city = document.querySelector('[locationCity]');
    const temp = document.querySelector('[data-Temperature]');
    const wind = document.querySelector('[data-Wind]');
    const humidity = document.querySelector('[data-Humidity]');

    console.log(data);

    city.innerHTML = data.name;
    temp.innerHTML = `${data.main.temp} °C`;
    wind.innerHTML = `${data.wind.speed} m/s`;
    humidity.innerHTML = `${data.main.humidity} %`;

}
async function getWeatherInfo(city) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await response.json();
        renderWeatherInfo(data);
}

search.addEventListener('submit', (e) => {
    e.preventDefault();
    getWeatherInfo(searchInput.value);
    searchInput.value = '';
});

