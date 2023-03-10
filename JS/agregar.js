const nombre = document.getElementById('name')
const apellido = document.getElementById('apellido')
const numero = document.getElementById('numero')
const gustos = document.getElementById('gustos')
const url = document.getElementById('url')

let contactos = ''
addEventListener('click', (event)=>{
    if(event.target.className =='btn_agregar'){
        alert('Datos agregados correctamente')
        /* window.close() */
        contactos = JSON.parse(localStorage.getItem('contactos'))
        
        contactos.push({nombre:nombre.value, apellido:apellido.value,numero:numero.value,gustos:(gustos.value).split(" "),foto:url.value})
        localStorage.setItem('contactos', JSON.stringify(contactos))
        location = '../index.html'
    }
})