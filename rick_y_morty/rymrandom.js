var imageGlobal;
function getNumber() {
    var aleatorio = Math.round(Math.random() * 50);

    const APi_URL = "https://rickandmortyapi.com/api/character/" + aleatorio;

    /*el fetch contiene implicitamente el metodo get para consultar la url y enciera 
    algunas otras funciones especificas como lo son http.open etc.*/
    fetch(APi_URL)
        .then((res) => res.json())
        // el siguiente foreach recorre el json y establece unas llaves de busqueda.
        .then((data) => {
            [data].forEach((rickAndMortyData) => {
                //la siguiente seccion seccion crea el elemento para cargar los datos posteriormente
                const name = document.createElement("name");

                const status = document.createElement("status");
                const species = document.createElement("species");
                const gender = document.createElement("gender");
                const image = document.createElement("image");

                imageGlobal = rickAndMortyData.image;

                /*la siguiente seccion recorre el json y obtiene los valores deseados
                Y despues de obtenerlos los guarda en los inner*/

                name.innerHTML = rickAndMortyData.name + " --- ";

                status.innerHTML = rickAndMortyData.status + " --- ";
                species.innerHTML = rickAndMortyData.species + " --- ";
                gender.innerHTML = rickAndMortyData.gender + " --- ";
                image.innerHTML = rickAndMortyData.image;

                // se declara la variable location en donde se recorre el json patra extraer el dato de locaciones.
                var locations = rickAndMortyData.location;
                
                [locations].forEach((llave) => {
                    const jsonLocation = document.createElement("jsonLocation");
                    jsonLocation.innerHTML = llave.name + " --- ";
                    aplicacion5.appendChild(jsonLocation);
                });

                //la var aplication y el metodo appendChild carga los datos dinamicamente para trasmitirlos al front.
                aplicacion.appendChild(name);

                aplicacion2.appendChild(status);
                aplicacion3.appendChild(species);
                aplicacion4.appendChild(gender);
                
            });
        })
        // .catch captura los errores.
        .catch((err) => console.log(err));
    // la siguiente seccion carga los datos dinamicamente hacia el front y los almacena en cache.
    const aplicacion = document.querySelector(".container");
    const aplicacion1 = document.querySelector(".container1");
    const aplicacion2 = document.querySelector(".container2");
    const aplicacion3 = document.querySelector(".container3");
    const aplicacion4 = document.querySelector(".container4");
    const aplicacion5 = document.querySelector(".container5");

    console.log(imageGlobal);
    $(".SliderImages").attr("src", imageGlobal);
}
