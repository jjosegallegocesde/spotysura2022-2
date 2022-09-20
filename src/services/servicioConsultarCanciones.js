//RECETA PARA CONSUMIR APIS CON JS PURO

//1. si yo quiero consumir un api
//debo saber PARA DONDE IR Y A QUE SERVICIO....
//DEBO CONFIGURAR LA URI
const URI="https://api.spotify.com/v1/artists/3fMbdgg4jU18AjLCKBhRSm/top-tracks?market=US"

//2. Configuro datos Especiales o DE CONTROL en el servidor
const TOKEN="Bearer BQApaasNLjhYS_eZuxag8joweizUunJkRHR42cOdTMjoWoxs-zD7vpqesM7NpimRHybluED5ELtWoRTj-pKkH0I9eaSUx7UF4z7OF7EN2bVUOWRGt9ghmu3AfcY774Lr13WC01c2SeS4ZI9msKrgnej7HdejM66ikoSkAELUAEEDIk7JJ96yV-NkXM4Yw9p5I9M"

//3. Configuro la peticion
//NOTA: SOLO POST Y PUT CONFIGURAN BODY
//PARA JS LA PETICION ES UN OBJETO
const PETICION={
    method:"GET",
    headers:{Authorization:TOKEN},
}

//4. ARRANQUE PUES MIJO
//CONSUMA EL API
fetch(URI,PETICION)
.then(function(respuesta){
    return respuesta.json() //garantizo formato JSON
})
.then(function(respuesta){
    console.log(respuesta) //Hago lo que quiera con respuesta
    console.log(respuesta.tracks) //accedo a un atributo de la respuesta

    //recorrer un arreglo
    respuesta.tracks.forEach(function(cancion){
        console.log(cancion)
        console.log(cancion.name)
        console.log(cancion.preview_url)
        console.log(cancion.album.images[0].url)
        console.log(cancion.popularity)
        console.log(cancion.album.name)
        console.log(cancion.album.release_date)




    })


})
.catch(function(respuestaError){
    console.log(respuestaError)
})