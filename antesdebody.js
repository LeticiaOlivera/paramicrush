let encabezados = "";

window.onclick = function (){
    //Crea una serie de elements por cada tag encontrado
    let encabezados = document.createElement("h1");
    const text = document.createTextNode("¿Quieres ser mi morro?");

    encabezados.appendChild(text);
    document.body.appendChild(encabezados);
}

encabezados.appendChild("<h2>ESTE ES UN SUBTITULO</h2>")