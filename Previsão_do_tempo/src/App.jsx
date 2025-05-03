import { useState, useRef } from 'react' 
import axios from 'axios'
import './App.css'
import WeatherInformations from './components/weatherinformations/Weatherinformations'
import WeatherInformations5Days from './components/WeatherInformations/WeatherInformations5Days/WeatherInformations5Days'

 
function App() {
  const [weather, setWeather] = useState()
  const [weather5days, setWeather5days] = useState()
  
  
  const inputRef = useRef()

  async function searchCity(){
   const city = inputRef.current.value
   const key = "239f9b4a09ae58e43b32e187f43c0436"
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
   const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`

   const apiInfo = await axios.get(url)
   const apiInfo5Days = await axios.get(url5Days)
   
   setWeather5days(apiInfo5Days.data)
   setWeather(apiInfo.data)
  }

  return (
    <div className='container'>
      <h1>Previsão do Tempo</h1>
      <input ref={inputRef} type='text' placeholder='Digite o nome da cidade'/>
      <button onClick={searchCity}>Buscar</button>

      {weather &&<WeatherInformations weather={weather}/>}
      {weather5days &&<WeatherInformations5Days weather5Days={weather5days}/>}
    </div>
  )
}

export default App
