function verificar_par_ou_impar(){
    let numero = document.getElementById("entrada_par_ou_impar").value 


    if(numero % 2 == 0){
    document.getElementById("saida_par_ou_impar").textContent = "O número é par"

    }else{
    document.getElementById("saida_par_ou_impar").textContent = "O número é impar"
    }

}
