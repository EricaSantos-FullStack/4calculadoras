function verificarCPF(){
    let cpf = document.getElementById("entrada").value 
    let resultado = ""
    let frase = ""

    //Obter terceiro segmento do CPF 111.222.333-DD
    let segmento = parseInt(cpf.split("-")[0].split(".")[2].split("")[2])

    switch(segmento){

        case 0:
            resultado = "Rio Grande do Sul"
            frase = "O seu CPF é do estado do "
            break
        case 1:
            resultado = "Distrito Federal, Goiás, Mato Grosso, Mato Grosso do Sul e Tocantins"
            frase = "O seu CPF é de um desses estados: "
            break
        case 2:
            resultado = "Amazonas, Pará, Roraima, Amapá, Acre e Rondônia"
            frase = "O seu CPF é de um desses estados da região Norte do país: "
            break
        case 3:
            resultado = "Ceará, Maranhão e Piauí"
            frase = "O seu CPF é de um desses estados: "
            break
        case 4:
            resultado = "Paraíba, Pernambuco, Alagoas e Rio Grande do Norte"
            frase = "O seu CPF é de um desses estados da região Nordeste do país: "
            break
        case 5:
            resultado = "Bahia e Sergipe"
            frase = "O seu CPF é de um desses estados: "
            break
        case 6:
            resultado = "Minas Gerais"
            frase = "Pãozinho de 🧀. Seu estado é "
            break
        case 7:
            resultado = "Rio de Janeiro e Espírito Santo"
            frase = "O seu CPF é de um desses estados: "
            break
        case 8:
            resultado = "São Paulo"
            frase = "O seu CPF é do estado de "
            break
        case 9:
            resultado = "Paraná e Santa Catarina"
            frase = "O seu CPF é de um desses estados da região Sul: "
            break

        default:
            console.log("Não é uma operação");
    }

    document.getElementById("saida").textContent = frase + resultado
}