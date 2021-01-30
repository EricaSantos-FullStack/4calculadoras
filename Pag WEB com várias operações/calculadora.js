function calcular(event){
    let num1 = parseFloat(document.getElementById("numero1").value)
    let num2 = parseFloat (document.getElementById("numero2").value)
    let operacao = event.target.textContent
    let resultado
    let frase

    switch (operacao) {
        case "+":
            console.log("soma");
            resultado = num1 + num2
            frase = "Você e seu amigo tem "
            break;

            case "-":
            console.log("subtração");
            resultado = num1 - num2
            frase = "Restaram apenas "
            break;

            case "*":
            console.log("multiplicação");
            resultado = num1 * num2
            frase = "✨ O resultado da multiplicação é de "
            break;

            case "/":
            console.log("divisão");
            resultado = (num1 + num2) / 2
            frase = "Se dividirmos, cada um vai ficar com "
            break;
    
        default:
            console.log("Não é uma operação");
    }

    document.getElementById("resultado").textContent = frase + resultado + " maçãs 🍎"

}