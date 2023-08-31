    var altura = 0
    var largura = 0
    var vidas = 1
    var tempo = 10
    var nivelMosquito = 1500
    /*Independente do nome da variavel , o window.location.search vai buscar o nivel selecionado*/ 
    var nivel = window.location.search
    nivel = nivel.replace('?','')

    if(nivel === 'facil'){
        nivelMosquito = 1500
    } else if(nivel === 'normal'){
        nivelMosquito = 1000
    } else if(nivel === 'dificil'){
        nivelMosquito = 750
    }



    function ajustarPosicaoDaTela(){

        altura = window.innerHeight
        largura = window.innerWidth
        
    }
    
    ajustarPosicaoDaTela()

    var cronometro = setInterval(function(){

        tempo -= 1

        if(tempo < 0 ){
            
            clearInterval(cronometro)
            clearInterval(criaMosquito)
            window.location.href = 'vitoria.html'

        } else {
            
            document.getElementById('cronometro').innerHTML = tempo
        }

       
        

    }, 1000)


    function posicaoAleatoria(){

        if(document.getElementById('mosquito')){
            document.getElementById('mosquito').remove()

            if(vidas > 3){
                window.location.href = 'fimdogame.html'
            }

            else{
                document.getElementById('v'+ vidas).src = "imagens/coracao_vazio.png"

                vidas++
            }
        }

        
        
        var posicaoX = Math.floor(Math.random() * largura) - 90
        var posicaoY = Math.floor(Math.random() * altura) - 90

        posicaoX = posicaoX < 0 ? 0 : posicaoX
        posicaoY = posicaoY < 0 ? 0 : posicaoY

        console.log(posicaoX, posicaoY)

        var mosquito = document.createElement('img')
        mosquito.src = 'imagens/mosca.png'
        mosquito.className = alterarTamanho() + ' ' + inverterMosca()
        mosquito.style.left = posicaoX + "px"
        mosquito.style.top = posicaoY + "px"
        mosquito.style.position = "absolute"
        mosquito.id = 'mosquito'
        /*Interrompe o processamento , assim nao gerando +1 em vidas*/ 
        mosquito.onclick = function (){
            this.remove() }

        document.body.appendChild(mosquito)
    }

    function alterarTamanho(){
        var classe = Math.floor(Math.random() * 3)

        switch(classe){
            case 0: 
            return 'mosquito1'

            case 1:
            return 'mosquito2'

            case 2:
            return 'mosquito3'
        }
        
    }

    function inverterMosca(){
        var lados = Math.floor(Math.random() * 2)

        switch(lados){
            case 0:
            return 'ladoA'

            case 1:
            return 'ladoB'    
            
        }
    }

    
  
    
    
    
