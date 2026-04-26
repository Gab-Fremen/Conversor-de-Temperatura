
var IdTemp = 0
var result = document.getElementById("result")
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
        btCelsiusOut.classList.remove("active")
        btFarenheitOut.classList.remove("active")
        btKelvinOut.classList.remove("active")
        EnableButton(buttonOut)
        result.innerHTML = "Results:"
        IdTemp = 0
        return true;
    }
    return false    
}

function AddOrRemoveClickIn(button) {
    button.classList.add("active")
    result.innerHTML = "Results:"


    if (button === btCelsiusIn) {
        btFarenheitIn.classList.remove("active")
        btKelvinIn.classList.remove("active")
        btCelsiusOut.classList.remove("active")
        btFarenheitOut.classList.remove("active")
        btKelvinOut.classList.remove("active")
        EnableButton(btFarenheitOut)
        EnableButton(btKelvinOut)
        BlockButton(btCelsiusOut)
    }
    else if (button === btFarenheitIn) {
        btCelsiusIn.classList.remove("active")
        btKelvinIn.classList.remove("active")
        btFarenheitOut.classList.remove("active")
        btCelsiusOut.classList.remove("active")
        btKelvinOut.classList.remove("active")
        EnableButton(btCelsiusOut)
        EnableButton(btKelvinOut)
        BlockButton(btFarenheitOut)
    }
    else {
        btCelsiusIn.classList.remove("active")
        btFarenheitIn.classList.remove("active")
        btKelvinOut.classList.remove("active")
        btFarenheitOut.classList.remove("active")
        btCelsiusOut.classList.remove("active")
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

function FirstClickOut(button) {
    if (button.classList.contains("active")) {
        return true
    }
    else {
        return false
    }
}




btCelsiusIn.onclick = function InCelsius(){
    if (SecondClick(btCelsiusIn, btCelsiusOut)) {
        return;
    }
    IdTemp = 1
    AddOrRemoveClickIn(btCelsiusIn)    

}

btFarenheitIn.onclick = function InFarenheit(){
    if (SecondClick(btFarenheitIn, btFarenheitOut)) {
        return;
    }
    IdTemp = 2
    AddOrRemoveClickIn(btFarenheitIn)
}

btKelvinIn.onclick = function InKelvin(){
     if (SecondClick(btKelvinIn, btKelvinOut)) {
        return;
    }
    IdTemp = 3
    AddOrRemoveClickIn(btKelvinIn)
}

btCelsiusOut.onclick = function Celsius(){
    if ((FirstClickOut(btFarenheitIn)) || (FirstClickOut(btCelsiusIn)) || (FirstClickOut(btKelvinIn))) { 
    AddOrRemoveClickOut(btCelsiusOut)
    var entry = Input()
    if (IdTemp === 2){
        result.innerHTML = (ConvertFarenheitToCelsius(entry))
    }
    else if (IdTemp === 3){
        result.innerHTML = ConvertKelvinToCelsius(entry)
    }
    else{
        result.innerHTML = ("Define the initial temperature")
    }
    }
    else{
        result.innerHTML = ("Define the initial temperature")
    }
}

btFarenheitOut.onclick = function Farenheit(){
    if ((FirstClickOut(btFarenheitIn)) || (FirstClickOut(btCelsiusIn)) || (FirstClickOut(btKelvinIn))) { 
    AddOrRemoveClickOut(btFarenheitOut)
    var entry = Input()
    if (IdTemp === 1){
        result.innerHTML = ConvertCelsiusToFarenheit(entry)
    }
    else if (IdTemp === 3){
        result.innerHTML = ConvertKelvinToFarenheit(entry)
    }
    }
    else{
        result.innerHTML = ("Define the initial temperature")
    }
}

btKelvinOut.onclick = function Kelvin(){
    if ((FirstClickOut(btFarenheitIn)) || (FirstClickOut(btCelsiusIn)) || (FirstClickOut(btKelvinIn))) { 
    AddOrRemoveClickOut(btKelvinOut)
    var entry = Input()
    if (IdTemp === 2){
        result.innerHTML = ConvertFarenheitToKelvin(entry)
    }
    else if (IdTemp === 1){
        result.innerHTML = ConvertCelsiusToKelvin(entry)
    }
    else{
        result.innerHTML = ("Define the initial temperature")
    }
    }
    else{
        result.innerHTML = ("Define the initial temperature")
    }
}

function ConvertFarenheitToCelsius(tempFarenheit){
    var tempCelsius = (tempFarenheit - 32) * 5/9 
    return tempCelsius.toFixed(2)
}

function ConvertFarenheitToKelvin(tempFarenheit){
    var tempKelvin = (tempFarenheit - 32) * 5/9 + 273.15
    return tempKelvin.toFixed(2)
}

function ConvertCelsiusToFarenheit(tempCelsius){
    var tempFarenheit = (tempCelsius * 9/5 + 32)
    return tempFarenheit.toFixed(2)
}


function ConvertCelsiusToKelvin(tempCelsius){
    var tempKelvin = (tempCelsius + 273.15)
    return tempKelvin.toFixed(2)
}

function ConvertKelvinToCelsius(tempKelvin){
    var tempCelsius = (tempKelvin - 273.15)
    return tempCelsius.toFixed(2)
}

function ConvertKelvinToFarenheit(tempKelvin){
    var tempFarenheit = (tempKelvin - 273.15) * 9/5 + 32
    return tempFarenheit.toFixed(2)
}


