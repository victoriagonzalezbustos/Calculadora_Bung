console.log("hola")

class Producto {
    constructor(material, cantidad, unidad, huella, emisiones){
        this.material = material,
        this.cantidad = cantidad,
        this.unidad = unidad,
        this.huella = huella
        this.emisiones = emisiones
    }
}

listahuellasMateriales =[]
listahuellasTransporte =[]
listahuellasMaquinaria =[]
listahuellasResiduos =[]

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
            unidad="tonelada"
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
    huellaMateriales= parseInt(document.getElementById("huellaMateriales").textContent)
    console.log(huellaMateriales)
    huellaMateriales = huellaMateriales + huellaCarbono
    console.log(huellaMateriales)
   
    contenedorhuellaMaterial = document.getElementById("huellaMateriales") 
    contenedorhuellaMaterial.innerText= huellaMateriales.toFixed(2)

    huellaCarbonoTotal = parseFloat(document.getElementById("huellaCarbonoTotal").textContent)
    console.log(huellaCarbonoTotal)
    huellaCarbonoTotal = huellaCarbonoTotal + huellaCarbono
    document.getElementById("huellaCarbonoTotal").innerHTML = huellaCarbonoTotal.toFixed(2)

    emisiones = ((huellaCarbono/huellaCarbonoTotal)*100).toFixed(2) + "%"
    product = new Producto(material, cantidad, unidad, huellaCarbono.toFixed(2),emisiones)
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
            <h1 class= "quintaLinea">
            ${product.emisiones}
            </h1>
        </div>
        `
        productlist.appendChild(element)
    }
addProduct(product)

arrayProductos = document.querySelectorAll(".quintaLinea")
console.log(arrayProductos)

listahuellasMateriales.push(huellaCarbono)
    

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
            break
        case "Colectivo/Combi":
            factorEmision = 0.0000965
            unidad ="km"
            break
        case "HGV":
            factorEmision = 0.00010445
            unidad ="km"
            break

    }

    console.log(cantidad)
    console.log(material)
    console.log(factorEmision)

    huellaCarbonoTransporte = cantidad * factorEmision
    console.log(huellaCarbonoTransporte)
    huellaTansporte= parseFloat(document.getElementById("huellaTransporte").textContent)
    console.log(huellaTansporte)
    huellaTransporte = huellaTansporte + huellaCarbonoTransporte
    console.log(huellaTransporte)

    contenedorhuellaTransporte = document.getElementById("huellaTransporte") 
    contenedorhuellaTransporte.innerText= huellaTransporte.toFixed(2)

    huellaCarbonoTotal = parseFloat(document.getElementById("huellaCarbonoTotal").textContent)
    console.log(huellaCarbonoTotal)
    huellaCarbonoTotal = huellaCarbonoTotal + huellaCarbonoTransporte
    document.getElementById("huellaCarbonoTotal").innerHTML = huellaCarbonoTotal.toFixed(2)

    emisiones = ((huellaCarbonoTransporte/huellaCarbonoTotal)*100).toFixed(2) + "%"
    product = new Producto(material, cantidad, unidad, huellaCarbonoTransporte.toFixed(2), emisiones)
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
            <h1 class= "quintaLinea">
            ${product.emisiones}
            </h1>
        </div>
        `
        productlist.appendChild(element)
    }
addProduct(product)

listahuellasTransporte.push()

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

    emisiones = ((huellaCarbonoMaquinaria/huellaCarbonoTotal)*100).toFixed(2) + "%"
    product = new Producto(material, cantidad, unidad, huellaCarbonoMaquinaria.toFixed(2), emisiones)
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
            <h1 class= "quintaLinea">
            ${product.emisiones}
            </h1>
        </div>
        `
        productlist.appendChild(element)
    }
addProduct(product)
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
            factorEmision = 0.828013544544062
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

    emisiones = ((huellaCarbonoResiduos/huellaCarbonoTotal)*100).toFixed(2) + "%"
    product = new Producto(material, cantidad, unidad, huellaCarbonoResiduos.toFixed(2), emisiones)
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
            <h1 class= "quintaLinea">
            ${product.emisiones}
            </h1>
        </div>
        `
        productlist.appendChild(element)
    }
addProduct(product)
})