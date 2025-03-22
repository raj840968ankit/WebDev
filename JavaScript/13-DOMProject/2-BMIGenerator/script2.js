//script.js file is concept of chai and code and this concept is mine
const button = document.querySelector("button")
button.addEventListener('click', function(e){
    e.preventDefault() //prevent form submission get and post methods
    const height = Number(document.querySelector("#height").value)
    const weight = Number(document.querySelector("#weight").value)
    const result = document.querySelector("#results")
    //handle the cases
    if(height === '' || height < 0 || isNaN(height)){
        result.append(document.createTextNode(`Enter valid height ${height}`))
    }
    if(weight === '' || weight < 0 || isNaN(weight)){
        result.append(document.createTextNode(`Enter valid height ${weight}`))
    }
    const bmi = (weight / ((height * height) / 10000)).toFixed(2)
    result.append(document.createTextNode(bmi));
})