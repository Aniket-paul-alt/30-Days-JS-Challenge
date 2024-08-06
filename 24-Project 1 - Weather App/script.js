
async function getWeatherResponse() {
    try {
        const areaInput = document.querySelector("#areaInput")
        const btn = document.querySelector("#btn")
        btn.addEventListener('click', async (e) => {
            e.preventDefault()
            let area = areaInput.value
            const URL = area ? `https://api.weatherapi.com/v1/forecast.json?key=34e2fc228451416281382423240608%20&q=${area}&days=6` : `https://api.weatherapi.com/v1/forecast.json?key=34e2fc228451416281382423240608%20&q=kolkata&days=6`
            // console.log(URL);
            // console.log(area);  
            
            
            const res = await fetch(URL)
            const data = await res.json()
            console.log(data);
            console.log(data.location);
            // console.log(data.forecast);
            // console.log(data.forecast.forecastday[0].day);
        
        const location = document.querySelector('.location')
        const curretTemp = document.querySelector('#current-temp')
        const curretDesc = document.querySelector('#current-desc')
        const imageDiv = document.querySelector('.image')
        const forecastCards = document.querySelector('.forecast-cards')
        forecastCards.innerHTML=``
        let div
        
        
        location.innerHTML = `${data.location.name}, ${data.location.region}`
        curretTemp.innerHTML = `${data.forecast.forecastday[0].day.avgtemp_c}°C`
        curretDesc.innerHTML = `${data.forecast.forecastday[0].day.condition.text}`
        imageDiv.innerHTML = `<img src="${data.forecast.forecastday[0].day.condition.icon}" alt="">`
        
        let forcastArray = data.forecast.forecastday
        console.log(forcastArray);
        forcastArray.map(data => {
            div = document.createElement('div')
            // console.log(data.date)
            div.setAttribute('class','forecast-card')
            div.innerHTML=`
            <div class="day" id="day1">${data.date}</div>
            <div class="temperature" id="day1-temp">${data.day.avgtemp_c}</div>
            <div class="description" id="day2-desc">${data.day.condition.text}</div>
            <div class="image"><img src="${data.day.condition.icon}" alt=""></div>
            `
            forecastCards.appendChild(div)
        })
        
        
    })
        
    } catch (error) {
        console.error(error);
    }
}

getWeatherResponse()