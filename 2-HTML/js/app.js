var ans = document.getElementById('answer');
var qns = prompt('Cual es su Nombre?');

if(qns=='Jacke'){
	ans.innerHTML ="Bienvenido Administrador:"+qns;
}else{
	ans.innerHTML ="Bienvenido Visitante:"+qns;
	
}