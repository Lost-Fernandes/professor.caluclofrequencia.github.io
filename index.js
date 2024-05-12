var botao = document.getElementById("calcular");
    botao.addEventListener("click", function () {
        var presencas = parseInt(document.getElementById("presencas").value);
        var aulas = parseInt(document.getElementById("aulas").value);
        console.log(presencas);
        if (presencas == '' || aulas == '') {
            alert('Preencha os dois campos!');
        } else {
            if (aulas <= 0) {
                alert('O número de aulas precisa ser no mínimo 1!');
                aulas.focus();
            } else {
                if (presencas > aulas) {
                    alert('O número de presenças não pode ser maior do que o número de aulas!');
                    presencas.focus();
                } else {
                    var faltas = aulas - presencas;
                    porcentagem = calcularPorcentagem(presencas, aulas);
                    document.getElementById("result").innerHTML = "<p>A porcentagem de presenças é de: <strong>" + porcentagem + "%</strong></p>" +
                    "<p>O total de faltas é: <strong>" + faltas + "</strong></p>";
                }
            }
        }
    });     

    function calcularPorcentagem (presencas, aulas) {
        return (100*presencas) / aulas;
    }