let listaDePecas = ["abc", "abc", "abc"];

//verifica se a lista de peças tem - de 10 itens
if(listaDePecas.length < 10){
    //ainda é possível adicionar peças
    console.log("Ainda é possível cadstrar mais peças")
}else{
    //não é possível adicionar peças
    console.log("Não é possível cadastrar mais peças")
}

let peso = 120
//verifica se o peso é maior que 100
if(peso >= 100){
    //o peso da peça é ideal
    console.log("O peso da peça é ideal")
}else{
    //o peso não é ideal
    console.log("A peça é mais leve do que o recomendado")
}

let nomeDaPeça = ""
//verifica se o número de caracteres do nome da peça é ideal
if(nomeDaPeça.length >= 3){
    console.log("o nome da peça é ideal")
}else if(nomeDaPeça.length == 0){
    console.log("o nome da peça não pode ser vazio")
}else{
    console.log("o nome da peça é curto demais, tente digitar novamente")
}