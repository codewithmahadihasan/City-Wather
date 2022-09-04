

const apiKey = "aa6ea938956a570b463fa4a1a58898b7"

const data = (city) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(res => res.json())
        .then(data => funtion(data))

}

const funtion = (data) => {
    const cityName = document.getElementById('city')
    const wather = document.getElementById('wather')
    const watherSetuation = document.getElementById('wather-setuation')


    if (typeof data.name === "undefined") {
        cityName.innerText = 'Sorry No Result Found'
        wather.innerText = ''
        watherSetuation.innerText = ''
    }
    else {
        console.log(data)
        cityName.innerText = data.name
        wather.innerHTML = `${data.main.temp}  &deg;C`
        watherSetuation.innerText = data.weather[0].description

    }



}



const myFunction = () => {

    const inputFild = document.getElementById('input-field')
    data(inputFild.value)
    inputFild.value = ''

}

