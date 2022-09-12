// A partir de ES6
let myVar = 10;
let myVar2 = 1;

const myDoc = document;
console.log(myDoc);



let videos = [
    {
        url: '<iframe width="300" height="300" src="https://www.youtube.com/embed/-wm6F89rXhI?list=PLHSr-WBGnCvXCuNLPx46c7iAsQF2JrPKF" title="Les Luthiers , La Vida es Hermosa Disuacidio  - Bromato de Armonio" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        titulo : 'La Vida es Hermosa Disuacidio ',
    },
    {
        url: '<iframe width="300" height="300" src="https://www.youtube.com/embed/M5HhIbSyYgg?list=PLHSr-WBGnCvXCuNLPx46c7iAsQF2JrPKF" title="La Yegua Mía · Aquí Les Luthiers · Les Luthiers" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        titulo: 'La Yegua Mía'
    },
    {
        url: '<iframe width="300" height="300" src="https://www.youtube.com/embed/YnEJg5qYjgY?list=PLHSr-WBGnCvXCuNLPx46c7iAsQF2JrPKF" title="Les Luthiers -  Amor a Primera Vista - Bossa Libidinossa - Los Premios Mastropiero" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        titulo: 'Amor a Primera Vista'
    },
    {
        url: '<iframe width="300" height="300" src="https://www.youtube.com/embed/lrKPY7WB2sI?list=PLHSr-WBGnCvXCuNLPx46c7iAsQF2JrPKF" title="Les Luthiers -  Los Jovenes de Hoy en Día - Todo Por Que Rias" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        titulo: 'Los Jovenes de Hoy en Día'
    },
    {
        url: '<iframe width="300" height="300" src="https://www.youtube.com/embed/6vHn_U80rs8?list=PLHSr-WBGnCvXCuNLPx46c7iAsQF2JrPKF" title="Les Luthiers - Manuel Darío - Unen Canto con Humor" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        titulo: 'Manuel Darío'
    },
    {
        url : '<iframe width="300" height="300" src="https://www.youtube.com/embed/QLd8Bxzyh1k?list=PLHSr-WBGnCvXCuNLPx46c7iAsQF2JrPKF" title="Les Luthiers -  Encuentro en el Restaurante -  Grandes Hitos Antología 1995" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        titulo: 'Encuentro en el Restaurante'
    },
    {
        url: '<iframe width="300" height="300" src="https://www.youtube.com/embed/VENkNeay3jE?list=PLHSr-WBGnCvXCuNLPx46c7iAsQF2JrPKF" title="Les Luthiers - La Gallina Dijo Eureka - Hacen Muchas Gracias De Nada" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        titulo: 'La Gallina Dijo Eureka'
    },
    {
        url: '<iframe width="300" height="300" src="https://www.youtube.com/embed/7ydlVCj94x4?list=PLHSr-WBGnCvXCuNLPx46c7iAsQF2JrPKF" title="Payada de la Vaca · Aquí Les Luthiers · Les Luthiers" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        titulo: 'Payada de la Vaca'
    },
    {
        url: '<iframe width="300" height="300" src="https://www.youtube.com/embed/MeEnkNNvTSk?list=PLHSr-WBGnCvXCuNLPx46c7iAsQF2JrPKF" title="Perdónala (Bolérolo) · El Grosso Concerto · Les Luthiers" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        titulo: 'El Grosso Concerto'
    },
    {
        url : '<iframe width="300" height="300" src="https://www.youtube.com/embed/OXrYNPJQoTA?list=PLHSr-WBGnCvXCuNLPx46c7iAsQF2JrPKF" title="Teorema de Thales · Les Luthiers" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        titulo: 'Teorema de Thales'
    }
   

];

let cantidadVideos = myDoc.getElementById("numero");   
let botonVisualizar = myDoc.getElementById("videos");  


botonVisualizar.addEventListener("click", (event) => {
    event.preventDefault();
    let lista_video = myDoc.getElementById("lista_video");
    let cantidad = cantidadVideos.value || 0;  
    let iterador = 0;

    lista_video.innerHTML = ""; 

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
