import React from "react"
import './Mycss.css' 
const temp = () => {

    function celsiusParaFahrenheit(c) {
        return (1.8 * c + 32)
    }
    function fahrenheitParaCelsius(f) {
        return ((f - 32) * 5 / 9)
    }
    function kelvin(k) {
        let celsius = k - 273.15
        let fahren = 1.8 * celsius + 32

        return {celsius, fahren}
    }
    return (
        <div className="minhaClasse">
            <h1> A conversão de Celsius para Fahrenheit:  {celsiusParaFahrenheit(30).toFixed(2)} </h1>
            <h1> A conversão de Fahrenheit para Celsius:  {fahrenheitParaCelsius(100).toFixed(2)} </h1>
            <h1> A conversão de Kelvin para Celsius:  {kelvin(280).celsius.toFixed(2)} </h1>
            <h1> A conversão de Kelvin para Fahrenheit:  {kelvin(280).fahren.toFixed(2)} </h1>
        </div>
    )
}

export default temp