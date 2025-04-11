const insert = document.querySelector('#insert')

//now we will add event listener to whole window object
//this project will only run in browser
window.addEventListener('keydown', function(e){
  insert.innerHTML = `
  <table>
  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'space' : e.key }</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
  `
})