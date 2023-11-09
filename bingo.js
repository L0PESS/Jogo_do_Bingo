//Fileira e lista B
var id1 = document.getElementById("card-1")
var id2 = document.getElementById("card-6")
var id3 = document.getElementById("card-11")
var id4 = document.getElementById("card-16")
var id5 = document.getElementById("card-21")
var Lst_IdB = [id1,id2,id3,id4,id5]

//Fileira e lista I
var id6 = document.getElementById("card-2")
var id7 = document.getElementById("card-7")
var id8 = document.getElementById("card-12")
var id9 = document.getElementById("card-17")
var id10 = document.getElementById("card-22")
var Lst_IdI = [id6,id7,id8,id9,id10]

//Fileira e lista N
var id11 = document.getElementById("card-3")
var id12 = document.getElementById("card-8")
var id14 = document.getElementById("card-18")
var id15 = document.getElementById("card-23")
var Lst_IdN = [id11,id12,id14,id15]

//Fileira e lista G
var id16 = document.getElementById("card-4")
var id17 = document.getElementById("card-9")
var id18 = document.getElementById("card-14")
var id19 = document.getElementById("card-19")
var id20 = document.getElementById("card-24")
var Lst_IdG = [id16,id17,id18,id19,id20]

//Fileira e lista O
var id21 = document.getElementById("card-5")    
var id22 = document.getElementById("card-10") 
var id23 = document.getElementById("card-15")   
var id24 = document.getElementById("card-20")   
var id25 = document.getElementById("card-25")
var Lst_IdO = [id21,id22,id23,id24,id25]





//Botao de sortear cartela
function sorteioCartela(){
    document.body.querySelector('#btnSortear').style.visibility = 'visible'

    //chama cada função e verifica de acordo com a lista de ids
    filB(Lst_IdB)
    filI(Lst_IdI)
    filN(Lst_IdN)
    filG(Lst_IdG)
    filO(Lst_IdO)   
    
    document.body.querySelector('#btn-cartela').style.visibility = 'hidden'
    alert("Nova Rodada Iniciada")
    id.textContent=""
    for(var i = 0; i < 5; i++){
        Lst_IdB[i].style.backgroundColor = "rgb(0, 178, 223, 0.13)"
        Lst_IdB[i].style.color = "#000"
        Lst_IdI[i].style.backgroundColor = "rgb(0, 178, 223, 0.13)"
        Lst_IdI[i].style.color = "#000"
        Lst_IdG[i].style.backgroundColor = "rgb(0, 178, 223, 0.13)"
        Lst_IdG[i].style.color = "#000"
        Lst_IdO[i].style.backgroundColor = "rgb(0, 178, 223, 0.13)"
        Lst_IdO[i].style.color = "#000"
        Lst_IdN[i].style.backgroundColor = "rgb(0, 178, 223, 0.13)"
        Lst_IdN[i].style.color = "#000"
    }
}

//Function da filleira B
function filB(Lst_ID){
    var array = []
    var contador =0;
    for(var i = 0; i < 15; i++){
        var numA = GerarNumeroAleatorio(16)
        array.push(numA)    
        var listaSemRpeticao = [... new Set(array)]
        while(Object.values(listaSemRpeticao).length == 5 && contador < 5){ 
            Lst_ID[contador].innerHTML = listaSemRpeticao[contador]
            contador++;        
        }
    }
}

function filI(Lst_ID){
    var array = []
    var contador =0;
    for(var i = 0; i < 15; i++){
        var numA = GerarNumeroAleatorio2(16,31)
        array.push(numA)    
        var listaSemRpeticao = [... new Set(array)]
        while(Object.values(listaSemRpeticao).length == 5 && contador < 5){                                  
            Lst_ID[contador].innerHTML = listaSemRpeticao[contador]
            contador++;
        }
    }
}




function filN(Lst_ID){
    var array = []
    var contador =0;
    for(var i = 0; i < 15; i++){
        var numA = GerarNumeroAleatorio2(31,46)
        array.push(numA)    
        var listaSemRpeticao = [... new Set(array)]
        while(Object.values(listaSemRpeticao).length == 4 && contador < 4 ){                                  
            Lst_ID[contador].innerHTML = listaSemRpeticao[contador]
            contador++;
        }
    }
}

function filG(Lst_ID){
    var array = []
    var contador =0;
    for(var i = 0; i < 15; i++){
        var numA = GerarNumeroAleatorio2(46,61)
        array.push(numA)    
        var listaSemRpeticao = [... new Set(array)]
        while(Object.values(listaSemRpeticao).length == 5 && contador < 5){                                  
            Lst_ID[contador].innerHTML = listaSemRpeticao[contador]
            contador++;
        }
    }
}

function filO(Lst_ID){   
        var array = []
        var contador =0;   
        for(var i = 0; i < 15; i++){
            var numA = GerarNumeroAleatorio2(61,76)
            array.push(numA)    
            var listaSemRpeticao = [... new Set(array)]
            while(Object.values(listaSemRpeticao).length == 5 && contador < 5){
                Lst_ID[contador].innerHTML = listaSemRpeticao[contador]
                contador++;
            }           
        }    
    }

function checarNumCart(numeroSorteado){
    for(var i = 0; i < 5;i++)
    {
        if(numeroSorteado == Lst_IdB[i].innerHTML)
        {
            Lst_IdB[i].style.backgroundColor = "#020c40"
            Lst_IdB[i].style.color = "#fff"
        }
        if(numeroSorteado == Lst_IdI[i].innerHTML){
            Lst_IdI[i].style.backgroundColor = "#020c40"
            Lst_IdI[i].style.color = "#fff"
        }
        if(numeroSorteado == Lst_IdG[i].innerHTML){
            Lst_IdG[i].style.backgroundColor = "#020c40"
            Lst_IdG[i].style.color = "#fff"
        }
        if(numeroSorteado == Lst_IdO[i].innerHTML){
            Lst_IdO[i].style.backgroundColor = "#020c40"
            Lst_IdO[i].style.color = "#fff"
        }
        if(numeroSorteado == Lst_IdN[i].innerHTML){
            Lst_IdN[i].style.backgroundColor = "#020c40"
            Lst_IdN[i].style.color = "#fff"
        }
    }
}

//Verfica se o numero Sorteado ja tem no array
var id = document.getElementById("sorteio")
var btnArray = new Set()
function btnSorteio(){
    var numA = GerarNumeroAleatorio(76)
    console.log(btnArray)
    if(btnArray.has(numA) == false){
        btnArray.add(numA) 
        id.innerHTML = numA  
        checarNumCart(numA)  
    }
    else if(btnArray.size == 75){
        alert('Todos os Números Foram Sorteados')
        document.body.querySelector('#btnSortear').style.visibility = 'hidden'
        btnArray.clear()
        document.body.querySelector('#btn-cartela').style.visibility = 'visible'  
    }
    else{
        btnSorteio()
    } 
}
function GerarNumeroAleatorio2(min,maximo)
{
    var numeroRetorno =  Math.random() * (maximo - min) + min
    numeroRetorno = Math.floor(numeroRetorno)
    if(numeroRetorno > 0)
    {
        return numeroRetorno
    }else{
        return GerarNumeroAleatorio2(min,maximo)
    
    }
}   
//function Original  de gerar numero aleatorio
function GerarNumeroAleatorio(maximo)
{
    var numeroRetorno =  Math.random() * maximo 
    numeroRetorno = Math.floor(numeroRetorno)
    if(numeroRetorno > 0)
    {
        return numeroRetorno
    }else{
        return GerarNumeroAleatorio(maximo)
    
    }
}