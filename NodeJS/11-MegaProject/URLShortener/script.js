const form = document.querySelector('#shorten-form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)//new class introduced to take form values...pass target element(form) in constructor
    //to access any input field value using 'name attribute'
    const url = formData.get('url')
    const shortCode = formData.get('shortCode')
    console.log(url +" "+ shortCode);
})