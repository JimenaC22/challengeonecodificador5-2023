const textoEncriptador = document.getElementById("texto-encriptador");
const btnEncriptar = document.getElementById("btn-encriptar");
const btnDesencriptar = document.getElementById("btn-desencriptar");
const btnCopiar = document.getElementById("btn-copiar");
const textoResultado = document.getElementById("resultado");
const contMunheco = document.getElementById("container-munheco");
const info = document.getElementById("informacion");
const ingreso = document.getElementById("ingreso");
/* 
e - enter
o -ober
i - imes
a - ai
u - ufat */

let reemplazar = [ 
    ["e", "enter"], 
    ["o", "ober"], 
    ["i", "imes"], 
    ["a" , "ai"], 
    ["u" , "ufat"],
];

const replace = (nuevoValor) =>{
    textoResultado.innerHTML = nuevoValor;
    
    textoEncriptador.value="";
    contMunheco.style.display = "none";
    info.style.display ="none";
    ingreso.style.display ="none";
    btnCopiar.style.display = "block";
};

btnEncriptar.addEventListener("click", () => {
    const texto = textoEncriptador.value.toLocaleLowerCase()
        function encriptar(newText){
            for(let i=0; i < reemplazar.length; i++){
                if(newText.includes(reemplazar[i][0])){
                    newText = newText.replaceAll(reemplazar[i][0], reemplazar[i][1]);
                };
            };
        return newText;
        };
    replace(encriptar(texto));
})

btnDesencriptar.addEventListener("click", () => {
    const texto = textoEncriptador.value.toLocaleLowerCase();
        function desencriptar(newText){
            for(let i =0; i < reemplazar.length; i++){
                if(newText.includes(reemplazar[i][0])){
                    newText = newText.replaceAll(reemplazar[i][1], reemplazar[i][0]);
                };
            };
        return newText;
        };
    replace(desencriptar(texto));
})

btnCopiar.addEventListener("click", ()=>{
    let texto = textoResultado;
    /* navigator.clipboard.writeText(texto.value); */
    texto.select();
    document.execCommand("copy");
    alert("Texto copiado con exito");

    textoResultado.innerHTML ="";
    contMunheco.style.display = "block";
    info.style.display ="block";
    ingreso.style.display ="block";
    btnCopiar.style.display = "none";
    textoEncriptador?.focus();
})