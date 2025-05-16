const form = document.querySelector('#shorten-form')

const displayLinks = async () => {
    try {
        const response = await fetch('/links')
        const links = await response.json();
        console.log(links);
        const linkList = document.querySelector("#shortened-urls")
        linkList.innerHTML = ""

        Object.keys(links).forEach((key) => {
            const li = document.createElement("li");
            li.innerHTML = `<a href="/${key} target="_blank" >${window.location.origin}/${key}</a> - ${links[key]}`
            linkList.appendChild(li)
        })
    } catch (error) {
        console.error(error);
    }
}
form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)//new class introduced to take form values...pass target element(form) in constructor
    //to access any input field value using 'name attribute'
    const url = formData.get('url')
    const shortCode = formData.get('shortCode')
    //sending data from frontend to backend
    try {
            const response = await fetch('/shorten', {
                method : "POST",
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify({url, shortCode})
            }) 
        if(response.ok){
            displayLinks()
            alert("form submitted successfully")
            e.target.reset()
        }
    } catch (error) {
        console.error(error)
    }
})