//select form because we are performing operation on form
const form = document.querySelector("form")

//it will give empty value because we need value only after clicking button
//const height = parseInt(document.querySelector("#height").value)

//form has submit option so we are using submit listener
form.addEventListener('submit', function(e){
  e.preventDefault() //form uses post and get method and redirect to diffrent url
  //but we are displaying the result on same page only
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