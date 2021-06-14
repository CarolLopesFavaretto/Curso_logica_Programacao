function calculaIMC(peso,altura) {
    var imc = peso / (altura**2);
    return imc
}

function verificaIMC ( imc ) {
    var situação = null;

    if (imc < 18.5) {
        situação = 'Magreza';
    } else if (imc >= 18.5 && imc <= 24.9) {
        situação = 'Normal';
    } else if (imc > 24.9 && imc <= 30) {
        situação = 'Sobrepeso';
    } else {
        situação = 'Obesidade';
}

return situação; 
}

function mostraPaciente (paciente){
    var imc =calculaIMC (paciente.peso, paciente.altura);
    var situacao = verificaIMC (imc);

var spanNome = document.getElementById("nome");     //<span id="nome"></span>
spanNome.innerHTML = paciente.nome;

var spanPeso = document.getElementById("peso");     //<span id="peso"></span>
spanPeso.innerHTML = paciente.peso;

var spanAltura = document.getElementById("altura"); //<span id="altura"></span>
spanAltura.innerHTML = paciente.altura;

var spanImc = document.getElementById("imc");       //<span id="imc"></span>
spanImc.innerHTML = imc.toFixed(2);

var spanSituacao = document.getElementById("situação");  //<span id="situacao"></span>
spanSituacao.innerHTML = situacao;

}

function lePaciente(){
    var inputNome = document.getElementById("txtNome");
    var inputPeso = document.getElementById("numPeso");
    var inputAltura = document.getElementById("numAltura");

    var paciente = {
        nome: inputNome.value,
        peso: inputPeso.value,
        altura: inputAltura.value
    }
    return paciente;
}

function geraRelatorio(pacientes){
    var listaNumerada = document.getElementById("listaNumerada");
    listaNumerada.innerHTML = ""; //apaga a lista caso tiver pacientes

    pacientes.forEach ((paciente) => {   
      var imc = calculaIMC (paciente.peso , paciente.altura);
      var sit = verificaIMC (imc);
      listaNumerada.innerHTML +=`<li> ${paciente.nome} - Situação: ${sit} </li>`;
    });
}