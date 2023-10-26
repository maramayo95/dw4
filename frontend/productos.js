const productos = document.getElementById("productos");

fetch("http://localhost:8080/")
  .then((res) => res.json())
  .then((res) => {
    res.map((producto) => {
      productos.innerHTML += `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <h3>${producto.precio}</h3>
                <p class="card-text">${producto.descripcion}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        `;
    });
  });
