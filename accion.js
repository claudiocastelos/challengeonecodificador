

       var textoOriginal = document.querySelector(".textoOriginal");
       var textoEncriptado = document.querySelector(".textoEncriptado");

       
        function btencriptar(){

            const texto_Original = encriptar (textoOriginal.value   );
            textoEncriptado.value = texto_Original;

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

   