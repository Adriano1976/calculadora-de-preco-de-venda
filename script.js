function calcular() {
  var custoMercadoria = parseFloat(document.getElementById("custo-mercadoria").value);
  var cv = parseFloat(document.getElementById("cv").value);
  var cf = parseFloat(document.getElementById("cf").value);
  var ml = parseFloat(document.getElementById("ml").value);

  var markup = 100 / (100 - (cv + cf + ml));
  var precoVenda = markup * custoMercadoria;
  var margemLucro = ((precoVenda - custoMercadoria) / precoVenda) * 100;
  var lucroLiquido = precoVenda - custoMercadoria;
  
  if (isNaN(precoVenda) || !isFinite(precoVenda) || precoVenda < 0) {
        precoVenda = "Erro: Valor inválido";
    }

    if (isNaN(margemLucro) || !isFinite(margemLucro) || margemLucro < 0) {
        margemLucro = "Erro: Valor inválido";
    }

    if (isNaN(lucroLiquido) || !isFinite(lucroLiquido) || lucroLiquido < 0) {
        lucroLiquido = "Erro: Valor inválido";
    }

  document.getElementById("preco-venda").innerHTML = "Preço de Venda: R$ " + precoVenda.toFixed(2);
  document.getElementById("margem").innerHTML = "Margem de Lucro: " + margemLucro.toFixed(2) + "%";
  document.getElementById("lucro-liquido").innerHTML = "Lucro Líquido: R$ " + lucroLiquido.toFixed(2);  
  document.getElementById("markup").innerHTML = "Markup (%): " + markup.toFixed(2);   
}
