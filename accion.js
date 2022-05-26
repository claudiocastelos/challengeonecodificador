

       var textoOriginal = document.querySelector(".textoOriginal");
       var textoEncriptado = document.querySelector(".textoEncriptado");

       
        function btencriptar(){

            const texto_Original = encriptar (textoOriginal.value   );
            textoEncriptado.value = texto_Original;
            textoOriginal.value ="";

        }

        function encriptar(texto){

            let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","over"],["u","ufat"]];

           // texto = texto.toLowerCase();

            for(let i=0;i< matrizCodigo.length; i++){
                if(texto.includes(matrizCodigo[i][0])){
                    texto = texto.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
                }
            }
            return texto;
        }
//----------------------------------------------------------------------------------------------------------------------
function btdesencriptar(){

    const texto_Original = desencriptar (textoEncriptado.value   );
    textoOriginal.value = texto_Original;
    textoEncriptado.value ="";

}   


    function desencriptar(texto){

            let matrizCodigo = [["enter","e"],["imes","i"],["ai","a"],["over","o"],["ufat","u"]];


            for(let i=0;i< matrizCodigo.length; i++){
                if(texto.includes(matrizCodigo[i][0])){
                    texto = texto.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
                }
            }
            return texto;

        }

       // textoOriginal.value = desencriptar(textoEncriptado);
   