// A partir de ES6
let myVar = 10;
var myVar2 = 1;

const myDoc = document;
console.log(myDoc);



let videos = [
    { 
        url:'<iframe width="853" height="480" src="https://www.youtube.com/embed/DJNzmNB48no" title="IL DIVO - Regresa a Mí (Unbreak My Heart) (Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        titulo: 'Sin Principio Ni Final', 
         
    },
    {
        url: `<iframe width="100%" src="https://www.youtube.com/embed/HXqmhUa7mIY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        titulo: `Howard hace un JUGUETE de Stephen Hawking`,
        
    },
    {
        url: `<iframe width="100%" src="https://www.youtube.com/embed/SK7CCXjzVgA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        titulo: `Curso JavaScript: 29. Operador de Cortocircuito - #jonmircha `,
        
    },
    {
        url: `<iframe width="100%" src="https://www.youtube.com/embed/B0UqCeL2QTU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        titulo: `Clase 0 - Codo a Codo 4 0 Full stack React 2022`,
        
    },
    {
        url: `<iframe width="100%" src="https://www.youtube.com/embed/QhSSkao9-wY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        titulo: `La teoria del big bang BIll Gates`,
        
    }
];

let cantidadVideos = myDoc.getElementById("numero");    // input cantidad
let botonVisualizar = myDoc.getElementById("videos");   // boton submit

// console.log(cantidadVideos);

botonVisualizar.addEventListener("click", (event) => {
    event.preventDefault();
    let lista_video = myDoc.getElementById("lista_video");
    let cantidad = cantidadVideos.value || 0;   // operador cortocircuito OR
    let iterador = 0;

    lista_video.innerHTML = ""; //  reset para cada evento click

    // En caso de no ingresar numero valido, menciona error
    if(cantidad <= 0) lista_video.innerHTML += `<li class="list-group-item bg-warning">No has seleccionado videos.</li>`;


    for (let index = 0; index < cantidad; index++) {
        lista_video.innerHTML += `<li class="list-group-item">
                                <div class="container fade show">
                                    <div class="row g-0">
                                        <div class="iframe_video mx-auto" class="col-md-6" style="max-width: 350px;">
                                            ${videos[iterador].url}
                                        </div>
                                        <div class="col-md-6">
                                            <div class="card-body p-3">
                                                <h5 class="card-title">${videos[iterador].titulo}</h5>
                                               <p class="card-text"><small class="text-muted">Video ${index+1}</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>`;
        iterador++;
        if(iterador == 5) iterador = 0;
    }
    
})
