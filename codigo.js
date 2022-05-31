function calculaIMC()
{
    let altura, peso, resposta;
    altura = document.getElementById("edtaltura").value;
    peso = document.getElementById("edtpeso").value;
    resposta = peso / altura*altura;
    if (resposta <= 18.5)
    {
        texto = "abaixo do peso";
    } else if (resposta <= 24.9)
    {
        texto = "Peso ideal";
    } else if (resposta <= 29.9)
    {
        texto = "Levemente acima do peso";
    } else {
        texto = "Completar a tabela...";
    }

    document.getElementById ("resp").innerText = texto;

}