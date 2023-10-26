const formulario = document.getElementById('formulario')
const respuesta = document.getElementById('respuesta')

formulario.addEventListener('submit', e=> {
    e.preventDefault()
    const nombre = document.getElementById('nombre').value
    const descripcion = document.getElementById('descripcion').value
    const precio = document.getElementById('precio').value

    const data = {
        nombre :nombre,
        descripcion: descripcion,
        precio:precio
    }

    fetch('http://localhost:8080', {
        method: "POST", 
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((res) => res.json())
    .catch((error) => {
        respuesta.innerHtml+=`
        <div class="alert alert-danger" role="alert">
           ${error}
        </div>
        `
        setTimeout(()=> {
            respuesta.className+= "d-none"
        },2000  )
    })
    .then((response) => {
        respuesta.innerHTML+=`
        <div class="alert alert-success" role="alert">
        ${response.message}
      </div>
        `
        setTimeout(()=> {
            respuesta.className+= "d-none"
        },2000  )
    });

})

