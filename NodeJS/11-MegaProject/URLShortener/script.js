const form = document.querySelector('#shorten-form')

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)//new class introduced to take form values...pass target element(form) in constructor
    //to access any input field value using 'name attribute'
    const url = formData.get('url')
    const shortCode = formData.get('shortCode')
    console.log(url +" "+ shortCode);
    //sending data from frontend to backend
    try {
        const response = await fetch('/shorten', {
            method : "POST",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify({url, shortCode})
        }) 
        if(response.ok){
            alert("form submitted successfully")
        }
    } catch (error) {
        console.error(error)
    }
})