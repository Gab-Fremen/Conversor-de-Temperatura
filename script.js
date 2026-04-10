
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

function SecondClickIn(buttonIn, buttonOut) {
    if (buttonIn.classList.contains("active")) {
        buttonIn.classList.remove("active")
        EnableButton(buttonOut)

        IdTemp = 0
        return true;
    }
    return false    
}

function AddOrRemoveClickIn(button) {
    button.classList.add("active")

    if (button === btCelsiusIn) {
        btFarenheitIn.classList.remove("active")
        btKelvinIn.classList.remove("active")
        btCelsiusOut.classList.remove("active")
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
    
function AddOrRemoveClickOut(button) {
    button.classList.add("active")

     if (button === btCelsiusOut) {
        btFarenheitOut.classList.remove("active")
        btKelvinOut.classList.remove("active")
    }
    else if (button === btFarenheitOut) {
        btCelsiusOut.classList.remove("active")
        btKelvinOut.classList.remove("active")
    }
    else {
        btCelsiusOut.classList.remove("active")
        btFarenheitOut.classList.remove("active")

    } 



}





btCelsiusIn.onclick = function InCelsius(){
    if (SecondClickIn(btCelsiusIn, btCelsiusOut)) {
        return;
    }
    IdTemp = 1
    AddOrRemoveClickIn(btCelsiusIn)    

}

btFarenheitIn.onclick = function InFarenheit(){
    if (SecondClickIn(btFarenheitIn, btFarenheitOut)) {
        return;
    }
    IdTemp = 2
    AddOrRemoveClickIn(btFarenheitIn)
}

btKelvinIn.onclick = function InKelvin(){
     if (SecondClickIn(btKelvinIn, btKelvinOut)) {
        return;
    }
    IdTemp = 3
    AddOrRemoveClickIn(btKelvinIn)
}

btCelsiusOut.onclick = function Celsius(){
    AddOrRemoveClickOut(btCelsiusOut)
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
    AddOrRemoveClickOut(btFarenheitOut)
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
    AddOrRemoveClickOut(btKelvinOut)
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


