let setaDireita =  window.document.getElementById("seta-direita")
let Leonardo = window.document.getElementById("Leonardo")
let Samanta = window.document.getElementById("Samanta")
let Bruna = window.document.getElementById("Bruna")
let setaEsquerda =  window.document.getElementById("seta-esquerda")


function RolarParaDireita(){    
    Leonardo.style ="display:none"
    Bruna.style ="display:flex"
    setaEsquerda.style ="display:flex; margin-top center;"
    setaDireita.style ="display:none; margin-top center;"
    }
function RolarParaEsquerda(){
        Leonardo.style ="display:flex"
        Bruna.style ="display:none"
        setaDireita.style ="display:flex; margin-top center;"
        setaEsquerda.style ="display:none; margin-top center;"
    }    

function scrollToElement() {
        const element = document.getElementById('target-element');
        element.scrollIntoView({ behavior: 'smooth' });
      }
      