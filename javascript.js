const calcular = document.getElementById('calcular');

function Idade(){
const dataAtual = new Date();
const data = ((dataAtual.getDate())+"/"+(dataAtual.getMonth()+1)+"/"+dataAtual.getFullYear());
const nome = document.getElementById('nome').value;
const dataDN = document.getElementById('DN').value;
const DN_String = dataDN.split('/');
const anoDN = DN_String[0];
const DN = new Date(anoDN);

const idade = Math.abs(dataAtual.getTime()-DN.getTime());
const idadeAno = Math.trunc(Math.ceil(idade/(1000*60*60*24))/365);

let classificacao = '';

if(idadeAno < 12 ){
classificacao = 'Infância';
}else if(idadeAno < 20){
classificacao = 'Adolescência';
}else if(idadeAno < 75){
classificacao = 'Vida Adulta';
}else{
classificacao = 'Velhice';
}

const resultado = document.getElementById('resultado');

resultado.textContent = `Olá ${nome}, a data de hoje é ${data}, você tem ${idadeAno} anos, e está na fase da ${classificacao}.`;
}

calcular.addEventListener('click', Idade);
