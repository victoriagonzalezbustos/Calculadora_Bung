console.log("hola")

class Producto {
    constructor(material, cantidad, unidad, huella){
        this.material = material,
        this.cantidad = cantidad,
        this.unidad = unidad,
        this.huella = huella
    }
}

let porcentaje = 0 
listaPorcentajes=[]



selectMaterial = document.getElementById("selectMaterial")

selectMaterial.addEventListener("change",
function CambiarUnidad(){
     materialElegido = selectMaterial.value
     switch(materialElegido){
        case "Cemento Portland":
            unidad = "tonelada"
            document.getElementById("unidadMateriales").innerHTML = unidad
           
            break
        case "Hormigón elaborado":
            unidad = "tonelada"
            document.getElementById("unidadMateriales").innerHTML = unidad
            break
        case "Varillas de acero":
            unidad = "metros"
            document.getElementById("unidadMateriales").innerHTML = unidad
            break
        case "Asfalto":
            unidad = "tonelada"
            document.getElementById("unidadMateriales").innerHTML = unidad
            break
        case "Agregados y arena":
            unidad = "tonelada"
            document.getElementById("unidadMateriales").innerHTML = unidad
            break
        case "Tuberías PVC":
            unidad = "metros"
            document.getElementById("unidadMateriales").innerHTML = unidad
            break
        case "Tuberías acero":
            unidad = "metros"
            document.getElementById("unidadMateriales").innerHTML = unidad
            break
        case "Ladrillos":
            unidad = "tonelada"
            document.getElementById("unidadMateriales").innerHTML = unidad
            break
        case "Pintura":
            unidad = "litros"
            document.getElementById("unidadMateriales").innerHTML = unidad
            break
        case "Agua":
            unidad = "m3"
            document.getElementById("unidadMateriales").innerHTML = unidad
            break
     }
})



selectTransporte = document.getElementById("selectTransporte")

selectTransporte.addEventListener("change",
function CambiarUnidadTransporte(){
     materialElegidoTransporte = selectTransporte.value
     switch(materialElegidoTransporte){
            case "Privados":
                unidad ="km"
                document.getElementById("unidadTransporte").innerHTML = unidad
                break
            case "Colectivo/ Combi":
                unidad ="km"
                document.getElementById("unidadTransporte").innerHTML = unidad
                break
            case "HGV":
                unidad ="km"
                document.getElementById("unidadTransporte").innerHTML =  `<input class= "campoCarga" id="campoTransportedecarga" type="text" placeholder="Tonelada">`

                break
    
        
     }
})



selectMaquinaria = document.getElementById("selectMaquinaria")

selectMaquinaria.addEventListener("change",
function CambiarUnidadMaquinaria(){
     materialElegidoMaquinaria = selectMaquinaria.value
     switch(materialElegidoMaquinaria){
            case "Diesel":
                unidad= "litro"
                document.getElementById("unidadMaquinaria").innerHTML = unidad
                break
            case "Fuel oil":
                unidad= "litro"
                document.getElementById("unidadMaquinaria").innerHTML = unidad
                break
            case "GLP":
                unidad= "litro"
                document.getElementById("unidadMaquinaria").innerHTML = unidad
                break
            case "Nafta":
                unidad= "litro"
                document.getElementById("unidadMaquinaria").innerHTML = unidad
                break
            case "Gas natural":
                unidad= "m3"
                document.getElementById("unidadMaquinaria").innerHTML = unidad
                break
        
     }
})





selectResiduos= document.getElementById("selectResiduos")

selectResiduos.addEventListener("change",
function CambiarUnidadResiduos(){
     materialElegidoResiduos = selectResiduos.value
     switch(materialElegidoResiduos){
        case "Construcción y demolición":
            
            unidad="tonelada"
            document.getElementById("unidadResiduos").innerHTML = unidad
            break
        case "Plástico":
            unidad="tonelada"
            document.getElementById("unidadResiduos").innerHTML = unidad

            break
        case "Vidrio":
            unidad="tonelada"
            document.getElementById("unidadResiduos").innerHTML = unidad

            break
        case "Madera":
            unidad="tonelada"
            document.getElementById("unidadResiduos").innerHTML = unidad

            break
        case "Metales":
            unidad="tonelada"
            document.getElementById("unidadResiduos").innerHTML = unidad

            break
        
     }
})

























botonMateriales = document.getElementById("botonMateriales")

botonMateriales.addEventListener("click",
    function CalcularMateriales(){
    let material = document.getElementById("selectMaterial").value
    let cantidad = document.getElementById("cantidadMaterial").value
    switch (material){
        case "Cemento Portland":
            factorEmision = 0.912
            unidad = "tonelada"
           
            break
        case "Hormigón elaborado":
            factorEmision = 0.103
            unidad = "tonelada"
            break
        case "Varillas de acero":
            factorEmision = 1.99
            unidad="metros"
            break
        case "Asfalto":
            factorEmision = 0.055
            unidad = "tonelada"
            break
        case "Agregados y arena":
            factorEmision = 0.007
            unidad = "tonelada"
            break
        case "Tuberías PVC":
            factorEmision = 0.010
            unidad = "metros"
            break
        case "Tuberías acero":
            factorEmision = 0.042
            unidad = "metros"
            break
        case "Ladrillos":
            factorEmision = 0.205
            unidad = "tonelada"
            break
        case "Pintura":
            factorEmision = 0.045
            unidad = "litros"
            break
        case "Agua":
            factorEmision = 0.000344
            unidad = "m3"
            break

    }

    huellaCarbono = cantidad * factorEmision
    huellaMateriales= parseFloat(document.getElementById("huellaMateriales").textContent)
    huellaMateriales = huellaMateriales + huellaCarbono
  
   
    contenedorhuellaMaterial = document.getElementById("huellaMateriales") 
    contenedorhuellaMaterial.innerText= huellaMateriales.toFixed(2)


    huellaCarbonoTotal = parseFloat(document.getElementById("huellaCarbonoTotal").textContent)
    console.log(huellaCarbonoTotal)
    huellaCarbonoTotal = huellaCarbonoTotal + huellaCarbono
    document.getElementById("huellaCarbonoTotal").innerHTML = huellaCarbonoTotal.toFixed(2)

    

   listaPorcentajes = []
   listaHuellas = document.querySelectorAll(".huellita")
   listaHuellas.forEach(element => {
    
     a = (parseFloat(element.textContent)/huellaCarbonoTotal.toFixed(2)) * 100
     console.log(a)
     listaPorcentajes.push(a)

   });

   console.log(listaPorcentajes)

   listaPorcentajeshtml = document.querySelectorAll(".porcentajeEmisiones")
   console.log(listaPorcentajeshtml)

   for (let i in listaPorcentajes){
    listaPorcentajeshtml[i].innerHTML = listaPorcentajes[i].toFixed(2) + "%"
   }

  

 





   
    product = new Producto(material, cantidad, unidad, huellaCarbono.toFixed(2))
   

    function addProduct(product){
        var productlist = document.getElementById("listaEmisiones")
        var element = document.createElement("div")
        element.innerHTML = `
        <div class= "titulos">
            <h1 class=primeraLinea>
            ${product.material}
            </h1>
            <h1 class=segundaLinea>
            ${product.cantidad}
            </h1>
            <h1 class=terceraLinea>
            ${product.unidad}
            </h1>
            <h1 class=cuartaLinea>
            ${product.huella}
            </h1>
        </div>
        `
        productlist.appendChild(element)
    }
addProduct(product)

/*
listaPorcentajeEmisiones.push(huellaCarbono.toFixed(2))
listaPorcentajeEmisionesCorregidas = []
for(let i in listaPorcentajeEmisiones){
    
    emisionCorregida= parseFloat(i)/huellaCarbonoTotal
    listaPorcentajeEmisionesCorregidas.push(emisionCorregida.toFixed(2))
  
}

listaCampoPorcentajeEmisiones = document.querySelectorAll(".quintaLinea")
console.log(listaCampoPorcentajeEmisiones)
for ( i in  listaPorcentajeEmisionesCorregidas){
    indexi = i.indexOf()

}*/

    

})





botonTransporte = document.getElementById("botonTransporte")

botonTransporte.addEventListener("click",
function CalcularTransporte(){
    let material = document.getElementById("selectTransporte").value
    let cantidad = document.getElementById("cantidadTransporte").value
    switch (material){
        case "Privados":
            factorEmision = 0.00017067
            unidad ="km"
            huellaCarbonoTransporte = cantidad * factorEmision
            break
        case "Colectivo/ Combi":
            factorEmision = 0.0000965
            unidad ="km"
            huellaCarbonoTransporte = cantidad * factorEmision
            break
        case "HGV":
            toneladasCarga = document.getElementById("campoTransportedecarga").value
            factorEmision = 0.00010445
            unidad ="km"
            huellaCarbonoTransporte = cantidad * factorEmision *toneladasCarga
            break

    }

    console.log(huellaCarbonoTransporte)
    
    huellaTansporte= parseFloat(document.getElementById("huellaTransporte").textContent)
  
    huellaTransporte = huellaTansporte + huellaCarbonoTransporte
   

    contenedorhuellaTransporte = document.getElementById("huellaTransporte") 
    contenedorhuellaTransporte.innerText= huellaTransporte.toFixed(2)

    huellaCarbonoTotal = parseFloat(document.getElementById("huellaCarbonoTotal").textContent)
   
    huellaCarbonoTotal = huellaCarbonoTotal + huellaCarbonoTransporte
    document.getElementById("huellaCarbonoTotal").innerHTML = huellaCarbonoTotal.toFixed(2)


    product = new Producto(material, cantidad, unidad, huellaCarbonoTransporte.toFixed(2))
   

    function addProduct(product){
        var productlist = document.getElementById("listaEmisiones")
        var element = document.createElement("div")
        element.innerHTML = `
        <div class= "titulos">
            <h1 class=primeraLinea>
            ${product.material}
            </h1>
            <h1 class=segundaLinea>
            ${product.cantidad}
            </h1>
            <h1 class=terceraLinea>
            ${product.unidad}
            </h1>
            <h1 class=cuartaLinea>
            ${product.huella}
            </h1>
        </div>
        `
        productlist.appendChild(element)
    }
addProduct(product)

listaPorcentajes = []
listaHuellas = document.querySelectorAll(".huellita")
listaHuellas.forEach(element => {
 
  a = (parseFloat(element.textContent)/huellaCarbonoTotal.toFixed(2)) * 100
  
  listaPorcentajes.push(a)

});



listaPorcentajeshtml = document.querySelectorAll(".porcentajeEmisiones")


for (let i in listaPorcentajes){
 listaPorcentajeshtml[i].innerHTML = listaPorcentajes[i].toFixed(2) + "%"
}



})


botonMaquinaria = document.getElementById("botonMaquinaria")

botonMaquinaria.addEventListener("click",
function CalcularMaquinaria(){
    let material = document.getElementById("selectMaquinaria").value
    let cantidad = document.getElementById("cantidadMaquinaria").value
    switch (material){
        case "Diesel":
            factorEmision = 0.00276
            unidad= "litro"
            break
        case "Fuel oil":
            factorEmision = 0.00317
            unidad= "litro"
            break
        case "GLP":
            factorEmision = 0.00156
            unidad= "litro"
            break
        case "Nafta":
            factorEmision = 0.00212
            unidad= "litro"
            break
        case "Gas natural":
            factorEmision = 0.00204
            unidad= "m3"
            break

    }


    huellaCarbonoMaquinaria = cantidad * factorEmision
    console.log(huellaCarbonoMaquinaria)
    huellaMaquinaria= parseFloat(document.getElementById("HuellaMaquinaria").textContent)
    console.log(huellaMaquinaria)
    huellaMaquinaria = huellaMaquinaria + huellaCarbonoMaquinaria
    console.log(huellaMaquinaria)

    contenedorhuellaMaquinaria = document.getElementById("HuellaMaquinaria") 
    contenedorhuellaMaquinaria.innerText= huellaMaquinaria.toFixed(2)

    huellaCarbonoTotal = parseFloat(document.getElementById("huellaCarbonoTotal").textContent)
    console.log(huellaCarbonoTotal)
    huellaCarbonoTotal = huellaCarbonoTotal + huellaCarbonoMaquinaria
    document.getElementById("huellaCarbonoTotal").innerHTML = huellaCarbonoTotal.toFixed(2)


    product = new Producto(material, cantidad, unidad, huellaCarbonoMaquinaria.toFixed(2))


    function addProduct(product){
        var productlist = document.getElementById("listaEmisiones")
        var element = document.createElement("div")
        element.innerHTML = `
        <div class= "titulos">
            <h1 class=primeraLinea>
            ${product.material}
            </h1>
            <h1 class=segundaLinea>
            ${product.cantidad}
            </h1>
            <h1 class=terceraLinea>
            ${product.unidad}
            </h1>
            <h1 class=cuartaLinea>
            ${product.huella}
            </h1>
        </div>
        `
        productlist.appendChild(element)
    }
addProduct(product)
listaPorcentajes = []
listaHuellas = document.querySelectorAll(".huellita")
listaHuellas.forEach(element => {
 
  a = (parseFloat(element.textContent)/huellaCarbonoTotal.toFixed(2)) * 100
  console.log(a)
  listaPorcentajes.push(a)

});

console.log(listaPorcentajes)

listaPorcentajeshtml = document.querySelectorAll(".porcentajeEmisiones")
console.log(listaPorcentajeshtml)

for (let i in listaPorcentajes){
 listaPorcentajeshtml[i].innerHTML = listaPorcentajes[i].toFixed(2) + "%"
}

})


botonResiduos = document.getElementById("botonResiduos")

botonResiduos.addEventListener("click",
function CalcularResiduos(){
    let material = document.getElementById("selectResiduos").value
    let cantidad = document.getElementById("cantidadResiduos").value
    switch (material){
        case "Construcción y demolición":
            factorEmision = 0.0930886907112728
            unidad="tonelada"
            break
        case "Plástico":
            factorEmision = 0.00888327131782946
            unidad="tonelada"

            break
        case "Vidrio":
            factorEmision = 0.00888327131782946
            unidad="tonelada"

            break
        case "Madera":
            factorEmision = 0.00828013544544062
            unidad="tonelada"

            break
        case "Metales":
            factorEmision = 0.00888327131782946
            unidad="tonelada"

            break

    }


    huellaCarbonoResiduos = cantidad * factorEmision
    console.log(huellaCarbonoResiduos)
    huellaResiduos= parseFloat(document.getElementById("huellaResiduos").textContent)
    console.log(huellaResiduos)
    huellaResiduos = huellaResiduos + huellaCarbonoResiduos
    console.log(huellaResiduos)

    contenedorhuellaResiduos = document.getElementById("huellaResiduos") 
    contenedorhuellaResiduos.innerText= huellaResiduos.toFixed(2)

    huellaCarbonoTotal = parseFloat(document.getElementById("huellaCarbonoTotal").textContent)
    console.log(huellaCarbonoTotal)
    huellaCarbonoTotal = huellaCarbonoTotal + huellaCarbonoResiduos 
    document.getElementById("huellaCarbonoTotal").innerHTML = huellaCarbonoTotal.toFixed(2)

    product = new Producto(material, cantidad, unidad, huellaCarbonoResiduos.toFixed(2))
    console.log(product)

    function addProduct(product){
        var productlist = document.getElementById("listaEmisiones")
        var element = document.createElement("div")
        element.innerHTML = `
        <div class= "titulos">
            <h1 class=primeraLinea>
            ${product.material}
            </h1>
            <h1 class=segundaLinea>
            ${product.cantidad}
            </h1>
            <h1 class=terceraLinea>
            ${product.unidad}
            </h1>
            <h1 class=cuartaLinea>
            ${product.huella}
            </h1>
        </div>
        `
        productlist.appendChild(element)
    }
addProduct(product)
listaPorcentajes = []
listaHuellas = document.querySelectorAll(".huellita")
listaHuellas.forEach(element => {
 
  a = (parseFloat(element.textContent)/huellaCarbonoTotal.toFixed(2)) * 100
  console.log(a)
  listaPorcentajes.push(a)

});

console.log(listaPorcentajes)

listaPorcentajeshtml = document.querySelectorAll(".porcentajeEmisiones")
console.log(listaPorcentajeshtml)

for (let i in listaPorcentajes){
 listaPorcentajeshtml[i].innerHTML = listaPorcentajes[i].toFixed(2) + "%"
}

})