function trocar(){
    let tipo = document.getElementById("veiculo").value
if(tipo == "basico"){
    document.getElementById("imagem").src="basico.png"
    document.getElementById("valor").innerHTML = "99"
}else if(tipo == "esporte"){
    document.getElementById("imagem").src="esporte.png"
    document.getElementById("valor").innerHTML = "159"
}else{
    document.getElementById("imagem").src="completo.png"
    document.getElementById("valor").innerHTML = "199"
}
}    
