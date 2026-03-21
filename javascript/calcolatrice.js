function clickButton(elemento) {
    let inputText = document.getElementById("operandi");
    if(elemento.textContent !== "=")
        inputText.value += elemento.textContent;   
} 
function resetButton() {
    document.getElementById("operandi").value = "";
} 
function cancButton() {
    let inputText = document.getElementById("operandi").value;
    let input = document.getElementById("operandi");
    input.value = inputText.slice(0, -1);
    
}

function getOperation(elemento) {
    clickButton(elemento);
    let operandi = document.getElementById("operandi").value;
    let inputText = document.getElementById("operandi");
    let operando1;
    let operando2;
    let risultato;
    let regex = /[+\-x/√%]/;
    let operatoreTrovato = operandi.match(regex)[0];
    let indice = operandi.search(regex);
    if(indice === -1) return;
    operando1 = parseFloat(operandi.substring(0, indice));
    operando2 = parseFloat(operandi.substring(indice+1, operandi.length));

    
    switch(operatoreTrovato) {
        case "+": risultato = operando1 + operando2; break;
        case "-": risultato = operando1 - operando2; break;
        case "%": risultato = operando1 % operando2; break;
        case "/": risultato = operando1 / operando2; break;
        case "x": risultato = operando1 * operando2; break;
        case "√": 
            if(!isNaN(operando1) && isNaN(operando2)) risultato = Math.sqrt(operando1);
            else risultato = Math.sqrt(operando2);
            break;
    }
    
    if(elemento.textContent === "=") {
        inputText.value = risultato;
    }
}

