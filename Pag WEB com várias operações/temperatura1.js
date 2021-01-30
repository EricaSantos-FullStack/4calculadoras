function verificar_temperatura1(){
    let F = document.getElementById("entrada_temperatura1").value 
    let C = ""

//Processamento
    C = (F - 32) *  5 / 9;

//Saída
    document.getElementById("saida_temperatura1").textContent = "Temperatura em graus Celcius é: " + C
    

}