console.log("hola")

class Producto {
    constructor(material, cantidad, huella){
        this.material = material,
        this.cantidad = cantidad,
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






























botonMateriales = document.getElementById("botonMateriales")

botonMateriales.addEventListener("click",
    function CalcularMateriales(){
    let material = document.getElementById("selectMaterial").value
    let cantidad = document.getElementById("cantidadMaterial").value
    /*switch (material){
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

    }*/

    factorEmision =  0.00000600 

    huellaCarbono = cantidad * factorEmision * material
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

  

 





   
    product = new Producto(material, cantidad, huellaCarbono.toFixed(2))
   

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
    /*switch (material){
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

    }*/

    if(material <= 10){
        factorEmision = 0.000616
    }else if(material > 10 && material < 20){
        factorEmision = 0.000766
    } else {
        factorEmision = 0.000917
    }

    huellaCarbonoTransporte = factorEmision *cantidad

    console.log(huellaCarbonoTransporte)
    
    huellaTansporte= parseFloat(document.getElementById("huellaTransporte").textContent)
  
    huellaTransporte = huellaTansporte + huellaCarbonoTransporte
   

    contenedorhuellaTransporte = document.getElementById("huellaTransporte") 
    contenedorhuellaTransporte.innerText= huellaTransporte.toFixed(2)

    huellaCarbonoTotal = parseFloat(document.getElementById("huellaCarbonoTotal").textContent)
   
    huellaCarbonoTotal = huellaCarbonoTotal + huellaCarbonoTransporte
    document.getElementById("huellaCarbonoTotal").innerHTML = huellaCarbonoTotal.toFixed(2)


    product = new Producto(material, cantidad, huellaCarbonoTransporte.toFixed(2))
   

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
    /*switch (material){
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

    }*/
    factorEmision = 0.00002779

    huellaCarbonoMaquinaria = cantidad * factorEmision * material   
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


    product = new Producto(material, cantidad, huellaCarbonoMaquinaria.toFixed(2))


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


