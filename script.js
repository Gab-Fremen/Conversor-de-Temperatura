
var IdTemp = 0
var resultado = document.getElementById("result")
const btCelsiusIn = document.getElementById("fromCelsius")
const btFarenheitIn = document.getElementById("fromFarenheit")
const btKelvinIn = document.getElementById("fromKelvin")
const btCelsiusOut = document.getElementById("toCelsius")
const btFarenheitOut = document.getElementById("toFarenheit")
const btKelvinOut = document.getElementById("toKelvin")

function Input() {
    var input = document.getElementById("writeTemp")
    input = Number(input.value)
    return input
}

function BlockButton(button) {
    button.classList.add("blocked")
    button.disabled = true
}

function EnableButton(button) {
    button.classList.remove("blocked")
    button.disabled = false

}

function SecondClick(buttonIn, buttonOut) {
    if (buttonIn.classList.contains("active")) {
        buttonIn.classList.remove("active")
        EnableButton(buttonOut)

        IdTemp = 0
        return true;
    }
    return false    
}

function AddOrRemoveClick(button) {
    button.classList.add("active")

    if (button === btCelsiusIn) {
        btFarenheitIn.classList.remove("active")
        btKelvinIn.classList.remove("active")
        EnableButton(btFarenheitOut)
        EnableButton(btKelvinOut)
        BlockButton(btCelsiusOut)
    }
    else if (button === btFarenheitIn) {
        btCelsiusIn.classList.remove("active")
        btKelvinIn.classList.remove("active")
        EnableButton(btCelsiusOut)
        EnableButton(btKelvinOut)
        BlockButton(btFarenheitOut)
    }
    else {
        btCelsiusIn.classList.remove("active")
        btFarenheitIn.classList.remove("active")
        EnableButton(btFarenheitOut)
        EnableButton(btCelsiusOut)
        BlockButton(btKelvinOut)
    }         
}
    

btCelsiusIn.onclick = function InCelsius(){
    if (SecondClick(btCelsiusIn, btCelsiusOut)) {
        return;
    }
    IdTemp = 1
    AddOrRemoveClick(btCelsiusIn)    

}

btFarenheitIn.onclick = function InFarenheit(){
    if (SecondClick(btFarenheitIn, btFarenheitOut)) {
        return;
    }
    IdTemp = 2
    AddOrRemoveClick(btFarenheitIn)
}

btKelvinIn.onclick = function InKelvin(){
     if (SecondClick(btKelvinIn, btKelvinOut)) {
        return;
    }
    IdTemp = 3
    AddOrRemoveClick(btKelvinIn)
}

btCelsiusOut.onclick = function Celsius(){
    btCelsiusOut.classList.add("active")
    var entrada = Input()
    if (IdTemp === 2){
        resultado.innerHTML = (ConvertFarenheitToCelsius(entrada))
    }
    else if (IdTemp === 3){
        resultado.innerHTML = ConvertKelvinToCelsius(entrada)
    }
    else{
        resultado.innerHTML = ("Defina a temperatura inicial")
    }
}

btFarenheitOut.onclick = function Farenheit(){
    var entrada = Input()
    if (IdTemp === 1){
        resultado.innerHTML = ConvertCelsiusToFarenheit(entrada)
    }
    else if (IdTemp === 3){
        resultado.innerHTML = ConvertKelvinToFarenheit(entrada)
    }
    else{
        resultado.innerHTML = ("Defina a temperatura inicial")
    }
}

btKelvinOut.onclick = function Kelvin(){
    var entrada = Input()
    if (IdTemp === 2){
        resultado.innerHTML = ConvertFarenheitToKelvin(entrada)
    }
    else if (IdTemp === 1){
        resultado.innerHTML = ConvertCelsiusToKelvin(entrada)
    }
    else{
        resultado.innerHTML = ("Defina a temperatura inicial")
    }
}

function ConvertFarenheitToCelsius(tempFarenheit){
    var tempCelsius = (tempFarenheit - 32) * 5/9 
    return tempCelsius
}

function ConvertFarenheitToKelvin(tempFarenheit){
    var tempKelvin = (tempFarenheit - 32) * 5/9 + 273.15
    return tempKelvin
}

function ConvertCelsiusToFarenheit(tempCelsius){
    var tempFarenheit = (tempCelsius * 9/5 + 32)
    return tempFarenheit
}


function ConvertCelsiusToKelvin(tempCelsius){
    var tempKelvin = (tempCelsius + 273.15)
    return tempKelvin
}

function ConvertKelvinToCelsius(tempKelvin){
    var tempCelsius = (tempKelvin - 273.15)
    return tempCelsius
}

function ConvertKelvinToFarenheit(tempKelvin){
    var tempFarenheit = (tempKelvin - 273.15) * 9/5 + 32
    return tempFarenheit
}


