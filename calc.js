/*Aqui é onde declaro as variaveis de todos os numeros para pode chamar eles no campo de resposta*/
let num1=document.getElementById('um');
let num2 = document.getElementById('dois');
let num3 = document.getElementById('tres');
let num4 = document.getElementById('quatro');
let num5 = document.getElementById('cinco');
let num6 = document.getElementById('seis');
let num7 = document.getElementById('sete');
let num8 = document.getElementById('oito');
let num9 = document.getElementById('nove');
let num0 = document.getElementById('zero');

let limpar = document.getElementById('limpar');
let apagar = document.getElementById('apagar');
let dividir = document.getElementById('dividir');
let vezes = document.getElementById('vezes');
let menos = document.getElementById('menos');
let mais = document.getElementById('mais');
let igual = document.getElementById('igual');
let ponto = document.getElementById('ponto');
//Essa é a função para inserir os números
function insert(num){
    //Essa maneira facilita 
   let numero=document.getElementById('resultado').innerHTML;
   document.getElementById('resultado').innerHTML=numero+num;
}
//função para limpar o campo de resposta todo...(não consegui usar outro nome na função)
function clean()
{
    document.getElementById('resultado').innerHTML="";
}

//função que apaga somente um valor(usando o comando substring e aplicando os parâmetros nele)
function back(){
    let resultado=document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML=resultado.substring(0,resultado.length -1)
}

//função para calcular as operações 
//foi usado o comando "eval" que de alguma maneira realiza automaticamente as operações
function calcular(){
    let resultado=document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML=eval(resultado);
    }else{
        document.getElementById('resultado').innerHTML='Zero...'
    }
}