function calcular()
{
    var campone = document.getElementById("a").value
    var camptwo = document.getElementById("b").value
    var camptree = document.getElementById("c").value
    var campfour = document.getElementById("d").value
    var camprova = document.getElementById("prova").value
    var result = document.getElementById("resultado")
    var imagem = document.getElementById("no")
    if (campone.length == '' || camptwo.length == '' || camptree.length == '' || campfour.length == '' || camprova.length == '')
    {
		alert("Não se esqueça de preencher todos os campos")
    }
    else
    {
    	//Atividades A1 até A4
    	var formato = Number(parseFloat(campone)+parseFloat(camptwo)+parseFloat(camptree)+parseFloat(campfour))
    	var div = (formato/4)*0.4
    	//Prova
    	var formato2 = Number(parseFloat(camprova))
    	var div2 = formato2*0.6
   		//Média final
    	var media = div+div2
    	//se passou AEEE se não.. 
    	if(media >= 6)
    	{
        	result.innerHTML = parseFloat(media.toFixed(2))+" | Você passou"
        	imagem.src = 'img/boa.gif'
    	}
   		else
    	{
        	result.innerHTML = parseFloat(media.toFixed(2))+" | Você não passou"
        	imagem.src = 'img/vish.gif'
    	}
    }
}