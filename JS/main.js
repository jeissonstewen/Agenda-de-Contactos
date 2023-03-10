import contactos from './contactos.js'
const fotos = document.querySelector('.header') //fotos principales
const info = document.querySelector('.info')
const foto = document.querySelector('.foto') //foto de cada contacto a buscar
const nombre = document.getElementById('text')
const criterio = document.getElementById('criterio')
const image = document.getElementById('image')
console.log(contactos)
/* let datos = Array.from(contactos) */
let datos = ''

if(localStorage.getItem('contactos')==null){
    datos = [...contactos]
    localStorage.setItem('contactos',JSON.stringify(datos))
} else {
    datos = JSON.parse(localStorage.getItem('contactos'))
}
datos.forEach(imagen => {
    fotos.innerHTML += `
    <div class="contactos" id="contactos">
    <img class="image" src=${imagen.foto} alt="" title="${imagen.nombre}">
    </div>
    `
})
addEventListener('click', (event)=>{
    if(event.target.className =='text'){
        nombre.value =''
        criterio.value = ''
        info.innerHTML = ''
        foto.innerHTML = `
            <img class="image" src="./imagen/contacto.png"  alt="">
            
            `
    }
})
addEventListener('click', (event)=>{
    if(event.target.className =='btn_buscar'){
        /* console.log('si'+nombre.value) */
        if(datos.find(Name=>Name.nombre==nombre.value)){
            let index = datos.findIndex(Name=>Name.nombre==nombre.value)
            foto.innerHTML = `
            <img class="image" src=${datos[index].foto} alt="">
            
            `
            if(criterio.value==''){
                info.innerHTML=`<p>Nombre: <span>${datos[index].nombre}</span></p>
                <p>Apellido: <span>${datos[index].apellido}</span></p>
                <p>Numero: <span>${datos[index].numero}</span></p>
                <p>Gustos: <span>${datos[index].gustos}</span></p>
                `
            }
            if(criterio.value=='Nombre'){
                info.innerHTML=`<p>Nombre: <span>${datos[index].nombre}</span></p>
                `
            }
            if(criterio.value=='Apellido'){
                info.innerHTML=`
                <p>Apellido: <span>${datos[index].apellido}</span></p>
                
                `
            }
            if(criterio.value=='Numero'){
                info.innerHTML=`
                <p>Numero: <span>${datos[index].numero}</span></p>
                
                `
            }
            if(criterio.value=='Gustos'){
                info.innerHTML=`
                <p>Gustos: <span>${datos[index].gustos}</span></p>
                `
            }

        }
    }
    if(event.target.className =='btn_agregar'){
        /* window.open('../HTML/agregar.html') */
        location = '../HTML/agregar.html'
    }
})